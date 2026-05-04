/**
 * MenuController - Controlador del menú
 * Gestiona la lógica de mostrar y filtrar items del menú
 */
import MenuItem from '../views/components/MenuItem.js';
import DataManager from '../models/DataManager.js';
import DOMManager from '../utils/DOMManager.js';

class MenuController {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.dataManager = DataManager;
        this.menuModel = this.dataManager.getMenuModel();
    }

    /**
     * Renderizar el menú completo
     */
    renderMenu() {
        const menuSection = DOMManager.select('[data-section="menu"]');
        if (!menuSection) return;

        const items = this.menuModel.getAllItems();
        
        // Renderizar sección de burgers
        this.renderMenuCategory(menuSection, 'burgers', 'CANGREBURGERS', items.burgers);
        
        // Renderizar sección de acompañamientos
        this.renderMenuCategory(menuSection, 'sides', 'ACOMPAÑAMIENTOS (CORAL BITS)', items.sides);
        
        // Renderizar sección de bebidas
        this.renderMenuCategory(menuSection, 'drinks', 'BEBIDAS', items.drinks);

        this.eventEmitter.emit('menuLoad', { items });
    }

    /**
     * Renderizar una categoría del menú
     * @param {Element} container - Contenedor
     * @param {string} categoryId - ID de la categoría
     * @param {string} categoryTitle - Título de la categoría
     * @param {Array} items - Items a renderizar
     */
    renderMenuCategory(container, categoryId, categoryTitle, items) {
        const categorySection = document.createElement('div');
        categorySection.className = 'row mb-5';
        categorySection.dataset.category = categoryId;

        let html = `
            <div class="col-12 text-center mb-4">
                <h2 class="text-white border-bottom border-warning d-inline-block pb-2"
                    style="font-family: var(--font-heading);">
                    ${categoryTitle}
                </h2>
            </div>
        `;

        items.forEach(item => {
            const menuItem = new MenuItem({ item, variant: 'list' });
            html += menuItem.getElement().innerHTML;
        });

        categorySection.innerHTML = html;
        DOMManager.appendChild(container, categorySection);
    }

    /**
     * Obtener item por ID
     * @param {string} id - ID del item
     * @returns {Object|null} Item encontrado
     */
    getMenuItem(id) {
        return this.menuModel.getItemById(id);
    }

    /**
     * Obtener items por categoría
     * @param {string} category - Categoría
     * @returns {Array} Items de la categoría
     */
    getMenuByCategory(category) {
        return this.menuModel.getItemsByCategory(category);
    }

    /**
     * Obtener items destacados
     * @returns {Array} Items destacados
     */
    getFeaturedItems() {
        return this.menuModel.getFeaturedItems();
    }

    /**
     * Buscar items por nombre
     * @param {string} query - Término de búsqueda
     * @returns {Array} Items encontrados
     */
    searchItems(query) {
        const allItems = Object.values(this.menuModel.getAllItems()).flat();
        const lowerQuery = query.toLowerCase();

        return allItems.filter(item =>
            item.name.toLowerCase().includes(lowerQuery) ||
            (item.description && item.description.toLowerCase().includes(lowerQuery))
        );
    }
}

export default MenuController;
