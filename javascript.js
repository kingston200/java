function onClick(inputValue) {
  document.getElementById("displayedText").innerHTML = "Now I am in control";
  const user = {name: 'Bob'};
  console.log('Hello ' + user.name);

  const names = ['Sally', 'Jerome']
  const users = [{name: 'Sally'}, {name: 'Jerome'}] 
  const userText = document.getElementById('insertedName').value;
  console.log ('First name in list -----',names[0]);

  console.log ('Second name in list of objects -----',users[1].name);
  const url = 'https://pokeapi.co/api/v2/pokemon';
  $.get(url,function(data, status){
   if (status === 'success') {
       const pokemonNames = data.results.map(showNames)
       console.log(pokemonNames);
       document.getElementById("displayedText").innerHTML = pokemonNames.join(" ");
   }


});
alert('HELLO,  ' + inputname + '!');

}

function showNames(pokemon) {
  return pokemon.name
}
// Import Dialogflow SDK
import dialogflow from 'dialogflow';

// Create Dialogflow client
const sessionClient = new dialogflow.SessionsClient();

// Get user's chat message  
const userMessage = document.getElementById('chatInput').value;

// Send message to Dialogflow agent and get response
const response = await sessionClient.detectIntent({
    session: sessionPath,  
    queryInput: {
      text: {
        text: userMessage  
      }
    }
});

// Display chatbot's response
document.getElementById('chatBotResponse').innerText = response.queryResult.fulfillmentText;