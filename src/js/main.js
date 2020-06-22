
// // 5 to 7 tv images
// // 5 to 7 audios
// // User story:
// // when the user hovers over a TV, the matching audio plays
// // when the user moves their mouse off the TV, the audio pauses
// // 
// // Developer story:
// // find ALL the TVs
// // find ALL the audios
// // loop through all the TVs
// //     when the mouseenter event happens to TV with the number from the loop counter
// //     tell audio with the number from the loop counter to play
// // 
// // Code Story:
// // querySelectorAll
// // querySelectorAll
// // loop
// // [] to get stuff from an array
// // addEventlistener
// // .play()

let allTVs = document.querySelectorAll('.tv-screen')
let allAudios = document.querySelectorAll('audio')


console.log('allTVs', allTVs)
console.log('allTVs', allAudios)




for (let i = 0; i < 7; i++) {

	allTVs[i].addEventListener("mouseenter", function () {
		allAudios[i].play()
	})

	allTVs[i].addEventListener("mouseleave", function (){
		let audio = document.querySelector('.song');
		allAudios[i].pause()
	})
}














// document.querySelector('.play').addEventListener('click', function() {
// 	let audio = document.querySelector('.song');
// 	audio.play()
// 	console.log("audio")
	
// })

// document.querySelector('.pause').addEventListener('click', function() {
// 	let audio = document.querySelector('.song');
// 	audio.pause()
// 	console.log("audio")

// })

// let sixtiesVideo = document.querySelector('.sixties-video')
// let audio = document.querySelector('.song');
//  sixtiesVideo.addEventListener("mouseenter", function(){
//  	audio.play()
//  	console.log("audio")
//  })

//   sixtiesVideo.addEventListener("mouseleave", function(){
//   	let audio = document.querySelector('.song');
//  	audio.pause()
//  	console.log("audio")
//  })

 
// // -------------------

// document.querySelector('.play').addEventListener('click', function() {
// 	let tunes = document.querySelector('.bee');
// 	tunes.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let tunes = document.querySelector('.bee');
// 	tunes.pause()
// })

// let seventiesVideo = document.querySelector('.seventies-video')
// let tunes = document.querySelector('.bee');
//  seventiesVideo.addEventListener("mouseenter", function(event){
//  	tunes.play()
//  })
//   seventiesVideo.addEventListener("mouseleave", function(event){
//   	let tunes = document.querySelector('.bee');
//  	tunes.pause()
//  })
// // -------------------


// document.querySelector('.play').addEventListener('click', function() {
// 	let music = document.querySelector('.michael');
// 	music.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let music = document.querySelector('.michael');
// 	music.pause()
// })

// let eightiesVideo = document.querySelector('.eighties-video')
// let music = document.querySelector('.michael');
//  eightiesVideo.addEventListener("mouseenter", function(event){
//  	music.play()
//  })
//   eightiesVideo.addEventListener("mouseleave", function(event){
//   	let music = document.querySelector('.michael');
//  	music.pause()
//  })

// // -------------------

// document.querySelector('.play').addEventListener('click', function() {
// 	let sound = document.querySelector('.britney');
// 	sound.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let sound = document.querySelector('.britney');
// 	sound.pause()
// })

// let ninetiesVideo = document.querySelector('.nineties-video')
// let sound = document.querySelector('.britney');
//  ninetiesVideo.addEventListener("mouseenter", function(event){
//  	sound.play()
//  })
//   ninetiesVideo.addEventListener("mouseleave", function(event){
//   	let sound = document.querySelector('.britney');
//  	sound.pause()
//  })

//   // -------------------

// document.querySelector('.play').addEventListener('click', function() {
// 	let hit = document.querySelector('.rihana');
// 	hit.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let hit = document.querySelector('.rihana');
// 	hit.pause()
// })

// let ohsVideo = document.querySelector('.ohs-video')
// let hit = document.querySelector('.rihana');
//  ohsVideo.addEventListener("mouseenter", function(event){
//  	hit.play()
//  })
//   ohsVideo.addEventListener("mouseleave", function(event){
//   	let hit = document.querySelector('.rihana');
//  	hit.pause()
//  })

//     // -------------------
// document.querySelector('.play').addEventListener('click', function() {
// 	let smash = document.querySelector('.bruno');
// 	smash.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let smash = document.querySelector('.bruno');
// 	smash.pause()
// })

// let tenVideo = document.querySelector('.ten-video')
// let smash = document.querySelector('.bruno');
//  tenVideo.addEventListener("mouseenter", function(event){
//  	smash.play()
//  })
//   tenVideo.addEventListener("mouseleave", function(event){
//   	let smash = document.querySelector('.bruno');
//  	smash.pause()
//  })

//     // -------------------


// document.querySelector('.play').addEventListener('click', function() {
// 	let vibes = document.querySelector('.dababy');
// 	vibes.play()
	
// })
// document.querySelector('.pause').addEventListener('click', function() {
// 	let vibes = document.querySelector('.dababy');
// 	vibes.pause()
// })

// let rockstar = document.querySelector('.rockstar')
// let vibes = document.querySelector('.dababy');
//  rockstar.addEventListener("mouseenter", function(event){
//  	vibes.play()
//  })
//   rockstar.addEventListener("mouseleave", function(event){
//   	let vibes = document.querySelector('.dababy');
//  	vibes.pause()
//  })
