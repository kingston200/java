function onClick(inputValue) {
  document.getElementById("displayedText").innerHTML = pokemonNames.join(" ");
  const user = {name: 'Bob'};
  console.log('Hello ' + user.name);

  const names = ['user.name', 'user.name']
  const users = [{name: 'user.name'}, {name: 'user.name'}]
  console.log ('First name in list -----',names[0]);

  console.log ('Second name in list of objects -----',users[1].name);
  alert('Hello, ' + inputValue + '!');
  const url = 'https://pokeapi.co/api/v2/pokemon';


  $.get(url,function(data, status){
   if (status === 'success') ;
   console.log(data.results) ;
   const pokemonNames = data.results.map(showNames)
})
alert('HELLO,  ' + inputname + '!');
}
function showNames(pokemon) {
  return pokemon.name
}