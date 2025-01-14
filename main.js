function loadHTML(url, elementId) {
    const container = document.getElementById(elementId);
    container.setAttribute('src', url)
}

loadHTML("./calculator/index.html", "window-content")