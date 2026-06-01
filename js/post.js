// ============================================
// READING PROGRESS BAR
// ============================================
(function() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', function() {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

// ============================================
// TABLE OF CONTENTS — BUILD + ACTIVE STATE
// ============================================
(function() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;

  // Find all h2s in post-body
  const headings = document.querySelectorAll('.post-body h2');
  if (headings.length === 0) {
    const toc = document.querySelector('.post-toc');
    if (toc) toc.style.display = 'none';
    return;
  }

  // Build TOC items
  headings.forEach(function(h, i) {
    // Give heading an ID if it doesn't have one
    if (!h.id) {
      h.id = 'section-' + i;
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', function(e) {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Highlight active section on scroll
  const links = tocList.querySelectorAll('a');
  window.addEventListener('scroll', function() {
    let current = '';
    headings.forEach(function(h) {
      const rect = h.getBoundingClientRect();
      if (rect.top <= 120) {
        current = h.id;
      }
    });
    links.forEach(function(a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }, { passive: true });
})();

// ============================================
// MOBILE NAV TOGGLE
// ============================================
(function() {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function() {
      nav.classList.toggle('is-open');
    });
  }
})();
