// Keyboard stability: prevent layout jump when keyboard opens on iOS/Android
(function() {
        if (!window.visualViewport) return;

        var root = document.getElementById('root');

        function onViewportChange() {
            var vv = window.visualViewport;
            var windowHeight = window.innerHeight;
            var viewportHeight = vv.height;

            // On iOS, when the keyboard opens the visualViewport shrinks.
            // We pin #root to the visual viewport height so it doesn't scroll/reflow.
            // The content inside stays put; only the keyboard overlays on top.
            if (viewportHeight < windowHeight - 50) {
                // Keyboard is open — lock root height to visual viewport
                root.style.height = viewportHeight + 'px';
                root.style.position = 'fixed';
                root.style.top = vv.offsetTop + 'px';
                root.style.width = vv.width + 'px';
            } else {
                // Keyboard closed — restore normal flow
                root.style.height = '';
                root.style.position = '';
                root.style.top = '';
                root.style.width = '';
            }
        }

        window.visualViewport.addEventListener('resize', onViewportChange);
        window.visualViewport.addEventListener('scroll', onViewportChange);
    })();
