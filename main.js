function loadHTML(url, elementId, title) {
    const container = document.getElementById(elementId);
    container.setAttribute('src', url)
    document.querySelector(".window-title").textContent = title 
}


const apps = document.getElementsByClassName("app");

console.log(new Date().getTime());

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