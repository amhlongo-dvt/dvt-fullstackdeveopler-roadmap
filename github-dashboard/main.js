const form  = document.getElementById("search-form")

async function getUser() {
    const url = "https://api.github.com/users/kamranahmedse";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    getUser()
})