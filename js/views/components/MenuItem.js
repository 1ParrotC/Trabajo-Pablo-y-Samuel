/**
 * MenuItem - Componente para un item del menú
 */
import BaseComponent from './BaseComponent.js';

class MenuItem extends BaseComponent {
    constructor(props = {}) {
        super(props);
        this.item = props.item || {};
        this.variant = props.variant || 'card'; // 'card' o 'list'
    }

    render() {
        if (this.variant === 'card') {
            return this.renderCardVariant();
        } else if (this.variant === 'list') {
            return this.renderListVariant();
        }
    }

    /**
     * Renderizar variante tarjeta
     * @returns {Element} Elemento tarjeta
     */
    renderCardVariant() {
        const div = document.createElement('div');
        div.className = 'col-md-4';

        div.innerHTML = `
            <div class="carta-item card h-100">
                <div class="carta-image">
                    <img src="${this.item.image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400'}" 
                         alt="${this.item.name}">
                </div>
                <div class="card-body">
                    <h3 class="card-title">${this.item.name}</h3>
                    <p class="card-text">${this.item.description || ''}</p>
                    ${this.item.price ? `<p class="text-warning fw-bold">$${this.item.price}</p>` : ''}
                </div>
            </div>
        `;

        return div;
    }

    /**
     * Renderizar variante lista
     * @returns {Element} Elemento lista
     */
    renderListVariant() {
        const div = document.createElement('div');
        div.className = 'col-md-6 mb-4';

        const borderClass = this.item.featured ? 'border-warning' : 'border-secondary';

        div.innerHTML = `
            <div class="d-flex align-items-center bg-dark bg-opacity-50 p-3 rounded border ${borderClass}">
                <div class="flex-grow-1">
                    <h4 class="text-warning mb-1" style="font-family: var(--font-heading);">
                        ${this.item.name}
                    </h4>
                    ${this.item.description ? `<p class="text-white-50 mb-0 small">${this.item.description}</p>` : ''}
                </div>
                <div class="text-end ms-3">
                    <span class="h4 text-white">$${this.item.price.toFixed(2)}</span>
                </div>
            </div>
        `;

        return div;
    }
}

export default MenuItem;
