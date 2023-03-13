const pokeApiUrl = "https://pokeapi.co/api/v2/";

const pokedex = () =>{
    const pokemonStatElements = {
        hp: document.getElementById("pokemonStatHp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        specialAttack: document.getElementById("pokemonStatSpecialAttack"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    let currentClassType = null;
    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt=''pokedisplay >";
    const images = {
        imgPokemonNotFound : "../img/404.png",
        imgLoading : "../img/loading.gif"
    };

    const container = {
        imageContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemonTypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMovesElement: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId")
    };

    const buttons = {
        all: Array.from(document.getElementById("btn")),
        search: document.getElementById("btnSearch"),
        next: document.getElementById("btnUp"),
        previous: document.getElementById("btnDown")
    };

    const processPokemonTypes = (pokemonData) => {
        let pokemonType= "";
        const firstClass = pokemonData.types[0].type.name;

        pokemonData.types.forEach((pokemonTypeData)=>{
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}" > 
            ${pokemonTypeData.type.name}</span>`;
        });
        if(currentClassType){
            container.pokemonMovesElement.classList.remove(currentClassType);
            container.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        container.pokemonMovesElement.classList.add(firstClass);
        container.pokemonAbilitiesElement.classList.add(firstClass);
        currentClassType = firstClass;
        container.pokemonTypesContainer.innerHTML = pokemonType;
    }

    const processPokemonStats = (pokemonData) => {
        pokemonData.stats?.forEach((pokemonStatData)=>{
            switch(pokemonStatData.stat.name){
                case "hp":
                    pokemonStatElements.hp.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "attack":
                    pokemonStatElements.attack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "defense":
                    pokemonStatElements.defense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "special-attack":
                    pokemonStatElements.specialAttack.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.specialAttack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "special-defense":
                    pokemonStatElements.specialDefense.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "speed":
                    pokemonStatElements.speed.innerHTML = pokemonStatData.base_stat;
                    pokemonStatElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
            }
        });
    };

    const processPokemonMoves = (pokemonData) =>{
        let pokemonMovesContent = "";
        pokemonData.moves?.forEach((pokemonMove) => {
            pokemonMovesContent += `<li>${pokemonMove.move.name}</li>`;
        });
        container.pokemonMovesElement.innerHTML = pokemonMovesContent;
    }

    const processPokemonAbilities = (pokemonData) =>{
        let pokemonAbilitiesContent = "";

        pokemonData.abilities?.forEach((pokemonAbility) => {
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;

        });
        container.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    }

    const setLoading = () => {
        container.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
        buttons.all.forEach(button => button.disable = true);
    }

    const setLoadingComplete = () => {
        buttons.all.forEach(button => checkDisabled(button));
    }

    const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/${pokemonName}`, {
        method : 'GET', 
        headers : {
            'Content-Type' : 'application/json'
        },

    }).then((res) => res.json()).catch((error) => ({requestFailed:true}));

    const checkDisabled = (button) =>{
        button.disable = button.id === "btnDown" && container.pokemonIdElement.value <= 1;
    }

    const setPokemonData = async (pokemonName) => {
        if(pokemonName){
            setLoading();
            const pokemonData = await getPokemonData(typeof pokemonName === typeof "" ? pokemonName.toLowerCase() : pokemonName);
            if(pokemonData.requestFailed){

                container.imageContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgPokemonNotFound);
            }else{
                container.imageContainer.innerHTML = `${imageTemplate.replace("imgSrc", pokemonData.sprites.front_defaul)} 
                ${imageTemplate.replace("{imgSrc}", pokemonData.sprites.front_shiny)}`;
                container.pokemonNameElement.innerHTML = pokemonData.name;
                container.pokemonIdElement.value = pokemonData.id;
                processPokemonTypes(pokemonData);
                processPokemonStats(pokemonData);
                processPokemonAbilities(pokemonData);
                processPokemonMoves(pokemonData);
            }
        }else{
            Swal.fire({
                title: "Error nwn",
                text: "Ingresa el nombre de un pokemon primero",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        } 
    };

    const triggers = () => {
        buttons.search.onclick = () => setPokemonData(pokemonInput.value);
        pokemonInput.onkeyup = (event)=>{
            event.preventDefault();
            if(event.key == "Enter"){
                setPokemonData(pokemonInput.value);
            }
        }
        buttons.next.onclick = () => setPokemonData(+container.pokemonIdElement.value+1);
        buttons.previous.onclick = () => setPokemonData(+container.pokemonIdElement.value-1);
    };
    setLoadingComplete();
    triggers();
 
};

window.onload = pokedex; 