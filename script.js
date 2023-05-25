function start_game() {
  object.classList.toggle("start");
  document.title = "Score: 0";
  score = 0;

  background_music.pause();
  paragraph.innerHTML = score;
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    paragraph.innerHTML = score;
    document.title = `Score: ${score}`;

    miss_sound.currentTime = 0;
    miss_sound.play();
    fail_sound.play()

    if (score <= 0) {
      finish_game();
      
    }
  }
}

function finish_game() {
  alert(`You lose. Score ${score}`);
  start_game();
}

function hit() {
  score++;
  paragraph.innerHTML = score;
  document.title = `Score: ${score}`;

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.floor(Math.random() * 340);
  object.style.left = `${random_offset}px`;

  hit_sound.currentTime = 0;
  hit_sound.play();
}

let score = 0;
let object = document.querySelector("#object");

const hit_sound = new Audio("sounds/hit.wav");
const miss_sound = new Audio("sounds/miss.wav");
const fail_sound = new Audio("sounds/failSound.mp3");
const background_music = new Audio("sounds/background_music.mp3");
document.addEventListener('mouseover', function() {
  background_music.play()
}, {once: true})



// const header = document.getElementById('header')
const score_p = document.querySelector("score");

const paragraph = document.createElement("p");
paragraph.innerHTML = score;
const header = document.querySelector("header");
header.append(paragraph);
