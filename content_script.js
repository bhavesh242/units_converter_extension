// add an invisible bubble element to the top of the page using <div>
let bubbleDOM = document.createElement('div');
bubbleDOM.setAttribute('class', 'unit_conversion_bubble');
bubbleDOM.style.visibility = 'hidden';
document.body.appendChild(bubbleDOM);

// when mouseup, check selected text (if any) and see if we can convert it
document.addEventListener('mouseup', (e) => {
    let selection = window.getSelection().toString().trim();
    const MAX_LENGTH = 30;

    // well, if selected text is too long, we simply ignore it
   /* if (selection.length > 0 && selection.length < MAX_LENGTH) {
        // perform the unit conversion on user selected text, if possible
        let result = unit_convert(selection);
        if (result.length > 0) {
            // [original selected text], and then all compatible conversions,
            //  and then a footer line with this extension's name
            result =  "<p class=\"bubble_title\">[" + selection + "]</p>" +
                "<p class=\"bubble_content\">" +
                result.replace(/,/g, "<hr class=\"bubble_hr\">") + "</p>" +
                "<p class=\"bubble_ext_name\">Unit Convert Selected Text</p>";
            // show the bubble
            showBubble(e.clientX, e.clientY, result);
        }
    }*/
    showBubble(e.clientX, e.clientY, selection)
}, false);

// hide the bubble when clicking on the screen
document.addEventListener('mousedown', (e) => {
    bubbleDOM.style.visibility = 'hidden';
}, false);

// move the bubble to cursor location and make it visible
function showBubble(mouseX, mouseY, html) {
  bubbleDOM.innerHTML = html;
  bubbleDOM.style.top = document.documentElement.scrollTop + mouseY + 'px';
  bubbleDOM.style.left = mouseX + 'px';
  bubbleDOM.style.visibility = 'visible';
}
