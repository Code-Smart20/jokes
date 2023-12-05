// getting a button from the page
const btnEl = document.getElementById("generateBtn");

//joke Html Element
const JokeEl = document.getElementById("joke");

//Api key
const Apikey = "J4mvYJwDowKvF4OZYFMUlg==vq5WXsFp6lPJF1S";

const options = {
    method: "GET",
    headers: {'X-Api-Key': Apikey}
}


const ApiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

//function to fetch data from an Api
const handleSubmit = async () => {
    try {

        JokeEl.innerHTML = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "loading.....";

        //fetching the data from the api
        const response = await fetch(ApiUrl, options);
        const data = await response.json();

        JokeEl.innerHTML = data[0].joke;
        btnEl.disabled = false;
        btnEl.innerText = "click for a joke";



    
    } catch (error) {
        const Err = await error.json();
    
        JokeEl.innerHTML = `this  code encountered an ${Err.message} Error, pls kindly Reload`;
        btnEl.innerHTML = "click for a joke";


   }
}

//adding event listener to the button Element
btnEl.addEventListener("click", handleSubmit);