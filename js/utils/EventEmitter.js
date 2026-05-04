/**
 * EventEmitter - Sistema de eventos personalizado
 * Implementa el patrón Observer para comunicación entre componentes
 */
class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    /**
     * Suscribirse a un evento
     * @param {string} eventName - Nombre del evento
     * @param {Function} listener - Función callback
     * @returns {Function} Función para desuscribirse
     */
    on(eventName, listener) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(listener);

        // Retornar función de desuscripción
        return () => this.off(eventName, listener);
    }

    /**
     * Suscribirse una sola vez a un evento
     * @param {string} eventName - Nombre del evento
     * @param {Function} listener - Función callback
     */
    once(eventName, listener) {
        const onceWrapper = (...args) => {
            listener(...args);
            this.off(eventName, onceWrapper);
        };
        this.on(eventName, onceWrapper);
    }

    /**
     * Desuscribirse de un evento
     * @param {string} eventName - Nombre del evento
     * @param {Function} listener - Función callback a remover
     */
    off(eventName, listener) {
        if (!this.events.has(eventName)) return;

        const listeners = this.events.get(eventName);
        const index = listeners.indexOf(listener);
        
        if (index > -1) {
            listeners.splice(index, 1);
        }

        if (listeners.length === 0) {
            this.events.delete(eventName);
        }
    }

    /**
     * Emitir un evento
     * @param {string} eventName - Nombre del evento
     * @param {...any} args - Argumentos a pasar a los listeners
     */
    emit(eventName, ...args) {
        if (!this.events.has(eventName)) return;

        const listeners = this.events.get(eventName);
        listeners.forEach(listener => {
            try {
                listener(...args);
            } catch (error) {
                console.error(`Error en listener para evento ${eventName}:`, error);
            }
        });
    }

    /**
     * Limpiar todos los eventos
     */
    clear() {
        this.events.clear();
    }

    /**
     * Obtener número de listeners para un evento
     * @param {string} eventName - Nombre del evento
     * @returns {number} Cantidad de listeners
     */
    listenerCount(eventName) {
        if (!this.events.has(eventName)) return 0;
        return this.events.get(eventName).length;
    }
}

export default EventEmitter;
