class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    const startTime = this.targetDate;

    setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = startTime - currentTime;

      const { days, hours, mins, secs } = getTimeComponents(deltaTime);

      const timer1 = document.querySelector('#timer-1');

      const day = timer1.querySelector('[data-value="days"]');
      day.textContent = days;

      const hour = timer1.querySelector('[data-value="hours"]');
      hour.textContent = hours;

      const min = timer1.querySelector('[data-value="mins"]');
      min.textContent = mins;

      const sec = timer1.querySelector('[data-value="secs"]');
      sec.textContent = secs;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 17, 2029'),
});

timer.start();

function pad(value) {
  return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
}
