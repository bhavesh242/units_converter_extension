// add an invisible modal element to the top of the page using <div>
let unitModal = document.createElement('div');
unitModal.setAttribute('class', 'modal');
unitModal.style.visibility = 'hidden';
document.body.appendChild(unitModal);

// when mouseup, check selected text (if any) and see if we can convert it
document.addEventListener('mouseup', (e) => {
    let selection = window.getSelection().toString().trim();
    const MAX_LENGTH = 30;
    
    // well, if selected text is too long, we simply ignore it
    if (selection.length > 0 && selection.length < MAX_LENGTH) {
        // perform the unit conversion on user selected text, if possible
        let result = get_conversions(selection);
        /*if (result.length > 0) {
            // [original selected text], and then all compatible conversions,
            //  and then a footer line with this extension's name
            result =  "<p class=\"modal_heading\">[" + selection + "]</p>" +
                "<p class=\"modal_content\">" +
                result.replace(/,/g, "<hr class=\"modal_newline\">") + "</p>" +
                "<p class=\"modal_name\">Unit Convert Selected Text</p>";
            // show the modal
            showModal(e.clientX, e.clientY, result);
        }*/
        showModal(e.clientX, e.clientY, selection);
    }
    
}, false);

// hide the modal when clicking on the screen
document.addEventListener('mousedown', (e) => {
    unitModal.style.visibility = 'hidden';
}, false);

// move the modal to cursor location and make it visible
function showModal(mouseX, mouseY, html) {
  unitModal.innerHTML = html;
  unitModal.style.top = document.documentElement.scrollTop + mouseY + 'px';
  unitModal.style.left = mouseX + 'px';
  unitModal.style.visibility = 'visible';
}
