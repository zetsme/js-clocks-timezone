class Clock {
  constructor(domElements, timeZoneString) {
    this.domElements = domElements;
    const { clockArrowsToRotate, clockTextsTime, dates, clockTimeZone } = this.domElements;
    this.clockArrowsToRotate = clockArrowsToRotate;
    this.clockTextsTime = clockTextsTime;
    this.datesEl = dates;
    if (timeZoneString) this.timeZoneString = timeZoneString;
    this.timeZoneEl = clockTimeZone;
    this.start();
  }

  converTz = (date, tzString) => {
    return new Date(
      (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
        timeZone: tzString,
      })
    );
  };

  renderTextsTime() {
    const [hoursEl, minutesEl] = this.clockTextsTime;
    const hours = this.date.getHours().toString().padStart(2, 0);
    const minutes = this.date.getMinutes().toString().padStart(2, 0);

    hoursEl.textContent = `${hours}:`;
    minutesEl.textContent = minutes;
  }
  renderDates() {
    const [dayEl, monthEl, yearEl] = this.datesEl;

    const day = this.date.getDate();
    const month = this.date.toLocaleString('en-US', { month: 'long' });
    const year = this.date.getFullYear();

    dayEl.textContent = day;
    monthEl.textContent = month;
    yearEl.textContent = year;
  }
  renderArrowsRotation() {
    const [hoursArrowEl, minutesArrowEl, secondsArrowEl] = this.clockArrowsToRotate;

    const hour = this.date.getHours() * 30;
    const minute = this.date.getMinutes() * 6;
    const second = this.date.getSeconds() * 6;

    hoursArrowEl.style.transform = `rotateZ(${hour + minute / 12}deg)`;
    minutesArrowEl.style.transform = `rotateZ(${minute}deg)`;
    secondsArrowEl.style.transform = `rotateZ(${second}deg)`;
  }

  renderTimeZone() {
    this.timeZoneEl.textContent = new Intl.DateTimeFormat('en-US', {
      timeZone: this.timeZoneString,
    }).resolvedOptions().timeZone;
  }

  start() {
    this.date = this.converTz(new Date(), this.timeZoneString);
    this.renderTextsTime();
    this.renderDates();
    this.renderArrowsRotation();
    this.renderTimeZone();
    this.timer = setInterval(() => {
      this.date = this.converTz(new Date(), this.timeZoneString);
      this.renderTextsTime();
      this.renderDates();
      this.renderArrowsRotation();
    }, 1000);
  }
}

export default Clock;
