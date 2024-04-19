"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // date entered on the timer. in developing. time used - 5 minutes
  var deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + 5); // id таймера

  var timerId = null; // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов

  function countdownTimer() {
    var diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    } // const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;


    var hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    var minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    var seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0; // $days.textContent = days < 10 ? '0' + days : days;

    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds; // $days.dataset.title = 'days';

    $hours.dataset.title = 'hours';
    $minutes.dataset.title = 'minutes';
    $seconds.dataset.title = 'seconds';
  } // получаем элементы, содержащие компоненты даты
  // const $days = document.querySelector('.timer__days');


  var $hours = document.querySelector('.timer__hours');
  var $minutes = document.querySelector('.timer__minutes');
  var $seconds = document.querySelector('.timer__seconds'); // вызываем функцию countdownTimer

  countdownTimer(); // вызываем функцию countdownTimer каждую секунду

  timerId = setInterval(countdownTimer, 1000);
});
var customNum = document.querySelectorAll('.custom-num');
customNum.forEach(function (num) {
  var numInput = num.querySelector('.num-input');
  var arrUp = num.querySelector('.arr-up');
  var arrDown = num.querySelector('.arr-down');
  arrUp.addEventListener('click', function () {
    numInput.stepUp();
    checkMaxMin();
  });
  arrDown.addEventListener('click', function () {
    numInput.stepDown();
    checkMaxMin();
  });
  numInput.addEventListener('input', checkMaxMin);

  function checkMaxMin() {
    var numInputValue = parseInt(numInput.value);
    var numInputMax = parseInt(numInput.max);
    var numInputMin = parseInt(numInput.min);

    if (numInputValue === numInputMax) {
      arrUp.style.color = "#666";
      arrUp.style.cursor = "not-allowed";
    } else {
      console.log('no');
    }
  }

  ;
});