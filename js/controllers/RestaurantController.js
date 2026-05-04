/**
 * RestaurantController - Controlador del restaurante
 * Gestiona la información del restaurante y su presentación
 */
import DataManager from '../models/DataManager.js';
import DOMManager from '../utils/DOMManager.js';

class RestaurantController {
    constructor(eventEmitter) {
        this.eventEmitter = eventEmitter;
        this.dataManager = DataManager;
        this.restaurantModel = this.dataManager.getRestaurantModel();
    }

    /**
     * Obtener información del restaurante
     * @returns {Object} Información del restaurante
     */
    getRestaurantInfo() {
        return this.restaurantModel.getInfo();
    }

    /**
     * Obtener historia del restaurante
     * @returns {string} Historia
     */
    getHistory() {
        return this.restaurantModel.getHistory();
    }

    /**
     * Obtener staff del restaurante
     * @returns {Array} Miembros del staff
     */
    getStaff() {
        return this.restaurantModel.getStaff();
    }

    /**
     * Obtener horarios del restaurante
     * @returns {Object} Horarios
     */
    getSchedule() {
        return this.restaurantModel.getSchedule();
    }

    /**
     * Verificar si el restaurante está abierto hoy
     * @returns {boolean} True si está abierto
     */
    isOpenToday() {
        return this.restaurantModel.isOpenToday();
    }

    /**
     * Renderizar sección de staff
     */
    renderStaffSection() {
        const staffContainer = DOMManager.select('[data-section="staff"]');
        if (!staffContainer) return;

        const staff = this.getStaff();
        let html = '<div class="row text-center">';

        staff.forEach(member => {
            const badgeHtml = member.badge 
                ? `<span class="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle">${member.badge}</span>`
                : '';

            const borderClass = member.badge ? 'border-warning' : 'border-0';

            html += `
                <div class="col-md-4 mb-4">
                    <div class="card bg-transparent ${borderClass}" ${member.badge ? 'style="border: 4px solid !important;"' : ''}>
                        ${badgeHtml}
                        <div class="display-1 ${member.badge ? 'mt-4' : ''}">
                            ${member.emoji}
                        </div>
                        <div class="card-body">
                            <h3 class="text-warning" style="font-family: var(--font-heading);">
                                ${member.name}
                            </h3>
                            <p class="text-white-50">
                                <strong>${member.role}</strong><br>
                                ${member.description}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        DOMManager.setHTML(staffContainer, html);
    }

    /**
     * Renderizar sección de horarios
     */
    renderScheduleSection() {
        const scheduleContainer = DOMManager.select('[data-section="schedule"]');
        if (!scheduleContainer) return;

        const schedule = this.getSchedule();
        let html = '<ul class="list-unstyled text-white">';

        schedule.summary.forEach(item => {
            html += `
                <li class="mb-2">
                    <strong>${item.day}:</strong> ${item.hours}
                </li>
            `;
        });

        html += '</ul>';
        DOMManager.setHTML(scheduleContainer, html);
    }

    /**
     * Obtener miembro del staff por ID
     * @param {string} id - ID del miembro
     * @returns {Object|null} Miembro del staff
     */
    getStaffMember(id) {
        return this.restaurantModel.getStaffById(id);
    }
}

export default RestaurantController;
