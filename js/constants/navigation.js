/**
 * Datos de navegación de la aplicación
 */
const Navigation = {
    items: [
        {
            label: 'INICIO',
            href: './index.html',
            route: '/',
            icon: null
        },
        {
            label: 'CARTA',
            href: './pages/menu.html',
            route: '/menu',
            icon: null
        },
        {
            label: 'NOSOTROS',
            href: './pages/about.html',
            route: '/about',
            icon: null
        }
    ],

    cta: {
        label: 'PEDIR',
        href: './pages/menu.html',
        class: 'btn btn-outline-light btn-sm'
    },

    // Mapeo de rutas para determinar página activa
    routeMap: {
        '/': 'index.html',
        '/menu': 'menu.html',
        '/about': 'about.html'
    },

    // Obtener item activo basado en la URL actual
    getActiveItem() {
        const currentPath = window.location.pathname;
        return this.items.find(item => 
            currentPath.includes(item.route === '/' ? 'index.html' : item.route)
        );
    }
};

export default Navigation;
