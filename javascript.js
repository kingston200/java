function onClick(inputValue) {
    
  const url = 'https://pokeapi.co/api/v2/pokemon';
  $.get(url,function(data, status){
      if (status === 'success') {
          addNamesToHTML(data);
      } else {
          console.log('error');
      }
  });
}   
function addNamesToHTML(data) {
 const pokemonnames = data.results.map((pokemon) => {
    const h2Element = document.createElement('h2');
    h2Element.innerHTML = pokemon.name;
    console.log("Name with H2 tag: ", h2Element);
    return h2Element;
  });

  $("#displayedText").html(pokemonnames);
}