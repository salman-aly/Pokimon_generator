let pokiContainer = document.querySelector(".container");
let pokiImg = document.getElementById("pokiImg");
let pokiName = document.getElementById("pokiName");
let generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener('click', () => {
    let id = Math.floor(Math.random() * 250);
    const pokemonApi = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(pokemonApi)
        .then(response => response.json())
        .then(data => {
            let imgSrc = data.sprites.front_default;
            console.log(data, "data here")
            pokiContainer.innerHTML = `
                <div>
                    <img src="${imgSrc}" id="pokiImg" />
                    <h1 id="pokiName">${data.name}</h1>
                </div>
            `;
        })
        .catch(error => {
            console.log("Error fetching Pokemon data:", error);
        });
});
