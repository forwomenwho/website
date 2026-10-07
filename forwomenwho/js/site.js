/* For Women Who — site.js
   Small jobs only: the mobile menu, the homepage sticky header, the sub-topic
   and shop-tab underlines, and the designed success/error states on the
   subscribe form. Everything else is CSS. */
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
       Section pages: the sub-topic row underlines the chosen topic and
       shows only its pieces. Works from a link too (work.html#careers).
       INTEGRATION: later, each sub-topic can be its own filtered page.
       ------------------------------------------------------------------ */
    var topicLinks = document.querySelectorAll('[data-filter]');
    var topicGrid = document.querySelector('[data-filter-target]');
    function showTopic(topic) {
        if (!topicGrid) return;
        var match = false;
        topicLinks.forEach(function (a) {
            var on = a.getAttribute('data-filter') === topic;
            if (on) match = true;
            if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
        });
        if (!match) { topic = 'all'; topicLinks[0] && topicLinks[0].setAttribute('aria-current', 'page'); }
        topicGrid.querySelectorAll(':scope > li').forEach(function (li) {
            li.hidden = topic !== 'all' && li.getAttribute('data-subtopic') !== topic;
        });
    }
    if (topicLinks.length && topicGrid) {
        topicLinks.forEach(function (a) {
            a.addEventListener('click', function (e) {
                e.preventDefault();
                var topic = a.getAttribute('data-filter');
                showTopic(topic);
                history.replaceState(null, '', topic === 'all' ? location.pathname : '#' + topic);
            });
        });
        if (location.hash) showTopic(location.hash.slice(1));
        window.addEventListener('hashchange', function () { showTopic(location.hash.slice(1) || 'all'); });
    }

    /* ------------------------------------------------------------------
       Shop: the category tab for the section you're looking at is underlined,
       whether you tapped it or scrolled to it.
       ------------------------------------------------------------------ */
    var tabs = document.querySelectorAll('[data-tab]');
    function markTab(id) {
        tabs.forEach(function (t) {
            if (t.getAttribute('data-tab') === id) t.setAttribute('aria-current', 'true');
            else t.removeAttribute('aria-current');
        });
    }
    if (tabs.length) {
        tabs.forEach(function (t) {
            t.addEventListener('click', function () { markTab(t.getAttribute('data-tab')); });
        });
        // The current category is the last one whose top has passed 40% of the screen; the first by default.
        var sections = Array.prototype.map.call(tabs, function (t) { return document.getElementById(t.getAttribute('data-tab')); });
        var ticking = false;
        function spy() {
            ticking = false;
            var line = window.innerHeight * 0.4;
            var current = tabs[0].getAttribute('data-tab');
            sections.forEach(function (sec) { if (sec && sec.getBoundingClientRect().top <= line) current = sec.id; });
            markTab(current);
        }
        window.addEventListener('scroll', function () {
            if (!ticking) { ticking = true; requestAnimationFrame(spy); }
        }, { passive: true });
        spy();
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
