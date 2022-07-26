const pokeApi = document.getElementById('api1')

function addPokeToDOM(pokes) {
  pokes.map(pokemon => {
    pokeApi.innerHTML += `<p>${pokemon.name}<p>`
  })
}

// Por callback

function GetPokemonsByCallback(callback) {
  setTimeout(()=> {
    const pokemons = 
   [ { name: 'bulbasaur',
       url: 'https://pokeapi.co/api/v2/pokemon/1/' },
     { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
     { name: 'venusaur',
       url: 'https://pokeapi.co/api/v2/pokemon/3/' },
     { name: 'charmander',
       url: 'https://pokeapi.co/api/v2/pokemon/4/' },
     { name: 'charmeleon',
       url: 'https://pokeapi.co/api/v2/pokemon/5/' },
     { name: 'charizard',
       url: 'https://pokeapi.co/api/v2/pokemon/6/' },
     { name: 'squirtle',
       url: 'https://pokeapi.co/api/v2/pokemon/7/' },
     { name: 'wartortle',
       url: 'https://pokeapi.co/api/v2/pokemon/8/' },
     { name: 'blastoise',
       url: 'https://pokeapi.co/api/v2/pokemon/9/' },
     { name: 'caterpie',
       url: 'https://pokeapi.co/api/v2/pokemon/10/' },
     { name: 'metapod',
       url: 'https://pokeapi.co/api/v2/pokemon/11/' },
     { name: 'butterfree',
       url: 'https://pokeapi.co/api/v2/pokemon/12/' },
     { name: 'weedle', url: 'https://pokeapi.co/api/v2/pokemon/13/' },
     { name: 'kakuna', url: 'https://pokeapi.co/api/v2/pokemon/14/' },
     { name: 'beedrill',
       url: 'https://pokeapi.co/api/v2/pokemon/15/' },
     { name: 'pidgey', url: 'https://pokeapi.co/api/v2/pokemon/16/' },
     { name: 'pidgeotto',
       url: 'https://pokeapi.co/api/v2/pokemon/17/' },
     { name: 'pidgeot',
       url: 'https://pokeapi.co/api/v2/pokemon/18/' },
     { name: 'rattata',
       url: 'https://pokeapi.co/api/v2/pokemon/19/' },
     { name: 'raticate',
       url: 'https://pokeapi.co/api/v2/pokemon/20/' }];
    callback(pokemons)
  },2000)
}

// GetPokemonsByCallback(addPokeToDOM)

// Por promisses
function GetPokemonsByPromisses(callback) {
  fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
    return response.json();
    }).then((json) => {
         callback(json.results)
  });
}

// GetPokemonsByPromisses(addPokeToDOM)

// Por async/await
async function GetPokemonsByAwait(callback) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const json = await response.json();
  const results = await json.results
  callback(results)
  console.log(json)
}

GetPokemonsByAwait(addPokeToDOM)
