/* For Women Who — small enhancements. Everything works without this file. */
(function () {
    'use strict';

    var root = document.documentElement;

    /* Full-screen menu: the #menu link works on its own; this adds focus handling and Escape. */
    var menu = document.querySelector('[data-menu]');
    var lastOpener = null;

    function openMenu(opener) {
        if (!menu) return;
        lastOpener = opener || null;
        menu.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        document.querySelectorAll('[data-menu-open]').forEach(function (el) { el.setAttribute('aria-expanded', 'true'); });
        var first = menu.querySelector('.menu__nav a');
        if (first) first.focus();
    }

    function closeMenu() {
        if (!menu || !menu.classList.contains('is-open')) return;
        menu.classList.remove('is-open');
        document.body.style.overflow = '';
        document.querySelectorAll('[data-menu-open]').forEach(function (el) { el.setAttribute('aria-expanded', 'false'); });
        if (location.hash === '#menu') history.replaceState(null, '', location.pathname + location.search);
        if (lastOpener) lastOpener.focus();
    }

    document.querySelectorAll('[data-menu-open]').forEach(function (el) {
        el.setAttribute('role', 'button');
        el.setAttribute('aria-expanded', 'false');
        el.setAttribute('aria-controls', 'menu');
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
        menu.querySelectorAll('.menu__nav a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });
        menu.querySelectorAll('[data-ghost-search]').forEach(function (b) {
            b.addEventListener('click', closeMenu);
        });
        // Keep keyboard focus inside the open menu.
        menu.addEventListener('keydown', function (e) {
            if (e.key !== 'Tab') return;
            var items = menu.querySelectorAll('a[href], button:not([disabled])');
            if (!items.length) return;
            var first = items[0];
            var last = items[items.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });
        if (location.hash === '#menu') openMenu();
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    /* Homepage: the slim masthead appears once the nav bar under the hero has scrolled away. */
    var homeMasthead = document.querySelector('.masthead--home');
    var homeNav = document.querySelector('[data-home-nav]');
    if (homeMasthead && homeNav && 'IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            var gone = !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
            homeMasthead.classList.toggle('is-visible', gone);
        }).observe(homeNav);
    }

    /* Giant wordmarks: container query units size the known words; this only shrinks a word that would still overflow
       (for example a new tag name), so it always fits its width on one line. */
    var fitTargets = document.querySelectorAll('.section-hero__name, .wordmark-header__title, .shop-band__wordmark, .site-footer__wordmark, .issue-band__title');
    function fit() {
        fitTargets.forEach(function (el) {
            el.style.fontSize = '';
            var available = el.clientWidth;
            var needed = el.scrollWidth;
            if (available && needed > available + 1) {
                var size = parseFloat(getComputedStyle(el).fontSize);
                el.style.fontSize = Math.floor(size * (available / needed) * 0.98) + 'px';
            }
        });
    }
    if (fitTargets.length) {
        fit();
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
        var t;
        window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(fit, 150); });
    }

    /* Lemon Squeezy: make sure the overlay is wired up once its script has loaded. */
    if (document.querySelector('.lemonsqueezy-button')) {
        window.addEventListener('load', function () {
            if (typeof window.createLemonSqueezy === 'function') window.createLemonSqueezy();
        });
    }

    root.classList.add('js');
})();
