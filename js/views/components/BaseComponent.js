/**
 * BaseComponent - Clase base para todos los componentes
 * Proporciona funcionalidad común a todos los componentes
 */
import DOMManager from '../utils/DOMManager.js';

class BaseComponent {
    constructor(props = {}) {
        this.props = props;
        this.element = null;
        this.children = [];
    }

    /**
     * Renderizar el componente
     * @abstract
     * @returns {Element} Elemento DOM
     */
    render() {
        throw new Error('render() debe ser implementado en la subclase');
    }

    /**
     * Obtener el elemento DOM
     * @returns {Element} Elemento DOM del componente
     */
    getElement() {
        if (!this.element) {
            this.element = this.render();
        }
        return this.element;
    }

    /**
     * Montar el componente en un contenedor
     * @param {Element|string} container - Contenedor o selector
     */
    mount(container) {
        const target = typeof container === 'string' 
            ? DOMManager.select(container)
            : container;

        if (target) {
            target.appendChild(this.getElement());
        }
    }

    /**
     * Desmontar el componente
     */
    unmount() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
    }

    /**
     * Actualizar el componente
     * @param {Object} newProps - Nuevas propiedades
     */
    update(newProps) {
        this.props = { ...this.props, ...newProps };
        if (this.element && this.element.parentNode) {
            const parent = this.element.parentNode;
            this.unmount();
            this.mount(parent);
        }
    }

    /**
     * Agregar clase CSS al elemento
     * @param {string} className - Nombre de clase
     */
    addClass(className) {
        DOMManager.addClass(this.getElement(), className);
    }

    /**
     * Remover clase CSS del elemento
     * @param {string} className - Nombre de clase
     */
    removeClass(className) {
        DOMManager.removeClass(this.getElement(), className);
    }

    /**
     * Establecer atributo del elemento
     * @param {string|Object} attr - Atributo o objeto de atributos
     * @param {string} value - Valor del atributo
     */
    setAttribute(attr, value) {
        DOMManager.setAttribute(this.getElement(), attr, value);
    }

    /**
     * Agregar evento al componente
     * @param {string} eventType - Tipo de evento
     * @param {Function} handler - Manejador del evento
     */
    addEventListener(eventType, handler) {
        DOMManager.addEventListener(this.getElement(), eventType, handler);
    }
}

export default BaseComponent;
