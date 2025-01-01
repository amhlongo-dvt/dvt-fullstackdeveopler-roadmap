
// Selecting all elements in the HTML Page
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let play_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume-slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio')


let track_list = [
    {
        name: "Family Matters",
        artist: "Drake",
        image: "url",
        path: "Famil_Matters.mp3"
    },
    {
        name: "Meet The Grahams",
        artist: "Kendrick Lamar",
        image: "url",
        path: "Meet_The_Grahams.mp3"
    },
    {
        name: "They Not Like Us",
        artist: "Kendrick Lamar",
        image: "url",
        path: "They_Not_Like_Us.mp3"
    },

]

function resetValues(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function random_bg_color() {
    let red = Math.floor(Math.random() * 256) + 64;
    let green = Math.floor(Math.random() * 256) + 64;
    let blue = Math.floor(Math.random() * 256) + 64;

    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor
}



// To load the track
function loadTrack(track_index){
    clearInterval(updateTimer);
    resetValues();

    current_song = track_list[track_index];
    curr_track.src = current_song.path;
    curr_time.load();

    track_art.computedStyleMap.backgroundImage = "url(" + current_song.image + ")";
    track_name.textContent = current_song.name;
    track_name.textContent  = current_song.artist;
    now_playing.textContent = "PLAYING " + (track_index+1) + "OF" + track_list.length;


    updateTimer = setInterval(seekUpdate, 1000)

    curr_track.addEventListener("ended", nextTrack)

    random_bg_color()
}


function playTrack(){
    curr_track.play();
    isPlaying = true;

    play_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;

    play_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function playpauseTrack(){
    if(!isPlaying) playTrack();
    else pauseTrack();
}

function nextTrack(){
    if (track_index < track_list.length - 1)
        track_index += 1;
    else track_index = 0

    loadTrack(track_index)
    playTrack()
}

function prevTrack(){
    if (track_index > 0)
        track_index -= 1;
    else track_index = track_list - 1

    loadTrack(track_index)
    playTrack()
}



