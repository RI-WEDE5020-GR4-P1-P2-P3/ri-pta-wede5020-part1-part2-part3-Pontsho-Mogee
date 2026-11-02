// Ink & Thread Studio - portfolio category filter.
// Clicking a filter button hides every portfolio item that does not match it.
// Beginner style: plain functions, loops and direct index access, no libraries.

(function () {

    var filterButtons = document.querySelectorAll('.portfolio-filters button');
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    // Stops here on pages without the filter, so the script does nothing else
    if (filterButtons.length === 0) {
        return;
    }

    // Shows items whose category matches the filter, and hides the rest.
    // The filter "all" shows every item.
    function showCategory(filter) {
        for (var i = 0; i < portfolioItems.length; i++) {
            var itemCategory = portfolioItems[i].getAttribute('data-category');

            if (filter === 'all' || itemCategory === filter) {
                portfolioItems[i].classList.remove('is-hidden');
            } else {
                portfolioItems[i].classList.add('is-hidden');
            }
        }
    }

    // Marks the clicked button as active and the others as not active
    function setActiveButton(clickedButton) {
        for (var i = 0; i < filterButtons.length; i++) {
            filterButtons[i].classList.remove('active');
            filterButtons[i].setAttribute('aria-pressed', 'false');
        }

        clickedButton.classList.add('active');
        clickedButton.setAttribute('aria-pressed', 'true');
    }

    // Runs when any filter button is clicked
    function handleFilterClick(event) {
        var button = event.currentTarget;
        var filter = button.getAttribute('data-filter');

        setActiveButton(button);
        showCategory(filter);
    }

    // Connect the click handler to every filter button
    for (var j = 0; j < filterButtons.length; j++) {
        filterButtons[j].addEventListener('click', handleFilterClick);
    }

})();