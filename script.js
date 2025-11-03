document.addEventListener('DOMContentLoaded', function() {

    // --- 1. GESTIONE DEL MENU HAMBURGER PER MOBILE ---
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger-menu');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    const nav = document.querySelector('.main-nav');
    const header = document.querySelector('.main-header .container');
    header.appendChild(hamburger);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamburger.classList.toggle('is-active');
    });

    // --- 2. GESTIONE DELLE ANIMAZIONI ON-SCROLL ---
    // Seleziona tutti gli elementi che devono essere animati
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Opzioni per l'Intersection Observer
    const observerOptions = {
        root: null, // usa il viewport come area di intersezione
        rootMargin: '0px',
        threshold: 0.1 // l'animazione parte quando almeno il 10% dell'elemento è visibile
    };

    // La funzione che viene eseguita quando un elemento entra nel viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Ferma l'osservazione dopo la prima animazione
            }
        });
    };

    // Crea l'observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Applica l'observer a ogni elemento da animare
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
// --- 4. ANIMAZIONE LETTERE TITOLO HOME ---
document.querySelectorAll('.animate-letters').forEach(textElement => {
    const text = textElement.textContent;
    textElement.innerHTML = ''; // Svuota l'elemento
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'letter-mask';
        
        const innerSpan = document.createElement('span');
        innerSpan.className = 'letter';
        innerSpan.textContent = char === ' ' ? '\u00A0' : char; // Usa un non-breaking space per gli spazi
        innerSpan.style.transitionDelay = `${index * 50}ms`; // Applica il ritardo a cascata
        
        span.appendChild(innerSpan);
        textElement.appendChild(span);
    });
});
