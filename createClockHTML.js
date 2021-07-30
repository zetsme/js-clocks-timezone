import { createElement, appendToDOM } from './utils.js';

const createClockHTML = (parentEl) => {
  const clock = createElement('div', 'clock');
  const clockCircle = createElement('div', 'clock__circle');

  const clockBarsArr = ['twelve', 'three', 'six', 'nine'];
  const clockBars = clockBarsArr.map((bar) => createElement('span', `clock__${bar}`));
  const clockRoundCenter = createElement('div', 'clock__rounder');
  const clockArrowsToRotateArr = ['hour', 'minutes', 'seconds'];
  const clockArrowsToRotate = clockArrowsToRotateArr.map((arrow) =>
    createElement('div', `clock__${arrow}`)
  );

  const clockInfo = createElement('div', 'clock__info');
  const clockText = createElement('div', 'clock__text');
  const clockTextsTimeArr = ['hour', 'minutes'];
  const clockTextsTime = clockTextsTimeArr.map((text) =>
    createElement('div', `clock__text-${text}`)
  );

  const clockDate = createElement('div', 'clock__date');
  const datesArr = ['day', 'month', 'year'];
  const dates = datesArr.map((date) => createElement('span', `date__${date}`));

  const clockTimeZone = createElement('h5', 'clock__timezone');
  appendToDOM(
    new Map([
      [clockCircle, [...clockBars, clockRoundCenter, ...clockArrowsToRotate]],
      [clockText, clockTextsTime],
      [clockDate, dates],
      [clockInfo, [clockTimeZone, clockText, clockDate]],
      [clock, [clockCircle, clockInfo]],
      [parentEl, clock],
    ])
  );

  return { clockArrowsToRotate, clockTextsTime, dates, clockTimeZone };
};

export default createClockHTML;
