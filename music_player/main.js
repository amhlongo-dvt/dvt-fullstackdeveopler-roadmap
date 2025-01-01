
// Selecting all elements in the HTML Page
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let play_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let seek_slider = document.querySelector("seek_slider");
let volume_slider = document.querySelector(".volume-slider");
let curr_time = document.querySelector("volume_slider");
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