import "./countdown.scss";
import { time } from "@app/data/state";
import { ACTIVE_CLASS } from "@app/data/constants";
import { countdownClock, countdownTime } from "@app/ui/elements";

const countdownMilliseconds = (percentage) => time.total * (percentage / 100);
const fillZero = (num) => (num < 10 ? "0" + num : num);
const toggleClockShow = () => {
  countdownClock.classList.toggle(ACTIVE_CLASS);
};

const timeRemaining = (endtime) => {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  return {
    total,
    minutes,
    seconds,
  };
};

const calculateDeadline = (timeLeft) => {
  const currentTime = Date.parse(new Date());
  const deadline = new Date(currentTime + timeLeft);
  return deadline;
};

let timeinterval = null;

const runClock = (endTime) => {
  const updateCountdown = () => {
    var t = timeRemaining(endTime);
    countdownTime.innerHTML = `${fillZero(t.minutes)}:${fillZero(t.seconds)}`;
    if (t.total <= -1000) {
      toggleClockShow();
      clearInterval(timeinterval);
    }
  };
  updateCountdown(endTime);
  timeinterval = setInterval(updateCountdown, 1000);
};

export const countdown = (event) => {
  const milliseconds = countdownMilliseconds(event.value);
  time.countdown.deadline = calculateDeadline(milliseconds);
  toggleClockShow();
  runClock(time.countdown.deadline);
};

export const pauseClock = () => {
  clearInterval(timeinterval);
  time.countdown.remaining = timeRemaining(time.countdown.deadline).total;
};

export const resumeClock = () => {
  time.countdown.deadline = new Date(
    Date.parse(new Date()) + time.countdown.remaining
  );
  runClock(time.countdown.deadline);
};
