const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");
const dayDial = document.querySelector(".dial-day");
const dayOfMonthDial = document.querySelector(".dial-month");

function getTime() {
  const now = new Date();
  const milliSeconds = now.getMilliseconds();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const day = now.getDay();
  const dayOfMonth = now.getDate();
  console.log(dayOfMonth);

  const secondsRotation = (seconds + milliSeconds / 1000) * 6;
  const minutesRotation = ((minutes + seconds / 60) / 60) * 360;
  const hoursRotation = ((hours + minutes / 60) / 12) * 360;
  const degPerDayofWeek = 360 / 7;
  const degPerDayofMonth = 360 / 31;
  const currDay = -day * degPerDayofWeek;
  const currDayMonth = (-dayOfMonth + 7) * degPerDayofMonth;
  console.log(-dayOfMonth + 7);

  secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
  hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
  dayDial.style.transform = `translateX(-50%) rotate(${currDay}deg)`;
  dayOfMonthDial.style.transform = `translateX(-50%) rotate(${currDayMonth}deg)`;
  // request animation frame para smooth ang rotation ng second hand parang automatic o mechanical watch talga siya
  requestAnimationFrame(getTime);
}

const weekDay = [
  {
    name: "Sunday",
    rem: 0.15,
  },
  {
    name: "Monday",
    rem: 0.25,
  },
  {
    name: "Tuesday",
    rem: 0.4,
  },
  {
    name: "Wednesday",
    rem: 0.7,
  },
  {
    name: "Thursday",
    rem: 0.7,
  },
  {
    name: "Friday",
    rem: 0.5,
  },
  {
    name: "Saturday",
    rem: 0.25,
  },
];

// getTime();
// setInterval(getTime, 1000);
weekDay.forEach((day, index) => {
  const div = document.createElement("div");
  div.setAttribute("class", `day day${index}`);
  console.log(day.name);
  for (let i = 0; i < day.name.length; i++) {
    const span = document.createElement("span");
    const letter = day.name[i];
    // console.log(day[i]);
    span.textContent = letter;
    span.style.display = "inline-block";
    span.style.paddingTop = `${day.rem}rem`;
    const deg = 350 + i * 5;
    span.style.transform = `rotate(${deg}deg)`;
    div.appendChild(span);
  }
  document.querySelector(".dial-day").appendChild(div);
});

// dial-day-month feature
for (let i = 1; i <= 31; i++) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const rotateCalc = 11.62 * i;

  div.setAttribute("class", `day month${i}`);
  div.style.transform = `rotate(${rotateCalc}deg)`; // Rotate the div

  span.textContent = i;
  span.style.transformOrigin = "center";
  span.style.display = "inline-block";
  span.style.transform = `rotate(${-80}deg)`; // Counter-rotate the span

  div.appendChild(span);
  document.querySelector(".dial-month").appendChild(div);
}

getTime();
