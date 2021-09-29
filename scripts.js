const fetchPokemon = async(id) => {
    event.preventDefault()
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response);

        if(response.status === 404){
            throw '404 not found';
        }

        const data = await response.json();
        console.log(data.name);

       const pokemonName = data.name;
    //    alert(`${pokemonName} I choose you!`)
     displayName(pokemonName);

    }catch(error){
        alert(error);
    }

}
fetchPokemon();
function displayName(pokemonName){
let pokeName = document.getElementById('selected');
pokeName.innerText = pokemonName;
};

let button = document.getElementsByClassName('lchoose')
for (choose of button){
    choose.addEventListener('click', (event) =>{
        event.target.style.run= fetchPokemon(Math.floor(Math.random()*151));
        
    })
};
