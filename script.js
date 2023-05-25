function start_game() {
	object.classList.toggle('start');
	document.title = 'Score: 0';
	score = 0;

	background_music.pause();
	paragraph.innerHTML = score;
}

function addAward() {
	awards_container.innerHTML = ''
	const limit = Math.abs(score / 5)
	for (i = 0; i < limit; i++) {

		awards_container.innerHTML += icon
	}

}

let tempSpeed = 1.5;
function incrSpeed() {
	tempSpeed = tempSpeed - 0.1;
	object.style.animationDuration = `${tempSpeed}s`;
}

function miss(event) {

	if (event.target.id == 'area') {
		score--;
		addAward()
		paragraph.innerHTML = score;
		document.title = `Score: ${score}`;

		miss_sound.currentTime = 0;
		miss_sound.play();

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
	if (score % 5 === 0) {

		addAward();
		incrSpeed();
	}
	paragraph.innerHTML = score;
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
const miss_sound = new Audio('sounds/miss.wav');
const background_music = new Audio('sounds/background_music.mp3');

document.addEventListener('mouseover', function () {
	background_music.play();
}, { once: true });


const score_p = document.querySelector('score');

const awards_container = document.querySelector("#awards")
const icon = '<i class="las la-medal"></i>'
const paragraph = document.createElement('p');
paragraph.innerHTML = score;
const header = document.querySelector('header');
header.append(paragraph);
