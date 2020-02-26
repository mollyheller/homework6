var video;
var volume;
var slider;

function getVid(){
	video= document.querySelector("#myVideo"); 
}

function playVid() { 
 	video.play();
	console.log("Play Video");
	console.log(video);
	volume= document.querySelector("#volume");
	console.log(volume);
	volume.innerHTML= (video.volume * 100) + "%";
} 

function pauseVid() { 
 	video.pause();
 	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate -= .2;
   	console.log("Speed is "+ video.playbackRate);

} 

function increaseSpeed() {
	video.playbackRate += .25;
 	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	if (video.currentTime + 60 < video.duration) {
		video.currentTime += 60;
		console.log("Current location is "+ video.currentTime);
 	}
 	else{
		video.currentTime= 0;
		video.playbackRate= 1;
		console.log("Current location is "+ video.currentTime);
		console.log("Speed is "+ video.playbackRate);
 	}
 } 

function mute() {
	console.log(video.muted); 
 	if (video.muted == true) {
 		video.muted= false;
  		console.log("Changing to Unmuted");
  		var button= document.querySelector("#mute");
    	button.innerHTML= "Unmuted";
 	}
  	else{
  		video.muted = true;
       	console.log("Changing to Muted");
       	var button= document.querySelector("#mute");
    	button.innerHTML= "Muted";
    }
}

function changeVolume() {
	let slider= document.querySelector("#volumeSlider");
	console.log(slider.value);
	video.volume= slider.value/100;
	console.log("Volume is " + video.volume);
	volume.innerHTML= (video.volume * 100) + "%";

}
       

 function gray() { 
 	video.classList.add("grayscale");
	console.log("In grayscale");
 }

 function color() {
	video.classList.remove("grayscale");
 	console.log("In color"); 
 }
