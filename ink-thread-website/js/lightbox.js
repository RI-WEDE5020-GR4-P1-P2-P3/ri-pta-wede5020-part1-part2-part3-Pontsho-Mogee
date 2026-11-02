// Ink & Thread Studio - lightbox for the portfolio gallery.
// Clicking a gallery image opens it in a larger view. The previous and next
// buttons (or the left and right arrow keys) move between the images that
// are currently showing, so the portfolio filter still works.
// Escape or the close button closes the view.
// Beginner style: plain functions, loops and direct index access, no libraries.

(function () {

    var triggers = document.querySelectorAll('.portfolio-gallery .lightbox-trigger');

    // Stops here on pages without a gallery, so the script does nothing else
    if (triggers.length === 0) {
        return;
    }

    // Build the lightbox once and add it to the end of the page
    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.hidden = true;
    overlay.innerHTML =
        '<div class="lightbox-inner" role="dialog" aria-modal="true" aria-label="Enlarged image">' +
            '<button type="button" class="lightbox-close" aria-label="Close enlarged image">&times;</button>' +
            '<button type="button" class="lightbox-prev" aria-label="Previous image">&#8249;</button>' +
            '<img class="lightbox-image" src="" alt="">' +
            '<button type="button" class="lightbox-next" aria-label="Next image">&#8250;</button>' +
            '<p class="lightbox-caption"></p>' +
        '</div>';
    document.body.appendChild(overlay);

    var largeImage = overlay.querySelector('.lightbox-image');
    var caption = overlay.querySelector('.lightbox-caption');
    var closeButton = overlay.querySelector('.lightbox-close');
    var prevButton = overlay.querySelector('.lightbox-prev');
    var nextButton = overlay.querySelector('.lightbox-next');

    var visibleTriggers = [];  // the gallery buttons that are not hidden by the filter
    var currentIndex = 0;      // position of the image on show, within visibleTriggers
    var lastOpened = null;     // the gallery button that opened the lightbox, so focus can return to it

    // Collects the gallery buttons whose portfolio item is not hidden by the filter
    function getVisibleTriggers() {
        var list = [];
        for (var i = 0; i < triggers.length; i++) {
            var item = triggers[i].closest('.portfolio-item');
            if (!item.classList.contains('is-hidden')) {
                list.push(triggers[i]);
            }
        }
        return list;
    }

    // Shows the image at the given position in visibleTriggers
    function showImageAt(index) {
        var trigger = visibleTriggers[index];
        var smallImage = trigger.querySelector('img');
        var item = trigger.closest('.portfolio-item');

        largeImage.src = smallImage.getAttribute('src');
        largeImage.alt = smallImage.getAttribute('alt');
        caption.textContent = item.querySelector('h3').textContent;
        currentIndex = index;
    }

    // Opens the lightbox on the image that was clicked
    function openLightbox(trigger) {
        visibleTriggers = getVisibleTriggers();
        var index = visibleTriggers.indexOf(trigger);

        if (index === -1) {
            return;
        }

        lastOpened = trigger;
        showImageAt(index);
        overlay.hidden = false;
        closeButton.focus();
    }

    // Closes the lightbox and returns keyboard focus to the image that opened it
    function closeLightbox() {
        overlay.hidden = true;
        if (lastOpened !== null) {
            lastOpened.focus();
        }
    }

    // Moves forwards (step 1) or backwards (step -1), wrapping at either end
    function moveBy(step) {
        var total = visibleTriggers.length;
        var newIndex = (currentIndex + step + total) % total;
        showImageAt(newIndex);
    }

    // Opens the lightbox when any gallery image is clicked
    for (var i = 0; i < triggers.length; i++) {
        triggers[i].addEventListener('click', function (event) {
            openLightbox(event.currentTarget);
        });
    }

    closeButton.addEventListener('click', closeLightbox);
    prevButton.addEventListener('click', function () {
        moveBy(-1);
    });
    nextButton.addEventListener('click', function () {
        moveBy(1);
    });

    // Clicking the dark area outside the image also closes the lightbox
    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closeLightbox();
        }
    });

    // Keyboard controls: Escape closes, the arrow keys move between images
    document.addEventListener('keydown', function (event) {
        if (overlay.hidden) {
            return;
        }

        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            moveBy(-1);
        } else if (event.key === 'ArrowRight') {
            moveBy(1);
        }
    });

})();