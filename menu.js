// Automatisch Sprache und Schreibrichtung erkennen
const userLang = navigator.language || navigator.userLanguage;
const isRTL = ['ar', 'he', 'fa', 'ur'].some(code => userLang.startsWith(code));

const nav = document.getElementById('main-nav');
if (isRTL) {
    nav.style.textAlign = 'right';
    nav.style.direction = 'rtl';
} else {
    nav.style.textAlign = 'left';
    nav.style.direction = 'ltr';
}
