const digitalClock = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let timeFormat = "AM";
  // day

  let Week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = Week[date.getDay()];

  // year

  let year = date.getFullYear();

  if (hour > 12) {
    hour = hour - 12;
    timeFormat = "PM";
  }
  if (hour == 0) {
    hour = 12;
    timeFormat = "AM";
  }

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  let dayYear = `${day} ${year}`;

  let watch = `${hour} : ${minute} : ${second}`;

  let fullTime = document.getElementById("time");
  fullTime.innerText = watch;
  let a = (document.getElementById("dayYear").innerText = dayYear);

  setInterval(digitalClock, 1000);
};

digitalClock();

let d = new Date();

let time = d.getDigitBanglaFromEnglish();

console.log(time);
