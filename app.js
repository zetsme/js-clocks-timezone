import createClockHTML from './createClockHTML.js';
import Clock from './Clock.js';

const container = document.querySelector('.container');

const tempTimeZoneArr = [
  null,
  'Asia/Jakarta',
  'America/Jamaica',
  'America/New_York',
  'Europe/London',
  'America/Los_Angeles',
  'Asia/Tokyo',
  'Australia/Sydney',
  'America/Sao_Paulo',
];

tempTimeZoneArr.forEach((timeZone) => new Clock(createClockHTML(container), timeZone));
