function start_game() {
  object.classList.toggle('start');
  document.title = 'Score: 0';
  score = 0;
  background_music.pause();
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score: ${score}`;

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
  document.title = `Score: ${score}`;

  object.classList.remove('start');
  void object.offsetWidth;
  object.classList.add('start');
  
  let random_offset = Math.floor(Math.random() * 340);
  object.style.left = `${random_offset}px`;

  hit_sound.currentTime = 0;
  hit_sound.play();
}

let score = 0;
let object = document.querySelector('#object');

const hit_sound = new Audio('sounds/hit.wav');

const background_music = new Audio('sounds/background_music.mp3')
background_music.play();