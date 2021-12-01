var charactersEl = document.getElementById('characters');
var marvelKey = "f5e0d5c0b51df5fdcd857f97593050b6";

fetch('https://gateway.marvel.com:443/v1/public/characters?apikey=f5e0d5c0b51df5fdcd857f97593050b6')
.then(function(response) {
  return response.json();
}).then(function (data) {
  console.log('data', data);
  for (var i = 0; i < data.data.results.length; i++) {
    var character = data.data.results[i];
    console.log('character is', character);
    var newListItem = document.createElement('li');
    newListItem.innerText = character.name
    ;
    charactersEl.appendChild(newListItem);
    console.log('id')
  }
});
console.log("is this working")
fetch('https://comicvine.gamespot.com/api/issues/?api_key=7a85ae236d0baed1243a70bd84fdd22db445b36e')
.then(function(response) {
    console.log("im here")
    return response.json();
}).then(function (data) {
    
    console.log(data)
})