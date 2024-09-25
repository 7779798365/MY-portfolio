// Wait for the DOM to be fully loaded before executing any scripts
document.addEventListener('DOMContentLoaded', () => {
    // Navigation functionality
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Header visibility on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Language switching functionality
    const translations = {
        en: {
            welcome: "Hello, My name is Zulqurnan Hyder,",
            description: "I'm a Graphic Designer & Frontend Developer.",
            services: "My Services",
            work: "My Work",
            contact: "Contact Me"
        },
        fr: {
            welcome: "Bonjour, je m'appelle Zulqurnan Hyder,",
            description: "Je suis Graphiste & Développeur Frontend.",
            services: "Mes Services",
            work: "Mon Travail",
            contact: "Contactez-moi"
        }
    };

    function switchLanguage(language) {
        localStorage.setItem('preferredLanguage', language);
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    // Load preferred language on page load
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);

    // Add event listeners to language buttons
    const frenchButton = document.querySelector('button[aria-label="Switch to French"]');
    const englishButton = document.querySelector('button[aria-label="Switch to English"]');

    if (frenchButton) {
        frenchButton.addEventListener('click', () => switchLanguage('fr'));
    }
    if (englishButton) {
        englishButton.addEventListener('click', () => switchLanguage('en'));
    }

// Video functionality for work items
// Video functionality for work items
const videoItems = document.querySelectorAll('.video-item');
videoItems.forEach(item => {
    const video = item.querySelector('video');
    if (video) {
        item.addEventListener('mouseenter', () => {
            video.play();
        });
        item.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});