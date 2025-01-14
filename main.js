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
            const winHead = doc.getElementsByTagName("head")[0]
            const links = winHead.getElementsByTagName("link");
            const head = document.getElementsByTagName("head")[0]
            const newStyle =  document.createElement('link')
            newStyle.setAttribute("rel", "stylesheet")
            const newScript =  document.createElement('script')
            // new
            // newStyle.setAttribute("rel", "stylesheet")
            // newStyle.setAttribute("href", "./"+url.split("/")[1]+"/style.css")

            styleUrl = "./"+url.split("/")[1]+"/style.css"
            scriptUrl = "./"+url.split("/")[1]+"/main.js"

            console.log(newStyle);
            document.head.appendChild(newStyle)
            
            
            
            const container = document.getElementById(elementId);
            container.innerHTML = winBody;
            
            fetch(styleUrl).then(response => {
               return response.text();

               
            }).then(style => {
                // console.log(style);
                
                const newStyle2 =  document.createElement('style')
                newStyle2.innerHTML = style
                container.prepend(newStyle2)
            })


            // // Execute scripts in the loaded HTML
            // const scripts = doc.getElementsByTagName('script');
            // for (let script of scripts) {
            //     const newScript = document.createElement('script');
            //     newScript.text = script.innerHTML;
            //     document.body.appendChild(newScript);
            // }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

loadHTML("./calculator/index.html", "window-content")