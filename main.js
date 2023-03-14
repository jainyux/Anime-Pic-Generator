const btnel = document.getElementById("btn");
const animecontainerel = document.querySelector(".anime-container");
const animeimgel = document.querySelector(".anime-img");
const animenameel = document.querySelector(".anime-name");


btnel.addEventListener("click", async function(){
try {
    btnel.disabled = true;
    btnel.innerText = "Loading...";
    animenameel.innerText = "Updating...";
    animeimgel.src = "spinner.svg";
    const response = await fetch ("https://api.catboys.com/img")
    const data = await response.json();
    btnel.disabled = false;
    btnel.innerText = "Get Anime";
    animecontainerel.style.display = "block";
    animeimgel.src = data.url;
    animenameel.innerText = data.artist;
    
} catch (error) {
    btnel.disabled = false;
    btnel.innerText = "Get Anime";
    animenameel.innerText = "An error occured, please try again";
}


})