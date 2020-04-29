"use strict";

document.querySelector('.play').addEventListener('click', function () {
  var audio = document.querySelector("audio");
  audio.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var audio = document.querySelector("audio");
  audio.pause();
});
var sixtiesVideo = document.querySelector('.sixties-video');
var audio = document.querySelector("audio");
sixtiesVideo.addEventListener("mouseenter", function (event) {
  audio.play();
});
sixtiesVideo.addEventListener("mouseleave", function (event) {
  var audio = document.querySelector("audio");
  audio.pause();
}); // document.querySelector('.playing').addEventListener('click', function() {
// 	let audio2 = document.querySelector("audio-two");
// 	audio2.play();
// 	console.log('sdf')
// })
// document.querySelector('.paused').addEventListener('click', function() {
// 	let audio = document.querySelector("audio");
// 	audio.pause()
// })
//# sourceMappingURL=main.js.map
