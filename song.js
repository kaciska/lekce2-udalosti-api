let song = document.getElementById('song')
let playButton = document.querySelector('.playButton')
let muteButton = document.querySelector('.muteButton')
let increaseVolumeButton = document.querySelector('.increaseVolumeButton')
let decreaseVolumeButton = document.querySelector('.decreaseVolumeButton')
let stopButton = document.querySelector('.stopButton')

increaseVolumeButton.disabled = true //default states at the beginning
decreaseVolumeButton.disabled = false

console.log(song)

playButton.addEventListener('click', () => {
  if (song.paused) {
    song.play()
    playButton.innerText = 'Pause'
  } else {
    song.pause()
    playButton.innerText = 'Play'
  }
})

muteButton.addEventListener('click', () => {
  if (song.muted) {
    song.muted = false
    muteButton.innerText = 'Mute'
  } else {
    song.muted = true
    muteButton.innerText = 'Unmute'
  }
})

decreaseVolumeButton.addEventListener('click', () => {
  song.volume -= 0.1
  increaseVolumeButton.disabled = false

  if (song.volume <= 0.1) {
    decreaseVolumeButton.disabled = true
  }
})

increaseVolumeButton.addEventListener('click', () => {
  song.volume += 0.1
  decreaseVolumeButton.disabled = false
  if (song.volume >= 1.0) {
    increaseVolumeButton.disabled = true
  }
})

stopButton.addEventListener('click', () => {
  song.pause()
  song.currentTime = 0
  playButton.innerText = 'Play'
})

// Paragraph & first two buttons functions

function changeColor() {
  document.querySelector('.button').classList.toggle('red-button')
}

let paragraph = document.querySelector('.paragraph')
paragraph.addEventListener('mouseover', () => {
  paragraph.classList.add('bold-paragraph')
})

paragraph.addEventListener('mouseout', () => {
  paragraph.classList.remove('bold-paragraph')
})

function biggerFontSize() {
  let el = document.querySelector('.paragraph')
  let style = window.getComputedStyle(el, null).getPropertyValue('font-size')
  let fontSize = parseFloat(style)
  el.style.fontSize = fontSize + 1 + 'px'
}
