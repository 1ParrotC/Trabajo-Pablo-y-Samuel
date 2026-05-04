/**
 * Configuración global de la aplicación
 */
const Config = {
    // Información del restaurante
    restaurant: {
        name: 'El Crustáceo Crujiente',
        shortName: 'CRUSTÁCEO CRUJIENTE',
        description: 'Las mejores Cangreburgers de Fondo de Bikini',
        founded: 1980
    },

    // Rutas de la aplicación
    routes: {
        home: '/',
        menu: '/menu',
        about: '/about'
    },

    // Configuración de clases CSS
    cssClasses: {
        active: 'active',
        navbar: 'navbar',
        navbarFixed: 'fixed-top',
        navLink: 'nav-link'
    },

    // Atributos de datos
    dataAttributes: {
        route: 'data-route',
        component: 'data-component',
        action: 'data-action'
    },

    // Selectors DOM comunes
    selectors: {
        navbar: '.navbar',
        navbarBrand: '.navbar-brand',
        navLinks: '.nav-link',
        navToggle: '#nav-toggle',
        footer: '.footer',
        app: '#app'
    },

    // Eventos personalizados
    events: {
        routeChange: 'routeChange',
        navToggle: 'navToggle',
        menuLoad: 'menuLoad'
    }
};

export default Config;
