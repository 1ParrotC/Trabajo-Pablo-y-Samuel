/**
 * MenuModel - Modelo de datos del menú
 * Contiene toda la información sobre los items del menú
 */
class MenuModel {
    constructor() {
        this.items = this.initializeMenuItems();
    }

    /**
     * Inicializar items del menú
     * @returns {Array} Array de items del menú
     */
    initializeMenuItems() {
        return {
            burgers: [
                {
                    id: 'burger-1',
                    name: 'CANGREBURGER',
                    description: 'Pan de semillas, carne, lechuga, queso, cebolla, tomate, ketchup, mostaza, pepinillos.',
                    price: 1.25,
                    category: 'cangreburgers',
                    featured: true
                },
                {
                    id: 'burger-2',
                    name: 'DOBLE CANGREBURGER',
                    description: 'Doble carne, doble placer, doble arteria tapada.',
                    price: 2.00,
                    category: 'cangreburgers'
                },
                {
                    id: 'burger-3',
                    name: 'CANGREBURGER JUNIOR',
                    description: 'Para los pequeños crustáceos.',
                    price: 0.99,
                    category: 'cangreburgers'
                },
                {
                    id: 'burger-4',
                    name: 'MONSTER KRABBY PATTY',
                    description: '¡Cuidado! Puede causar explosión de sabor.',
                    price: 4.00,
                    category: 'cangreburgers'
                }
            ],
            sides: [
                {
                    id: 'side-1',
                    name: 'PAPAS FRITAS DE CORAL',
                    price: 1.00,
                    category: 'sides'
                },
                {
                    id: 'side-2',
                    name: 'AROS DE CEBOLLA MARINA',
                    price: 1.50,
                    category: 'sides'
                },
                {
                    id: 'side-3',
                    name: 'ALGAS FRITAS CRUJIENTES',
                    price: 1.25,
                    category: 'sides'
                }
            ],
            drinks: [
                {
                    id: 'drink-1',
                    name: 'REFRESCO SUBMARINO',
                    price: 0.75,
                    category: 'drinks'
                },
                {
                    id: 'drink-2',
                    name: 'BATIDO DE ALGAS',
                    price: 1.50,
                    category: 'drinks'
                }
            ]
        };
    }

    /**
     * Obtener todos los items del menú
     * @returns {Object} Todos los items organizados por categoría
     */
    getAllItems() {
        return this.items;
    }

    /**
     * Obtener items por categoría
     * @param {string} category - Categoría de items
     * @returns {Array} Items de la categoría
     */
    getItemsByCategory(category) {
        return this.items[category] || [];
    }

    /**
     * Obtener item por ID
     * @param {string} id - ID del item
     * @returns {Object|null} Item encontrado
     */
    getItemById(id) {
        for (const category in this.items) {
            const item = this.items[category].find(i => i.id === id);
            if (item) return item;
        }
        return null;
    }

    /**
     * Obtener items destacados
     * @returns {Array} Items destacados
     */
    getFeaturedItems() {
        const featured = [];
        for (const category in this.items) {
            featured.push(...this.items[category].filter(item => item.featured));
        }
        return featured;
    }

    /**
     * Agregar item al menú
     * @param {string} category - Categoría
     * @param {Object} item - Nuevo item
     */
    addItem(category, item) {
        if (!this.items[category]) {
            this.items[category] = [];
        }
        this.items[category].push(item);
    }

    /**
     * Eliminar item del menú
     * @param {string} id - ID del item a eliminar
     * @returns {boolean} True si se eliminó
     */
    removeItem(id) {
        for (const category in this.items) {
            const index = this.items[category].findIndex(i => i.id === id);
            if (index > -1) {
                this.items[category].splice(index, 1);
                return true;
            }
        }
        return false;
    }
}

export default MenuModel;
