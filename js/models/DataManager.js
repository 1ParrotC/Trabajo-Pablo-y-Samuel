/**
 * DataManager - Gestor centralizado de datos
 * Patrón Singleton para acceso centralizado a todos los modelos
 */
import MenuModel from './MenuModel.js';
import RestaurantModel from './RestaurantModel.js';

class DataManager {
    constructor() {
        if (DataManager.instance) {
            return DataManager.instance;
        }

        this.menu = new MenuModel();
        this.restaurant = new RestaurantModel();

        DataManager.instance = this;
    }

    /**
     * Obtener el modelo del menú
     * @returns {MenuModel} Modelo del menú
     */
    getMenuModel() {
        return this.menu;
    }

    /**
     * Obtener el modelo del restaurante
     * @returns {RestaurantModel} Modelo del restaurante
     */
    getRestaurantModel() {
        return this.restaurant;
    }

    /**
     * Obtener todos los datos
     * @returns {Object} Objeto con todos los datos
     */
    getAllData() {
        return {
            menu: this.menu.getAllItems(),
            restaurant: this.restaurant.getInfo()
        };
    }
}

// Instancia singleton
const dataManagerInstance = new DataManager();

export default dataManagerInstance;
