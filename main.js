// import 'https://cdn.jsdelivr.net/npm/dayjs@1.10.8/dayjs.min.js';

function loadHTML(url, elementId, title) {
    const container = document.getElementById(elementId);
    container.setAttribute('src', url)
    document.querySelector(".window-title").textContent = title 
    document.querySelector(".time").textContent = dayjs().format('h:mm A')
}


const apps = document.getElementsByClassName("app");



apps[0].setAttribute("onclick", 'loadHTML("./figma_website/index.html", "window-content", "Blog")')
apps[1].setAttribute("onclick", 'loadHTML("./calculator/index.html", "window-content", "Calculator")')
apps[2].setAttribute("onclick", 'loadHTML("./todo/index.html", "window-content", "To Do List")')
apps[3].setAttribute("onclick", 'loadHTML("./github-dashboard/index.html", "window-content", "Git Hub")')
apps[4].setAttribute("onclick", 'loadHTML("./portfolio/index.html", "window-content", "Portfolio")')
apps[5].setAttribute("onclick", 'loadHTML("./timezone/index.html", "window-content", "Clock")')
document.body.style.background = "black";

function hideLoader(){
    const desktop = document.querySelector(".desktop")
    const loader = document.querySelector(".window")
    loader.setAttribute("class", "hidden")
    desktop.removeAttribute("class")
    document.body.style.background = 'url("./windows_xp_original-wallpaper-1920x1080.jpg") center center / cover no-repeat fixed'
    
}


setTimeout(hideLoader, 10000)

loadHTML("./portfolio/index.html", "window-content")



function makeDraggable (element) {
    // Make an element draggable (or if it has a .window-top class, drag based on the .window-top element)
    let currentPosX = 0, currentPosY = 0, previousPosX = 0, previousPosY = 0;

		// If there is a window-top classed element, attach to that element instead of full window
    if (element.querySelector('.window-header')) {
        // If present, the window-top element is where you move the parent element from
        element.querySelector('.window-header').onmousedown = dragMouseDown;
    } 
    else {
        // Otherwise, move the element itself
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown (e) {
        // Prevent any default action on this element (you can remove if you need this element to perform its default action)
        e.preventDefault();
        // Get the mouse cursor position and set the initial previous positions to begin
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        // When the mouse is let go, call the closing event
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag (e) {
        // Prevent any default action on this element (you can remove if you need this element to perform its default action)
        e.preventDefault();
        // Calculate the new cursor position by using the previous x and y positions of the mouse
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        // Replace the previous positions with the new x and y positions of the mouse
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - currentPosY) + 'px';
        element.style.left = (element.offsetLeft - currentPosX) + 'px';
    }

    function closeDragElement () {
        // Stop moving when mouse button is released and release events
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Make myWindow and myWindow2 draggable in different ways...

// myWindow will only be able to be moved via the top bar (.window-top element). The main element does nothing on mouse down.
// makeDraggable(document.querySelector('#myWindow'));

// myWindow2 will be able to moved by grabbing the entire element
makeDraggable(document.querySelector('#myWindow2'));

//Close the window on click of a red button
document.addEventListener('click', e => {
	if (e.target.closest('.button.red')) {
		e.target.closest('.windows').remove();
	}
});