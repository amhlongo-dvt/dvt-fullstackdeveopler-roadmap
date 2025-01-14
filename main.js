function loadHTML(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
          
            
            return response.text();
        })
        .then(html => {

            const parser = new DOMParser()
            const doc = parser.parseFromString(html, "text/html")
            const winBody = doc.getElementsByTagName("body")[0].innerHTML
            const styleUrl = "./"+url.split("/")[1]+"/style.css"
            const scriptUrl = "./"+url.split("/")[1]+"/main.js"
            const container = document.getElementById(elementId);
            const newScript = document.createElement('script')
            newScript.setAttribute('src', scriptUrl)
            document.body.appendChild(newScript);


            container.innerHTML = winBody;
            
            fetch(styleUrl).then(response => {
               return response.text();
            }).then(style => {
                const newStyle =  document.createElement('style')
                newStyle.innerHTML = style
                container.prepend(newStyle)
            })

        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

loadHTML("./calculator/index.html", "window-content")