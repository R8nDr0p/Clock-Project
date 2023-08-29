const secondsHand = document.getElementById("seconds-hand");
const minutesHand = document.getElementById("minutes-hand");
const hoursHand = document.getElementById("hours-hand");

function getTime() {
  const now = new Date();
  const milliSeconds = now.getMilliseconds();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondsRotation = (seconds + milliSeconds / 1000) * 6;
  const minutesRotation = ((minutes + seconds / 60) / 60) * 360;
  const hoursRotation = ((hours + minutes / 60) / 12) * 360;

  secondsHand.style.transform = `rotate(${secondsRotation}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
  hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
  // request animation frame para smooth ang rotation ng second hand parang automatic o mechanical watch talga siya
  requestAnimationFrame(getTime);
}

const weekDay = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// getTime();
// setInterval(getTime, 1000);
weekDay.forEach((day, index) => {
  const div = document.createElement("div");
  div.setAttribute("class", `day day${index}`);

  for (let i = 0; i < day.length; i++) {
    const span = document.createElement("span");
    span.textContent = day[i];
    span.style.position = "inline-block";
    span.style.transform = "rotate(90deg)";
    div.appendChild(span);
  }
  document.querySelector(".dial-day").appendChild(div);
});
getTime();
