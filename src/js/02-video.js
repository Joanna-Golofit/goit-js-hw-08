var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle((e)=> {
  // console.log('timeupdate the video!', e.seconds);
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000),
);

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));




/// --------------- zgromadzone dane ----------
// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });


// // throttle
// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll handler call every 300ms');
//   }, 300),
// );


//----------

// Zbadaj dokumentację metody on() i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
// Zapisuj czas odtwarzania w local storage. Niech kluczem do storage będzie "videoplayer-current-time".
// Do przeładowywania strony używaj metody setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu.
// Dodaj do projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.

// //------------------- on()

// on(event: string, callback: function): void
// Add an event listener for the specified event. Will call the callback with a single parameter, data, that contains the data for that event. See events below for details.

// var onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// //--------------event ---- timeupdate

// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.

// {
//     duration: 61.857
//     percent: 0.049
//     seconds: 3.034
// }

//---------- setCurrentTime

// setCurrentTime(seconds: number): Promise<number, (RangeError|Error)>
// Set the current playback position in seconds. Once playback has started, if the player was paused, it will remain paused. Likewise, if the player was playing, it will resume playing once the video has buffered. Setting the current time before playback has started will cause playback to start.

// You can provide an accurate time and the player will attempt to seek to as close to that time as possible. The exact time will be the fulfilled value of the promise.

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
