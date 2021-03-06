const player = document.querySelector(".player")
const video = player.querySelector(".viewer")
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
    if(video.paused){
        toggle.innerText = "■"
        video.play()
    } else {
        toggle.innerText = "►"
        video.pause()
    }
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", handleProgress)
skipButtons.forEach(button => button.addEventListener("click", skip))
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));