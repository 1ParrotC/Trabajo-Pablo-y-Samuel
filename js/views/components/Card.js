/**
 * Card - Componente de tarjeta genérica
 */
import BaseComponent from './BaseComponent.js';

class Card extends BaseComponent {
    constructor(props = {}) {
        super(props);
        this.title = props.title || '';
        this.content = props.content || '';
        this.footer = props.footer || null;
        this.image = props.image || null;
        this.className = props.className || '';
    }

    render() {
        const card = document.createElement('div');
        card.className = `card h-100 ${this.className}`;

        let html = '';

        if (this.image) {
            html += `<img src="${this.image}" class="card-img-top" alt="${this.title}">`;
        }

        html += `<div class="card-body">`;
        if (this.title) {
            html += `<h3 class="card-title">${this.title}</h3>`;
        }
        if (this.content) {
            html += `<p class="card-text">${this.content}</p>`;
        }
        html += `</div>`;

        if (this.footer) {
            html += `<div class="card-footer">${this.footer}</div>`;
        }

        card.innerHTML = html;
        return card;
    }
}

export default Card;
