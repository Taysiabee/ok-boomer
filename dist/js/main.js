"use strict";

// 5 to 7 tv images
// 5 to 7 audios
// User story:
// when the user hovers over a TV, the matching audio plays
// when the user moves their mouse off the TV, the audio pauses
// 
// Developer story:
// find ALL the TVs
// find ALL the audios
// loop through all the TVs
//     when the mouseenter event happens to TV with the number from the loop counter
//     tell audio with the number from the loop counter to play
// 
// Code Story:
// querySelectorAll
// querySelectorAll
// loop
// [] to get stuff from an array
// addEventlistener
// .play()
document.querySelector('.play').addEventListener('click', function () {
  var audio = document.querySelector('.chubby');
  audio.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var audio = document.querySelector('.chubby');
  audio.pause();
});
var sixtiesVideo = document.querySelector('.sixties-video');
var audio = document.querySelector('.chubby');
sixtiesVideo.addEventListener("mouseenter", function (event) {
  audio.play();
});
sixtiesVideo.addEventListener("mouseleave", function (event) {
  var audio = document.querySelector('.chubby');
  audio.pause();
});
//# sourceMappingURL=main.js.map
