document.addEventListener('DOMContentLoaded', function () {
    // date entered on the timer. in developing. time used - 5 minutes
    const deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 5);
    // id таймера
    let timerId = null;
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      // const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      // $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      // $days.dataset.title = 'days';
      $hours.dataset.title = 'hours';
      $minutes.dataset.title = 'minutes';
      $seconds.dataset.title = 'seconds';
    }
    // получаем элементы, содержащие компоненты даты
    // const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
});

const customNum = document.querySelectorAll('.custom-num');

customNum.forEach(num => {
  const numInput = num.querySelector('.num-input');
  const arrUp = num.querySelector('.arr-up');
  const arrDown = num.querySelector('.arr-down');

  arrUp.addEventListener('click', () => {
    numInput.stepUp();
    checkMaxMin();
  });

  arrDown.addEventListener('click', () => {
    numInput.stepDown();
    checkMaxMin();
  });

  numInput.addEventListener('input', checkMaxMin);

  function checkMaxMin() {
    const numInputValue = parseInt(numInput.value);
    const numInputMax = parseInt(numInput.max);
    const numInputMin = parseInt(numInput.min);

    if(numInputValue === numInputMax) {
      arrUp.style.color = "#666"
      arrUp.style.cursor = "not-allowed";
    } else {console.log('no')}
  };
});