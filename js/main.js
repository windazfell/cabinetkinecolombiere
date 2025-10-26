// /js/main.js

// Mobile nav (classe CSS plutôt qu'un style inline)
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav){
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  const openMenu = () => {
    toggle.setAttribute('aria-expanded', 'true');
    nav.classList.add('is-open');
  };

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    open ? closeMenu() : openMenu();
  });

  // Fermer au resize > 720px (menu desktop visible)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 720) closeMenu();
  });

  // Fermer à la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Fake submit (démo front). Remplacez par un endpoint réel (Formspree/Netlify Forms) ou votre backend.
window.fakeSubmit = (e) => {
  e.preventDefault();
  alert("Merci ! Votre message a bien été pris en compte (démo). Configurez l’envoi réel plus tard.");
  return false;
};

/* Références de conception (dans l’esprit « sources ») :
   - Google Search Central : Structured Data & JSON-LD (recommandé)
     https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
   - Schema.org : MedicalClinic / Physiotherapy / PhysicalTherapy
     https://schema.org/MedicalClinic  https://schema.org/Physiotherapy  https://schema.org/PhysicalTherapy
   - W3C/WAI WCAG 2.1 : Skip link & Bypass Blocks
     https://www.w3.org/WAI/test-evaluate/easy-checks/skip-link/
     https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
   - CNIL (France) : cookies & conformité
     https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/comment-mettre-mon-site-web-en-conformite
*/

(function () {
  const now = new Date(document.lastModified);

  // Année courante pour le copyright
  const y = document.getElementById("year");
  if (y) y.textContent = now.getFullYear();

  // Date de dernière mise à jour (formatée en FR)
  const t = document.getElementById("last-updated");
  if (t) {
    const fmt = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" });
    t.textContent = fmt.format(now);             // ex. "18 septembre 2025"
    t.setAttribute("datetime", now.toISOString().slice(0, 10)); // ISO
  }
})();
