(function () {
  // Liste der RTL-Sprachen (kann erweitert werden)
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

  // Sprache des Browsers ermitteln
  const lang = navigator.language || navigator.userLanguage || 'en';

  // Prüfen, ob die Sprache eine RTL-Sprache ist
  const isRTL = rtlLanguages.some(code => lang.startsWith(code));

  // Schreibrichtung im HTML-Element setzen
  if (isRTL) {
    document.documentElement.setAttribute('dir', 'rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
  }

})();

