// I recorded the 'samp' files in Ableton Live using my MIDI keyboard & got the 'hat, 'kick' and 'drum' files from a free Drum Kit.

// I then used audiosprite to compile the separated audio files into 1 single file (because HTML can't handle multiple audio files)

// Audiosprite puts 1 second of separation between each audio clip and then automatically separates them into an object for you.  

// Audiosprite creates a .webm file a .mp3 file. I've added both as the "src" and my program will use whichever file type is more desireable. 

// You can then use each separate object however you desire. 

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

 // the setViewportHeight function is to allow the pads to resize with the window on a computer while also staying troe to screen size on a tablet or phone


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
 
 function setViewportHeight() {
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
 }
 
 setViewportHeight();
 
 window.addEventListener('resize', setViewportHeight);
 
 drumKit.addEventListener('click', playDrum);
 drumKit.addEventListener('touchstart', playDrum);

