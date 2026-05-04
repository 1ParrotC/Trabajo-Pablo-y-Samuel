/**
 * RouteManager - Gestor de rutas de la aplicación
 * Maneja el enrutamiento y la navegación entre páginas
 */
class RouteManager {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.routes = new Map();
        this.currentRoute = null;
        this.init();
    }

    /**
     * Inicializar el gestor de rutas
     */
    init() {
        // Detectar cambios de página
        window.addEventListener('load', () => this.detectRoute());
    }

    /**
     * Registrar una ruta
     * @param {string} path - Ruta
     * @param {Object} handler - Manejador de la ruta
     */
    register(path, handler) {
        this.routes.set(path, handler);
    }

    /**
     * Detectar la ruta actual basada en el archivo HTML
     * @returns {string} Ruta detectada
     */
    detectRoute() {
        const pathname = window.location.pathname;
        
        let route = '/';
        if (pathname.includes('menu.html')) {
            route = '/menu';
        } else if (pathname.includes('about.html')) {
            route = '/about';
        }

        this.currentRoute = route;
        return route;
    }

    /**
     * Obtener la ruta actual
     * @returns {string} Ruta actual
     */
    getCurrentRoute() {
        return this.currentRoute;
    }

    /**
     * Navegar a una ruta
     * @param {string} route - Ruta a navegar
     * @param {string} filePath - Ruta del archivo
     */
    navigate(route, filePath) {
        this.currentRoute = route;
        window.location.href = filePath;
        this.eventEmitter.emit('routeChange', { route, filePath });
    }

    /**
     * Verificar si estamos en una ruta específica
     * @param {string} route - Ruta a verificar
     * @returns {boolean} True si estamos en esa ruta
     */
    isRoute(route) {
        return this.currentRoute === route;
    }
}

export default RouteManager;
