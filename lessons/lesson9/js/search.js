let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let searchResultBlock = document.querySelector("#search-result");

let apiSettings = {
    "url": "https://api.giphy.com/v1/gifs/search?",
    "key": "QTyhx6MzovH85S73K2V7iwNIUmVZRVOT",
    "limit": 5,
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchQuery = searchInput.value;
    search(searchQuery);
    searchResultBlock.innerHTML = "";
})

async function search(searchQuery){
    try{
        const response = await fetch(`${apiSettings.url}api_key=${apiSettings.key}&q=${searchQuery}&limit=${apiSettings.limit}&offset=0&rating=g&lang=en`);
        const result = await response.json();
        createImage(result);
    }
    catch(error){
        console.log(error);
    }
    searchInput.value ='';
}


function createImage(result){
    for (let i =0; i< result.data.length; i++){
        let img = document.createElement("img");
        img.src = result.data[i].images.original.url;
        searchResultBlock.appendChild(img);
    }
}
