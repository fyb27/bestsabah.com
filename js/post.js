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

  const headings = document.querySelectorAll('.post-body h2');
  if (headings.length === 0) {
    const toc = document.querySelector('.post-toc');
    if (toc) toc.style.display = 'none';
    return;
  }

  // Build TOC items
  headings.forEach(function(h, i) {
    if (!h.id) h.id = 'section-' + i;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const top = h.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Highlight active section — uses bottom of page for last item
  const links = tocList.querySelectorAll('a');

  function updateTOC() {
    const scrollY = window.scrollY;
    const windowH = window.innerHeight;
    const docH = document.documentElement.scrollHeight;
    let current = headings[0].id;

    // If near bottom of page, highlight last heading
    if (scrollY + windowH >= docH - 40) {
      current = headings[headings.length - 1].id;
    } else {
      headings.forEach(function(h) {
        if (h.getBoundingClientRect().top <= 130) {
          current = h.id;
        }
      });
    }

    links.forEach(function(a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', updateTOC, { passive: true });
  updateTOC();
})();

// ============================================
// BACK TO TOP BUTTON
// ============================================
(function() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function() {
    btn.style.opacity = window.scrollY > 600 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 600 ? 'auto' : 'none';
  }, { passive: true });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
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
