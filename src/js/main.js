
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





document.querySelector('.play').addEventListener('click', function() {
	let audio = document.querySelector('.song');
	audio.play()
	console.log("audio")
	
})

document.querySelector('.pause').addEventListener('click', function() {
	let audio = document.querySelector('.song');
	audio.pause()
	console.log("audio")

})

let sixtiesVideo = document.querySelector('.sixties-video')
let audio = document.querySelector('.song');
 sixtiesVideo.addEventListener("mouseenter", function(){
 	audio.play()
 	console.log("audio")
 })

  sixtiesVideo.addEventListener("mouseleave", function(){
  	let audio = document.querySelector('.song');
 	audio.pause()
 	console.log("audio")
 })

  







document.querySelector('.play').addEventListener('click', function() {
	let tunes = document.querySelector('.bee');
	tunes.play()
	
	
})

document.querySelector('.pause').addEventListener('click', function() {
	let tunes = document.querySelector('.bee');
	tunes.pause()
	

})

let seventiesVideo = document.querySelector('.seventies-video')
let tunes = document.querySelector('.bee');
 seventiesVideo.addEventListener("mouseenter", function(event){
 	tunes.play()
 	
 })

  seventiesVideo.addEventListener("mouseleave", function(event){
  	let tunes = document.querySelector('.bee');
 	tunes.pause()
 	
 })









// document.querySelector('.play').addEventListener('click', function() {
// 	let hit = document.querySelector('.mike');
// 	hit.play()
	
// })

// document.querySelector('.pause').addEventListener('click', function() {
// 	let hit = document.querySelector('.mike');
// 	hit.pause()
	

// })

// let eightiesVideo = document.querySelector('.eighties-video')
// let hit = document.querySelector('.mike');
//  eightiesVideo.addEventListener("mouseenter", function(event){
//  	hit.play()

 	
//  })

//   eightiesVideo.addEventListener("mouseleave", function(event){
//   	let hit = document.querySelector('.mike');
//  	hit.pause()

 	
//  })










// document.querySelector('.play').addEventListener('click', function() {
// 	let pop = document.querySelector('.brit');
// 	pop.play()
	
// })

// document.querySelector('.pause').addEventListener('click', function() {
// 	let pop = document.querySelector('.brit');
// 	pop.pause()
	

// })

// let nintiesVideo = document.querySelector('.ninties-video')
// let pop = document.querySelector('.brit');
//  nintiesVideo.addEventListener("mouseenter", function(event){
//  	pop.play()
//  })

//   nintiesVideo.addEventListener("mouseleave", function(event){
//   	let pop = document.querySelector('.brit');
//  	pop.pause()

 	
//  })












//   document.querySelector('.play').addEventListener('click', function() {
// 	let hov = document.querySelector('.rih');
// 	hov.play()
	
	
// })

// document.querySelector('.pause').addEventListener('click', function() {
// 	let hov = document.querySelector('.rih');
// 	hov.pause()
	

// })

// let ohsVideo = document.querySelector('.ohs-video')
// let hov = document.querySelector('.rih');
//  ohsVideo.addEventListener("mouseenter", function(event){
//  	hov.play()
 	
//  })

//   ohsVideo.addEventListener("mouseleave", function(event){
//   	let hov = document.querySelector('.rih');
//  	hov.pause()
 	
//  })


