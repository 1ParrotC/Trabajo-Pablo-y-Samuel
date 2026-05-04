/**
 * Button - Componente de botón
 */
import BaseComponent from './BaseComponent.js';

class Button extends BaseComponent {
    constructor(props = {}) {
        super(props);
        this.label = props.label || 'Botón';
        this.href = props.href || null;
        this.onClick = props.onClick || null;
        this.variant = props.variant || 'primary'; // primary, secondary, danger, warning
        this.size = props.size || 'md'; // sm, md, lg
        this.className = props.className || '';
    }

    render() {
        const tag = this.href ? 'a' : 'button';
        const element = document.createElement(tag);

        const sizeClass = {
            sm: 'btn-sm',
            md: '',
            lg: 'btn-lg'
        }[this.size] || '';

        const variantClass = {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            danger: 'btn-danger',
            warning: 'btn-warning',
            outline: 'btn-outline-light'
        }[this.variant] || 'btn-primary';

        element.className = `btn ${variantClass} ${sizeClass} ${this.className}`.trim();
        element.textContent = this.label;

        if (this.href) {
            element.href = this.href;
        }

        if (this.onClick && !this.href) {
            element.addEventListener('click', this.onClick);
        }

        return element;
    }
}

export default Button;
