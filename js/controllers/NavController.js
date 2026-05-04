/**
 * NavController - Controlador de navegación
 * Gestiona la lógica de la navegación principal
 */
import Navbar from '../views/components/Navbar.js';
import DOMManager from '../utils/DOMManager.js';

class NavController {
    constructor(eventEmitter, routeManager) {
        this.eventEmitter = eventEmitter;
        this.routeManager = routeManager;
        this.navbar = null;
    }

    /**
     * Inicializar el controlador de navegación
     */
    init() {
        // Detectar si estamos en una página dentro de /pages/
        const isInPagesFolder = window.location.pathname.includes('/pages/');
        
        // Crear y renderizar navbar
        this.navbar = new Navbar({ isRelativePath: isInPagesFolder });
        
        // Encontrar el contenedor del navbar existente y reemplazarlo
        const existingNav = DOMManager.select('nav.navbar');
        if (existingNav && existingNav.parentNode) {
            existingNav.parentNode.replaceChild(this.navbar.getElement(), existingNav);
        }

        this.setupEventListeners();
    }

    /**
     * Configurar event listeners
     */
    setupEventListeners() {
        const navToggle = DOMManager.select('#nav-toggle');
        
        if (navToggle) {
            DOMManager.addEventListener(navToggle, 'change', (e) => {
                this.handleNavToggle(e);
            });
        }

        // Cerrar el menú cuando se hace click en un link
        const navLinks = DOMManager.selectAll('.nav-link');
        navLinks.forEach(link => {
            DOMManager.addEventListener(link, 'click', () => {
                if (navToggle) {
                    navToggle.checked = false;
                }
            });
        });
    }

    /**
     * Manejar toggle del menú móvil
     * @param {Event} event - Evento del checkbox
     */
    handleNavToggle(event) {
        this.eventEmitter.emit('navToggle', { isOpen: event.target.checked });
    }

    /**
     * Obtener la navbar actual
     * @returns {Navbar} Componente navbar
     */
    getNavbar() {
        return this.navbar;
    }

    /**
     * Actualizar estado activo del navbar
     */
    updateActiveState() {
        const navLinks = DOMManager.selectAll('.nav-link');
        const currentPath = window.location.pathname;

        navLinks.forEach(link => {
            DOMManager.removeClass(link, 'active');

            const href = DOMManager.getAttribute(link, 'href');
            if (href && (
                (currentPath.includes('index.html') && href.includes('index.html')) ||
                (currentPath.includes('menu.html') && href.includes('menu.html')) ||
                (currentPath.includes('about.html') && href.includes('about.html'))
            )) {
                DOMManager.addClass(link, 'active');
            }
        });
    }
}

export default NavController;
