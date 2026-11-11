const themeBtn = document.getElementById('theme-toggle');
const themeIcon = themeBtn.querySelector('i');
const html = document.documentElement;

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    applyTheme(savedTheme);
}

themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    applyTheme(newTheme);
});

function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        themeIcon.className = 'fa-solid fa-moon'; 
    } else {
        themeIcon.className = 'fa-solid fa-sun'; 
    }
}

const menu = document.getElementById('menu');
const menuButton = document.getElementById('botao-mobile');
const menuLinks = menu.querySelectorAll('a');
const mobileMenuQuery = window.matchMedia('(max-width: 768px)');

function setMenuOpen(isOpen) {
    menu.classList.toggle('aberto', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
}

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
});

menuLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuButton.focus();
    }
});

document.addEventListener('click', (event) => {
    if (
        menuButton.getAttribute('aria-expanded') === 'true' &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        setMenuOpen(false);
    }
});

mobileMenuQuery.addEventListener('change', (event) => {
    if (!event.matches) setMenuOpen(false);
});
