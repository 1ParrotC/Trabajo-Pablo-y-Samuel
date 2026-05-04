/**
 * RestaurantModel - Modelo de datos del restaurante
 * Contiene información sobre el restaurante, staff, horarios, etc.
 */
class RestaurantModel {
    constructor() {
        this.info = this.initializeRestaurantInfo();
        this.staff = this.initializeStaff();
        this.schedule = this.initializeSchedule();
    }

    /**
     * Inicializar información del restaurante
     * @returns {Object} Información del restaurante
     */
    initializeRestaurantInfo() {
        return {
            name: 'El Crustáceo Crujiente',
            shortName: 'CRUSTÁCEO CRUJIENTE',
            description: 'Las mejores Cangreburgers de Fondo de Bikini',
            slogan: '"El dinero siempre tiene la razón"',
            founded: 1980,
            location: 'Fondo de Bikini',
            originalName: 'Rusty Krab',
            owner: 'Eugenio H. Cangrejo',
            contact: {
                phone: '+1-555-KRUSTY',
                email: 'info@crustaceocrujiente.com'
            }
        };
    }

    /**
     * Inicializar staff del restaurante
     * @returns {Array} Miembros del staff
     */
    initializeStaff() {
        return [
            {
                id: 'staff-1',
                name: 'DON CANGREJO',
                role: 'Fundador y Propietario',
                description: 'Ama el dinero más que a nada.',
                emoji: '🦀'
            },
            {
                id: 'staff-2',
                name: 'BOB ESPONJA',
                role: 'Cocinero Estrella',
                description: 'Prepara las Cangreburgers con amor.',
                emoji: '🧽',
                badge: 'EMPLEADO DEL MES'
            },
            {
                id: 'staff-3',
                name: 'CALAMARDO',
                role: 'Cajero',
                description: 'No quiere estar aquí.',
                emoji: '🐙'
            }
        ];
    }

    /**
     * Inicializar horarios del restaurante
     * @returns {Object} Horarios por día
     */
    initializeSchedule() {
        return {
            monday: '08:00 - 20:00',
            tuesday: '08:00 - 20:00',
            wednesday: '08:00 - 20:00',
            thursday: '08:00 - 20:00',
            friday: '08:00 - 20:00',
            saturday: '10:00 - 22:00',
            sunday: 'CERRADO (Contando dinero)',
            summary: [
                { day: 'Lunes - Viernes', hours: '08:00 - 20:00' },
                { day: 'Sábados', hours: '10:00 - 22:00' },
                { day: 'Domingos', hours: 'CERRADO (Contando dinero)' }
            ]
        };
    }

    /**
     * Obtener información del restaurante
     * @returns {Object} Información del restaurante
     */
    getInfo() {
        return this.info;
    }

    /**
     * Obtener staff del restaurante
     * @returns {Array} Miembros del staff
     */
    getStaff() {
        return this.staff;
    }

    /**
     * Obtener horarios del restaurante
     * @returns {Object} Horarios
     */
    getSchedule() {
        return this.schedule;
    }

    /**
     * Obtener historia/descripción del restaurante
     * @returns {string} Descripción
     */
    getHistory() {
        return `${this.info.name} era originalmente una casa de retiro llamada "${this.info.originalName}", ` +
               `que fue adquirida por ${this.info.owner}. Convertida en el restaurante más exitoso de ` +
               `${this.info.location}, es el único lugar donde puedes encontrar la genuina Cangreburger. ` +
               `Filosofía: ${this.info.slogan}`;
    }

    /**
     * Obtener miembro del staff por ID
     * @param {string} id - ID del staff
     * @returns {Object|null} Miembro del staff
     */
    getStaffById(id) {
        return this.staff.find(member => member.id === id) || null;
    }

    /**
     * Verificar si está abierto hoy
     * @returns {boolean} True si está abierto
     */
    isOpenToday() {
        const today = new Date().getDay();
        return today !== 0; // 0 = domingo (cerrado)
    }
}

export default RestaurantModel;
