// add an invisible modal element to the top of the page
let unitModal = document.createElement('div');
unitModal.setAttribute('class', 'modal');
unitModal.style.visibility = 'hidden';
document.body.appendChild(unitModal);

// This function checks selected text (if any) when the mouse button is released and checks if  we can convert it into units
document.addEventListener('mouseup', (e) => {
    let selection = window.getSelection().toString().trim();
    const MAX_LENGTH = 30;

    //selected text is should be between lengths 0 - max_length
    if (selection.length > 0 && selection.length < MAX_LENGTH) {

        // Get all possible unit conversions for given selections
        (async () => {
            let result = await get_conversions(selection);
            if (result.length > 0) {
                // Once the result is obtained, give the modal a heading as the trimmed selection and add each comma seperated results to new line
                result = "<p class=\"modal_heading\">" + selection + "</p>" +
                    "<p class=\"modal_content\">" +
                    result.replace(/,/g, "<hr class=\"modal_newline\">") + "</p>";
                // Display  the modal
                showModal(e.clientX, e.clientY, result);
            }
        })();
    }

}, false);

// This function hides the modal when the mouse button is pressed
document.addEventListener('mousedown', (e) => {
    unitModal.style.visibility = 'hidden';
}, false);

// Display the modal at the cursor location and make it visible
function showModal(mouseX, mouseY, html) {
    unitModal.innerHTML = html;
    unitModal.style.top = document.documentElement.scrollTop + mouseY + 'px';
    unitModal.style.left = mouseX + 'px';
    unitModal.style.visibility = 'visible';
}
