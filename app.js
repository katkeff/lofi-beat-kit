const drums = new Howl({
    "src": [
      "./audio/audio.webm",
      "./audio/audio.mp3"
    ],
    "sprite": {
      "hat": [
        0,
        755.2380952380953
      ],
      "kick": [
        2000,
        161.13378684807245
      ],
      "samp1": [
        4000,
        6000
      ],
      "samp2": [
        11000,
        6000
      ],
      "samp3": [
        18000,
        6000
      ],
      "snare": [
        25000,
        348.7981859410425
      ]
    }
  }); 

// const drumKit is a variable set to the querySelector method to call the element 'drumkit' from the .html file

// Created a function playDrum which finds the pads in the .html file and enables them to play sound.

// Each sound is assigned to a pad which can be seen in the .html file. this makes each pad produce a different sound upon click or touch.

/* the event.preventDefault function references the last two lines of code. it disables 'click' for touchscreen to avoid a 
delay in sound and defaults to touchstart while still enabling click on a computer. */

// Finally, we use an addEventListener to trigger the playDrum function. This is what enables the pads to respond to click or touch

const drumKit = document.querySelector('.drumkit');
let pad = document.querySelectorAll('.pad');

function playDrum(event) {
  if (event.target.classList.contains('pad')) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
    event.target.classList.add('playing');
    setTimeout(function () {
      event.target.classList.remove('playing'); 
    },90);
  }
}

drumKit.addEventListener('click', playDrum);
drumKit.addEventListener('touchstart', playDrum);

