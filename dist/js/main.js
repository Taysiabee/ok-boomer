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
  var audio = document.querySelector('.song');
  audio.play();
  console.log("audio");
});
document.querySelector('.pause').addEventListener('click', function () {
  var audio = document.querySelector('.song');
  audio.pause();
  console.log("audio");
});
var sixtiesVideo = document.querySelector('.sixties-video');
var audio = document.querySelector('.song');
sixtiesVideo.addEventListener("mouseenter", function (event) {
  audio.play();
  console.log("audio");
});
sixtiesVideo.addEventListener("mouseleave", function (event) {
  var audio = document.querySelector('.song');
  audio.pause();
  console.log("audio");
});
document.querySelector('.play').addEventListener('click', function () {
  var tunes = document.querySelector('.bee');
  tunes.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var tunes = document.querySelector('.bee');
  tunes.pause();
});
var seventiesVideo = document.querySelector('.seventies-video');
var tunes = document.querySelector('.bee');
seventiesVideo.addEventListener("mouseenter", function (event) {
  tunes.play();
});
seventiesVideo.addEventListener("mouseleave", function (event) {
  var tunes = document.querySelector('.bee');
  tunes.pause();
});
document.querySelector('.play').addEventListener('click', function () {
  var hit = document.querySelector('.mike');
  hit.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var hit = document.querySelector('.mike');
  hit.pause();
});
var eightiesVideo = document.querySelector('.eighties-video');
var hit = document.querySelector('.mike');
eightiesVideo.addEventListener("mouseenter", function (event) {
  hit.play();
});
eightiesVideo.addEventListener("mouseleave", function (event) {
  var hit = document.querySelector('.mike');
  hit.pause();
});
document.querySelector('.play').addEventListener('click', function () {
  var pop = document.querySelector('.brit');
  pop.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var pop = document.querySelector('.brit');
  pop.pause();
});
var nintiesVideo = document.querySelector('.ninties-video');
var pop = document.querySelector('.brit');
nintiesVideo.addEventListener("mouseenter", function (event) {
  pop.play();
});
nintiesVideo.addEventListener("mouseleave", function (event) {
  var pop = document.querySelector('.brit');
  pop.pause();
});
document.querySelector('.play').addEventListener('click', function () {
  var hov = document.querySelector('.rih');
  hov.play();
});
document.querySelector('.pause').addEventListener('click', function () {
  var hov = document.querySelector('.rih');
  hov.pause();
});
var ohsVideo = document.querySelector('.ohs-video');
var hov = document.querySelector('.rih');
ohsVideo.addEventListener("mouseenter", function (event) {
  hov.play();
});
ohsVideo.addEventListener("mouseleave", function (event) {
  var hov = document.querySelector('.rih');
  hov.pause();
});
//# sourceMappingURL=main.js.map
