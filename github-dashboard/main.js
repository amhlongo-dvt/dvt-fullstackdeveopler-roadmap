const info  = document.getElementById("user-info")
const form  = document.getElementById("search-form")
const repo  = document.getElementById("repo")
const following  = document.getElementById("following")
const follower  = document.getElementById("followers")
const name = document.querySelector(".profile-name")
const bio = document.querySelector(".profile-bio")
const userLocation = document.querySelector(".profile-location")
const image = document.querySelector("img")

async function getUserDetails() {
    const formData =  new FormData(form);
    const username = formData.get("username")
    const url = "https://api.github.com/users/" + username;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      
      const json = await response.json();
      console.log(json);
      
      name.textContent = json.name
      bio.textContent = json.bio
      userLocation.textContent = json.location
      image.src = json.avatar_url
      
      repo.children.item(0).textContent = json.public_repos
      following.children.item(0).textContent = json.following
      follower.children.item(0).textContent = json.followers
      info.classList.remove('disabled')
      
    } catch (error) {
      console.error(error.message);
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
    getUserDetails()
})