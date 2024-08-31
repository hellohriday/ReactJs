const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  document.body.style.backgroundColor = color;
};
let startIntervalRef;
const startInterval = function () {
  startIntervalRef = setInterval(randomColor, 1000);
};
const stopInterval = function () {
  clearInterval(startIntervalRef);
  startIntervalRef = null;
};

document
  .querySelector("#start")
  .addEventListener("click", startInterval, false);

document.querySelector("#stop").addEventListener("click", stopInterval, false);
