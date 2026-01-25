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