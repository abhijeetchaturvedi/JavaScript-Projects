let progress = document.getElementById("progress");
let playbtn = document.getElementById("pauseBtn");
let song = document.getElementById("song");
// let song=document.querySelector("#song");
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause()
{
    if(playbtn.classList.contains("fa-pause")){
        song.pause();
        playbtn.classList.remove("fa-pause");
        playbtn.classList.add("fa-circle-play");
    }
    else
    {
        song.play();
        playbtn.classList.add("fa-pause");
        playbtn.classList.remove("fa-circle-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    
    },500)
}
progress.onchange= function(){
song.play(); 
 song.currentTime= progress.value ;
 playbtn.classList.add("fa-pause");
 playbtn.classList.remove("fa-circle-play");
}



