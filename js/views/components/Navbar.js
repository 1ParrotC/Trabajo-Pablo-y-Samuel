/**
 * Navbar - Componente de barra de navegación
 */
import BaseComponent from './BaseComponent.js';
import Navigation from '../../constants/navigation.js';

class Navbar extends BaseComponent {
    constructor(props = {}) {
        super(props);
        this.isRelativePath = props.isRelativePath || false;
    }

    render() {
        const nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-lg navbar-dark fixed-top';

        nav.innerHTML = `
            <div class="container">
                <a class="navbar-brand" href="${this.isRelativePath ? '../' : './'}index.html">
                    <div class="logo-icon d-inline-block align-middle">
                        <svg viewBox="0 0 100 100" width="50" height="50">
                            <ellipse cx="50" cy="60" rx="35" ry="25" fill="#f5f5dc" stroke="#8B4513" stroke-width="3" />
                            <path d="M15 55 Q50 20 85 55" fill="#f5f5dc" stroke="#8B4513" stroke-width="3" />
                            <text x="50" y="45" text-anchor="middle" fill="#CC0000" font-size="12"
                                font-family="'Luckiest Guy', cursive">THE</text>
                            <text x="50" y="60" text-anchor="middle" fill="#CC0000" font-size="14"
                                font-family="'Luckiest Guy', cursive">KRUSTY</text>
                            <text x="50" y="75" text-anchor="middle" fill="#CC0000" font-size="14"
                                font-family="'Luckiest Guy', cursive">KRAB</text>
                        </svg>
                    </div>
                    <span class="logo-text d-none d-md-inline">CRUSTÁCEO CRUJIENTE</span>
                </a>

                <input type="checkbox" id="nav-toggle" class="d-none">
                <label for="nav-toggle" class="navbar-toggler" style="cursor: pointer;">
                    <span class="navbar-toggler-icon"></span>
                </label>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center">
                        ${this.renderNavItems()}
                        ${this.renderCTA()}
                    </ul>
                </div>
            </div>
        `;

        return nav;
    }

    /**
     * Renderizar items de navegación
     * @returns {string} HTML de items
     */
    renderNavItems() {
        const basePath = this.isRelativePath ? '../' : './';
        
        return Navigation.items.map(item => {
            const href = item.href.replace('./', basePath);
            const isActive = this.isActiveNavItem(item.href);
            
            return `
                <li class="nav-item">
                    <a class="nav-link ${isActive ? 'active' : ''}" href="${href}">
                        ${item.label}
                    </a>
                </li>
            `;
        }).join('');
    }

    /**
     * Renderizar botón CTA (Call To Action)
     * @returns {string} HTML del botón
     */
    renderCTA() {
        const basePath = this.isRelativePath ? '../' : './';
        const href = Navigation.cta.href.replace('./', basePath);

        return `
            <li class="nav-item ms-lg-2">
                <a href="${href}" class="${Navigation.cta.class}">
                    ${Navigation.cta.label}
                </a>
            </li>
        `;
    }

    /**
     * Determinar si un item de navegación está activo
     * @param {string} href - Href del item
     * @returns {boolean} True si está activo
     */
    isActiveNavItem(href) {
        const currentPath = window.location.pathname;
        
        if (href === './index.html' && currentPath.includes('index.html')) {
            return true;
        }
        if (href === './pages/menu.html' && currentPath.includes('menu.html')) {
            return true;
        }
        if (href === './pages/about.html' && currentPath.includes('about.html')) {
            return true;
        }

        return false;
    }
}

export default Navbar;
