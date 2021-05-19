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
      const day = document.querySelector('#timer-1 [data-value="days"]');
      day.textContent = days;
      const hour = document.querySelector('#timer-1 [data-value="hours"]');
      hour.textContent = hours;
      const min = document.querySelector('#timer-1 [data-value="mins"]');
      min.textContent = mins;
      const sec = document.querySelector('#timer-1 [data-value="secs"]');
      sec.textContent = secs;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 17, 2029'),
});

timer.start();

function getTimeComponents(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  return { days, hours, mins, secs };
}
