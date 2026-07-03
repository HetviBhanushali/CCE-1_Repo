// Question ⇄ પ્રશ્ન — shared site behaviour

// Theme toggle (persists for the session only — no localStorage per-file constraints, but fine on GitHub Pages)
(function themeInit(){
  const saved = localStorage.getItem('qa-theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  if(themeBtn){
    themeBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      if(next === 'dark'){ html.setAttribute('data-theme','dark'); } else { html.removeAttribute('data-theme'); }
      localStorage.setItem('qa-theme', next);
      themeBtn.textContent = next === 'dark' ? '☀' : '☾';
    });
    themeBtn.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
  }

  // mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  if(navToggle && sidebar){
    navToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    sidebar.querySelectorAll('a').forEach(a => a.addEventListener('click', () => sidebar.classList.remove('open')));
  }

  // reading progress bar
  const bar = document.getElementById('progress-bar');
  if(bar){
    window.addEventListener('scroll', () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      bar.style.width = scrolled + '%';
    });
  }

  // back to top
  const topBtn = document.getElementById('top-btn');
  if(topBtn){
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('show', window.scrollY > 500);
    });
    topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.15});
    revealEls.forEach(el => io.observe(el));
  }

  // concept search filter (on concepts.html)
  const searchInput = document.getElementById('search-input');
  const searchables = document.querySelectorAll('[data-search]');
  if(searchInput && searchables.length){
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      searchables.forEach(card => {
        const hay = card.getAttribute('data-search').toLowerCase();
        card.style.display = hay.includes(q) ? '' : 'none';
      });
    });
  }
});
