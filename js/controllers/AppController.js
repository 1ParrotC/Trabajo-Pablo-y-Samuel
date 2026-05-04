/**
 * AppController - Controlador principal de la aplicación
 * Coordina la inicialización y gestión general de la app
 */
import EventEmitter from '../utils/EventEmitter.js';
import RouteManager from '../utils/RouteManager.js';
import NavController from './NavController.js';
import MenuController from './MenuController.js';
import RestaurantController from './RestaurantController.js';
import Footer from '../views/components/Footer.js';
import DOMManager from '../utils/DOMManager.js';

class AppController {
    constructor() {
        this.eventEmitter = new EventEmitter();
        this.routeManager = new RouteManager(this.eventEmitter);
        
        // Controladores
        this.navController = new NavController(this.eventEmitter, this.routeManager);
        this.menuController = new MenuController(this.eventEmitter);
        this.restaurantController = new RestaurantController(this.eventEmitter);
    }

    /**
     * Inicializar la aplicación
     */
    init() {
        console.log('🚀 Iniciando El Crustáceo Crujiente...');

        // Inicializar navegación
        this.navController.init();
        this.navController.updateActiveState();

        // Inicializar footer
        this.initFooter();

        // Inicializar página actual
        this.initCurrentPage();

        // Setup de event listeners globales
        this.setupGlobalListeners();

        console.log('✅ Aplicación inicializada correctamente');
    }

    /**
     * Inicializar el footer en todas las páginas
     */
    initFooter() {
        const existingFooter = DOMManager.select('footer');
        
        if (existingFooter && existingFooter.parentNode) {
            const newFooter = new Footer();
            existingFooter.parentNode.replaceChild(newFooter.getElement(), existingFooter);
        }
    }

    /**
     * Inicializar la página actual según la ruta
     */
    initCurrentPage() {
        const currentRoute = this.routeManager.detectRoute();

        switch (currentRoute) {
            case '/menu':
                this.initMenuPage();
                break;
            case '/about':
                this.initAboutPage();
                break;
            case '/':
            default:
                this.initHomePage();
                break;
        }
    }

    /**
     * Inicializar página de inicio
     */
    initHomePage() {
        console.log('📄 Inicializando página de inicio...');
        // La página de inicio es principalmente estática
        // Aquí se pueden agregar integraciones dinámicas si es necesario
    }

    /**
     * Inicializar página de menú
     */
    initMenuPage() {
        console.log('🍔 Inicializando página de menú...');
        
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.menuController.renderMenu();
            });
        } else {
            this.menuController.renderMenu();
        }
    }

    /**
     * Inicializar página de "Nosotros"
     */
    initAboutPage() {
        console.log('ℹ️ Inicializando página de Nosotros...');
        
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.restaurantController.renderStaffSection();
                this.restaurantController.renderScheduleSection();
            });
        } else {
            this.restaurantController.renderStaffSection();
            this.restaurantController.renderScheduleSection();
        }
    }

    /**
     * Configurar event listeners globales
     */
    setupGlobalListeners() {
        // Escuchar cambios de ruta
        this.eventEmitter.on('routeChange', (data) => {
            console.log('📍 Navegando a:', data.route);
            this.initCurrentPage();
        });

        // Escuchar eventos del menú
        this.eventEmitter.on('menuLoad', (data) => {
            console.log('✓ Menú cargado con', Object.keys(data.items).length, 'categorías');
        });
    }

    /**
     * Obtener un controlador específico
     * @param {string} controllerName - Nombre del controlador
     * @returns {Object} Controlador solicitado
     */
    getController(controllerName) {
        const controllers = {
            nav: this.navController,
            menu: this.menuController,
            restaurant: this.restaurantController
        };

        return controllers[controllerName] || null;
    }

    /**
     * Obtener el EventEmitter
     * @returns {EventEmitter} EventEmitter de la aplicación
     */
    getEventEmitter() {
        return this.eventEmitter;
    }
}

export default AppController;
