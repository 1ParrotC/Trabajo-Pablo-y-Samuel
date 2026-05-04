/**
 * Footer - Componente de pie de página
 */
import BaseComponent from './BaseComponent.js';

class Footer extends BaseComponent {
    constructor(props = {}) {
        super(props);
        this.restaurantName = props.restaurantName || 'El Crustáceo Crujiente';
        this.year = props.year || new Date().getFullYear();
    }

    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer pt-5 pb-3';

        footer.innerHTML = `
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-4">
                        <h4 class="text-warning mb-3">EL CRUSTÁCEO CRUJIENTE</h4>
                        <p class="text-white-50">El mejor restaurante de comida rápida de Fondo de Bikini. 
                        Propiedad de Eugenio H. Cangrejo.</p>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h4 class="text-warning mb-3">ENLACES</h4>
                        <ul class="list-unstyled">
                            <li><a href="./pages/about.html" class="text-white-50 text-decoration-none">Trabaja con nosotros</a></li>
                            <li><a href="#" class="text-white-50 text-decoration-none">Aviso Legal</a></li>
                            <li><a href="#" class="text-white-50 text-decoration-none">Política de Privacidad</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 mb-4">
                        <h4 class="text-warning mb-3">HORARIO</h4>
                        <p class="text-white-50">Lun - Vie: 09:00 - 22:00<br>Sáb - Dom: 10:00 - 23:00</p>
                    </div>
                </div>
                <div class="text-center pt-4 border-top border-secondary">
                    <p class="text-white-50 mb-0">&copy; ${this.year} ${this.restaurantName}. Todos los derechos reservados.</p>
                </div>
            </div>
        `;

        return footer;
    }
}

export default Footer;
