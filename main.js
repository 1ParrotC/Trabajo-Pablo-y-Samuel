// JavaScript para funcionalidades adicionales

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar tooltips de Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Contador animado para burgers vendidas
    function animateCounter() {
        const digits = document.querySelectorAll('.digit');
        if (digits.length > 0) {
            let count = 0;
            const interval = setInterval(() => {
                if (count < 8888888) {
                    count += 123456;
                    const countStr = count.toString().padStart(7, '8');
                    digits.forEach((digit, index) => {
                        digit.textContent = countStr[index];
                    });
                } else {
                    clearInterval(interval);
                }
            }, 100);
        }
    }
    
    // Iniciar animación del contador cuando sea visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const counterSection = document.querySelector('.counter');
    if (counterSection) {
        observer.observe(counterSection);
    }
    
    // Efecto de paralaje en el hero
    function handleParallax() {
        const hero = document.querySelector('.hero');
        const heroText = document.querySelector('.hero-text-scroll');
        const burger = document.querySelector('.burger-image');
        
        if (hero && heroText && burger) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                const rate2 = scrolled * -0.3;
                
                heroText.style.transform = `translateY(-50%) translateX(${rate}px)`;
                burger.style.transform = `translateY(${rate2}px)`;
            });
        }
    }
    
    handleParallax();
    
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
