// Ink & Thread Studio - accordion for the common questions on How It Works.
// Clicking a question opens its answer and closes any other open answer.
// Clicking the open question again closes it.
// Beginner style: plain functions and loops, no libraries.

(function () {

    var buttons = document.querySelectorAll('.accordion-button');

    // Stops here on pages without an accordion, so the script does nothing else
    if (buttons.length === 0) {
        return;
    }

    // Opens the answer linked to a button
    function openPanel(button) {
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
    }

    // Closes the answer linked to a button
    function closePanel(button) {
        var panel = document.getElementById(button.getAttribute('aria-controls'));
        button.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
    }

    // Runs when a question button is clicked
    function handleButtonClick(event) {
        var clickedButton = event.currentTarget;
        var wasOpen = clickedButton.getAttribute('aria-expanded') === 'true';

        // Close every answer first, so only one is open at a time
        for (var i = 0; i < buttons.length; i++) {
            closePanel(buttons[i]);
        }

        // Re-open the clicked answer, unless it was already open
        if (!wasOpen) {
            openPanel(clickedButton);
        }
    }

    // Connect the click handler to every question button
    for (var j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', handleButtonClick);
    }

})();