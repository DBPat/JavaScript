//Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Functions
function togglePlay() {
    video[video.paused ? 'play' :'pause']();
}

function updateButton() {
    const icon = this.paused ? '►' : '|9|';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) *100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX/progress.offsetWidth) * 100;
    console.log(scrubTime);
    progressBar.style.flexBasis =`${scrubTime}%`;
    video.currentTime = video.duration*scrubTime/100;
}

//Hook up element functions
video.addEventListener('click', togglePlay);
toggle.addEventListener('click',togglePlay);
video.addEventListener('click', updateButton);
toggle.addEventListener('click',updateButton);
video.addEventListener('timeupdate', handleProgress);


skipButtons.forEach(button => button.addEventListener('click',skip));

ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

let mouseDown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',mouseDown? scrub : '');
progress.addEventListener('mousedown', mouseDown = true);
progress.addEventListener('mouseup', mouseDown = true);