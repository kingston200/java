function onClick(inputValue) {
    
  const url = 'https://pokeapi.co/api/v2/pokemon';
  $.get(url,function(data, status){
      if (status === 'success') {
          const pokemonNames = data.results.map(pokemon => {
            const h2Tag = document.createElement('h2');
             return '<h2>' + pokemon.name + '<h2>';
          });   
          console.log(pokemonNames);
          document.getElementById("displayedText").innerHTML = pokemonNames;
      } else {
          console.log('error');
      }
  });

}   

function showNames(pokemon) {
  return pokemon; 
}