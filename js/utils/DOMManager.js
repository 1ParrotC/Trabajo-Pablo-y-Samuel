/**
 * DOMManager - Gestor centralizado de operaciones DOM
 * Proporciona métodos seguros y reutilizables para manipulación del DOM
 */
class DOMManager {
    /**
     * Seleccionar un elemento
     * @param {string} selector - Selector CSS
     * @param {Element} context - Contexto (por defecto document)
     * @returns {Element|null} Elemento encontrado
     */
    static select(selector, context = document) {
        try {
            return context.querySelector(selector);
        } catch (error) {
            console.error(`Error al seleccionar ${selector}:`, error);
            return null;
        }
    }

    /**
     * Seleccionar múltiples elementos
     * @param {string} selector - Selector CSS
     * @param {Element} context - Contexto (por defecto document)
     * @returns {NodeList} Elementos encontrados
     */
    static selectAll(selector, context = document) {
        try {
            return context.querySelectorAll(selector);
        } catch (error) {
            console.error(`Error al seleccionar ${selector}:`, error);
            return [];
        }
    }

    /**
     * Crear un elemento HTML
     * @param {string} tag - Etiqueta HTML
     * @param {Object} attributes - Atributos del elemento
     * @param {string} content - Contenido de texto
     * @returns {Element} Elemento creado
     */
    static createElement(tag, attributes = {}, content = '') {
        const element = document.createElement(tag);
        
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'class') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else {
                element.setAttribute(key, value);
            }
        });

        if (content) {
            element.textContent = content;
        }

        return element;
    }

    /**
     * Agregar clase a un elemento
     * @param {Element} element - Elemento
     * @param {string} className - Nombre de clase
     */
    static addClass(element, className) {
        if (element && className) {
            element.classList.add(...className.split(' '));
        }
    }

    /**
     * Remover clase de un elemento
     * @param {Element} element - Elemento
     * @param {string} className - Nombre de clase
     */
    static removeClass(element, className) {
        if (element && className) {
            element.classList.remove(...className.split(' '));
        }
    }

    /**
     * Verificar si un elemento tiene una clase
     * @param {Element} element - Elemento
     * @param {string} className - Nombre de clase
     * @returns {boolean} True si tiene la clase
     */
    static hasClass(element, className) {
        return element && element.classList.contains(className);
    }

    /**
     * Establecer atributo HTML
     * @param {Element} element - Elemento
     * @param {string|Object} attr - Atributo o objeto de atributos
     * @param {string} value - Valor del atributo
     */
    static setAttribute(element, attr, value) {
        if (!element) return;
        
        if (typeof attr === 'object') {
            Object.entries(attr).forEach(([key, val]) => {
                element.setAttribute(key, val);
            });
        } else {
            element.setAttribute(attr, value);
        }
    }

    /**
     * Obtener atributo HTML
     * @param {Element} element - Elemento
     * @param {string} attr - Nombre del atributo
     * @returns {string|null} Valor del atributo
     */
    static getAttribute(element, attr) {
        return element ? element.getAttribute(attr) : null;
    }

    /**
     * Agregar evento a un elemento
     * @param {Element} element - Elemento
     * @param {string} eventType - Tipo de evento
     * @param {Function} handler - Manejador del evento
     * @param {Object} options - Opciones del evento
     */
    static addEventListener(element, eventType, handler, options = {}) {
        if (element) {
            element.addEventListener(eventType, handler, options);
        }
    }

    /**
     * Remover evento de un elemento
     * @param {Element} element - Elemento
     * @param {string} eventType - Tipo de evento
     * @param {Function} handler - Manejador del evento
     */
    static removeEventListener(element, eventType, handler) {
        if (element) {
            element.removeEventListener(eventType, handler);
        }
    }

    /**
     * Establecer HTML de un elemento
     * @param {Element} element - Elemento
     * @param {string} html - HTML a establecer
     */
    static setHTML(element, html) {
        if (element) {
            element.innerHTML = html;
        }
    }

    /**
     * Obtener HTML de un elemento
     * @param {Element} element - Elemento
     * @returns {string} HTML del elemento
     */
    static getHTML(element) {
        return element ? element.innerHTML : '';
    }

    /**
     * Establecer texto de un elemento
     * @param {Element} element - Elemento
     * @param {string} text - Texto a establecer
     */
    static setText(element, text) {
        if (element) {
            element.textContent = text;
        }
    }

    /**
     * Obtener texto de un elemento
     * @param {Element} element - Elemento
     * @returns {string} Texto del elemento
     */
    static getText(element) {
        return element ? element.textContent : '';
    }

    /**
     * Agregar elemento hijo
     * @param {Element} parent - Elemento padre
     * @param {Element|string} child - Elemento hijo o HTML
     */
    static appendChild(parent, child) {
        if (!parent) return;
        
        if (typeof child === 'string') {
            parent.innerHTML += child;
        } else {
            parent.appendChild(child);
        }
    }

    /**
     * Remover elemento
     * @param {Element} element - Elemento a remover
     */
    static remove(element) {
        if (element && element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }

    /**
     * Clonar elemento
     * @param {Element} element - Elemento a clonar
     * @param {boolean} deep - Clonar profundamente
     * @returns {Element} Elemento clonado
     */
    static clone(element, deep = true) {
        return element ? element.cloneNode(deep) : null;
    }
}

export default DOMManager;
