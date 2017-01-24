var buttonBoom = document.getElementById('boom');
var buttonHiHat = document.getElementById('hihat');
var buttonKick = document.getElementById('kick');


var audioBoom = new Audio('drum-sounds/boom.wav');
var audioHiHat = new Audio('drum-sounds/hihat.wav');
var audioKick = new Audio('drum-sounds/kick.wav');




buttonBoom.addEventListener('click', function () {
  console.log('I was Boom!');
  audioBoom.play();
});
buttonHiHat.addEventListener('click', function () {
  console.log('I was HiHat!');
  audioHiHat.play();
});
buttonKick.addEventListener('click', function () {
  console.log('I was Kick!');
  audioKick.play();
});

buttonBoom.addEventListener('mouseenter', function () {
  console.log('I was Boom!');
  audioBoom.play();
});
buttonHiHat.addEventListener('mouseenter', function () {
  console.log('I was HiHat!');
  audioHiHat.play();
});
buttonKick.addEventListener('mouseenter', function () {
  console.log('I was Kick!');
  audioKick.play();
});