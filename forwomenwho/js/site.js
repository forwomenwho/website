/* For Women Who — site.js
   Only three jobs: the mobile menu, the homepage sticky header, and showing the
   designed success/error states on the subscribe form. Everything else is CSS. */
(function () {
    'use strict';

    /* ------------------------------------------------------------------
       Mobile menu. The #menu link already opens it without script;
       this adds the close button, the Escape key and focus handling.
       ------------------------------------------------------------------ */
    var menu = document.getElementById('menu');
    var opener = null;

    function openMenu(trigger) {
        if (!menu) return;
        opener = trigger || null;
        menu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        setExpanded(true);
        var first = menu.querySelector('.menu__nav a');
        if (first) first.focus();
    }

    function closeMenu() {
        if (!menu || !menu.classList.contains('is-open')) return;
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        setExpanded(false);
        if (location.hash === '#menu') history.replaceState(null, '', location.pathname + location.search);
        if (opener) opener.focus();
    }

    function setExpanded(open) {
        document.querySelectorAll('[data-menu-open]').forEach(function (el) {
            el.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    document.querySelectorAll('[data-menu-open]').forEach(function (el) {
        el.setAttribute('role', 'button');
        el.setAttribute('aria-controls', 'menu');
        el.setAttribute('aria-expanded', 'false');
        el.addEventListener('click', function (e) {
            e.preventDefault();
            openMenu(el);
        });
    });

    document.querySelectorAll('[data-menu-close]').forEach(function (el) {
        el.addEventListener('click', function (e) {
            if (el.getAttribute('href') === '#') e.preventDefault();
            closeMenu();
        });
    });

    if (menu) {
        // Keep keyboard focus inside the open menu.
        menu.addEventListener('keydown', function (e) {
            if (e.key !== 'Tab') return;
            var items = menu.querySelectorAll('a[href], button:not([disabled])');
            var first = items[0];
            var last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });
        menu.querySelectorAll('a[href]:not([href="#"])').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
        if (location.hash === '#menu') openMenu();
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    /* ------------------------------------------------------------------
       Homepage: the slim one-line masthead appears once the nav bar under
       the hero has scrolled out of view. Inner pages always show it.
       ------------------------------------------------------------------ */
    var masthead = document.querySelector('[data-page="home"] .masthead');
    var homeNav = document.querySelector('.home-nav');
    if (masthead && homeNav && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            var gone = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
            masthead.classList.toggle('is-visible', gone);
        }).observe(homeNav);
    }

    /* ------------------------------------------------------------------
       Subscribe forms: nothing is sent yet. This only shows the designed
       success and error states.
       INTEGRATION: replace with a real request to the newsletter tool.
       ------------------------------------------------------------------ */
    document.querySelectorAll('[data-subscribe]').forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var input = form.querySelector('input[type="email"]');
            var ok = form.querySelector('[data-state="success"]');
            var bad = form.querySelector('[data-state="error"]');
            var valid = input && input.value.trim() !== '' && input.checkValidity();
            ok.hidden = !valid;
            bad.hidden = valid;
            form.classList.toggle('is-done', valid);
            input.setAttribute('aria-invalid', valid ? 'false' : 'true');
            if (!valid) input.focus();
        });
    });
})();
