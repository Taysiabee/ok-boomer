document.querySelector(".play").addEventListener("click",(function(){document.querySelector("audio").play()})),document.querySelector(".pause").addEventListener("click",(function(){document.querySelector("audio").pause()}));let sixtiesVideo=document.querySelector(".sixties-video"),audio=document.querySelector("audio");sixtiesVideo.addEventListener("mouseenter",(function(e){audio.play()})),sixtiesVideo.addEventListener("mouseleave",(function(e){document.querySelector("audio").pause()}));
//# sourceMappingURL=main-dist.js.map