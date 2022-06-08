let song = document.getElementById('song')
let playButton = document.querySelector('.playButton')
let muteButton = document.querySelector('.muteButton')
let lowVolumeButton = document.querySelector('.lowVolumeButton')
let middleVolumeButton = document.querySelector('.middleVolumeButton')
let highVolumeButton = document.querySelector('.highVolumeButton')
let stopButton = document.querySelector('.stopButton')

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

lowVolumeButton.addEventListener('click', () => {
  song.volume = 0
})

middleVolumeButton.addEventListener('click', () => {
  song.volume = 0.5
})

highVolumeButton.addEventListener('click', () => {
  song.volume = 1
})

stopButton.addEventListener('click', () => {
  song.pause()
  song.currentTime = 0
  playButton.innerText = 'Play'
})
