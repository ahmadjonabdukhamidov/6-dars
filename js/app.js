const spiderImage = document.querySelector("img");
const bodyEl = document.querySelector(".body");
const score = document.querySelector(".title span");
const easyBtnEl = document.getElementById("easy-btn");
const mediumBtnEl = document.getElementById("medium-btn");
const hiddenDvEl = document.querySelector(".hidden");
const hardBtnEl = document.getElementById("hard-btn");
const baseDvEl = document.querySelector(".wrapper-dv");
const titleEl = document.querySelector(".title span");
const timeEl = document.querySelector(".time span");
const resetEl = document.querySelector(".reset");
let innerWidth = window.innerWidth - 50;
let innerHeight = window.innerHeight - 50;

let counter = 0;

let userTime = 15;

function repeat() {
  // ? easy-type

  easyBtnEl.addEventListener("click", () => {
    baseDvEl.style.visibility = "hidden";
    hiddenDvEl.style.visibility = "visible";
    setInterval(() => {
      let top = Math.random() * innerWidth;
      let left = Math.random() * innerHeight;

      spiderImage.style = `
           position:absolute;
           left:${top}px;
           top:${left}px;
        `;
    }, 1400);

    document.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") == "spider-image") counter++;
      score.textContent = counter;
    });

    const timeInterval = setInterval(() => {
      if (userTime > 0) {
        userTime--;
        timeEl.textContent = `${userTime}s`;
      } else if (userTime == 0) {
        titleEl.textContent = `${counter}`;
        clearInterval(timeInterval);
      }
    }, 1000);
  });

  // ? medium-type

  mediumBtnEl.addEventListener("click", () => {
    baseDvEl.style.visibility = "hidden";
    hiddenDvEl.style.visibility = "visible";
    setInterval(() => {
      let top = Math.random() * innerWidth;
      let left = Math.random() * innerHeight;

      spiderImage.style = `
           position:absolute;
           left:${top}px;
           top:${left}px;
        `;
    }, 900);

    document.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") == "spider-image") counter++;
      score.textContent = counter;
    });

    const timeInterval = setInterval(() => {
      if (userTime > 0) {
        userTime--;
        timeEl.textContent = `${userTime}s`;
      } else if (userTime == 0) {
        titleEl.textContent = `${counter}`;
        clearInterval(timeInterval);
      }
    }, 1000);
  });

  // ?  hard-type

  hardBtnEl.addEventListener("click", () => {
    baseDvEl.style.visibility = "hidden";
    hiddenDvEl.style.visibility = "visible";
    setInterval(() => {
      let top = Math.random() * innerWidth;
      let left = Math.random() * innerHeight;

      spiderImage.style = `
           position:absolute;
           left:${top}px;
           top:${left}px;
        `;
    }, 400);

    document.addEventListener("click", (e) => {
      if (e.target.getAttribute("id") == "spider-image") counter++;
      score.textContent = counter;
    });

    const timeInterval = setInterval(() => {
      if (userTime > 0) {
        userTime--;
        timeEl.textContent = `${userTime}s`;
      } else {
        titleEl.textContent = `${counter}`;
        clearInterval(timeInterval);
        repeat();
      }
    }, 1000);
  });
}

repeat();

resetEl.addEventListener("click", () => {
  repeat();
  counter = 0;
  timeEl.textContent = `${userTime}`;
  openMod()
});


function openMod () {
  baseDvEl.style.visibility = "visible";
  hiddenDvEl.style.visibility = "hidden";
}
