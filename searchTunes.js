var startIndex = url.indexOf("q=");
var searchInput = url.substring(startIndex+2);

var separators = ["\\\+", "%20"];
var searchArray = searchInput.split(new RegExp(separators.join('|'),'g'));

var searchText1, searchText2, searchText3;

if (searchArray.length == 1){
  searchtext1 = searchArray[0];
  var url = ("https://api.spotify.com/v1/search?q=" + searchtext1 + "&type=track&market=US");
  $.get(url, function(data) {
  var mp3 = (data['tracks']['items'][0]['preview_url']);
  var music = mp3;
  var myAudio = new Audio();
  myAudio.src = music;
  myAudio.play();
  });
}
else if (searchArray.length == 2) {
  searchText1 = searchArray[0];
  searchText2 = searchArray[1];
  var url = ("https://api.spotify.com/v1/search?q=" + searchText1 + "+" + searchText2 + "&type=track&market=US");
  $.get(url, function(data) {
  var mp3 = (data['tracks']['items'][0]['preview_url'])
  var music = mp3;
  var myAudio = new Audio();
  myAudio.src = music;
  myAudio.play();
  });
}
else if (searchArray.length == 3) {
  searchText1 = searchArray[0];
  searchText2 = searchArray[1];
  searchText3 = searchArray[2];
  var url = ("https://api.spotify.com/v1/search?q=" + searchText1 + "+" + searchText2 + "+" + searchText3 + "&type=track&market=US");
  $.get(url, function(data) {
  var mp3 = (data['tracks']['items'][0]['preview_url'])
  var music = mp3;
  var myAudio = new Audio();
  myAudio.src = music;
  myAudio.play();
  });
}
else {
  searchText1 = searchArray[0];
  searchText2 = searchArray[1];
  searchText3 = searchArray[searchArray.length-1];
  var url = ("https://api.spotify.com/v1/search?q=" + searchText1 + "+" + searchText2 + "+" + searchText3 + "&type=track&market=US");
  $.get(url, function(data) {
  var mp3 = (data['tracks']['items'][0]['preview_url']);
  var music = mp3;
  var myAudio = new Audio();
  myAudio.src = music;
  myAudio.play();
  });
}

window.addEventListener('error', function (evt) {
  alert("No Match Found");
  evt.preventDefault();
});