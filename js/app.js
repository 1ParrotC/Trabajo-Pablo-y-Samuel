/**
 * app.js - Punto de entrada principal de la aplicación
 * Inicializa toda la arquitectura MVC
 */
import AppController from './controllers/AppController.js';

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const app = new AppController();
    app.init();

    // Hacer la instancia global para debugging
    window.__KRUSTY_KRAB__ = app;

    // Log de inicialización
    console.log('🦀 El Crustáceo Crujiente está abierto al público');
    console.log('Accede a la aplicación con: window.__KRUSTY_KRAB__');
});

// Manejar errores no capturados
window.addEventListener('error', (event) => {
    console.error('❌ Error global:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Promesa rechazada:', event.reason);
});
