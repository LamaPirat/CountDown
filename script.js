const year = new Date().getFullYear();
const fourthOfJuly = new Date(year, 11, 4).getTime();
const fourthOfJulyNextYear = new Date(year + 1, 11, 4).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function () {
  // get today's date
  const today = new Date().getTime();

  // get the difference
  let diff;
  if (month > 11) {
    diff = fourthOfJulyNextYear - today;
  } else {
    diff = fourthOfJuly - today;
  }

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="hours"> \
  <div class="numbers">' +
    hours +
    '</div>timer</div> \
<div class="minutes"> \
  <div class="numbers">' +
    minutes +
    '</div>minutter</div> \
<div class="seconds"> \
  <div class="numbers">' +
    seconds +
    "</div>sekunder</div> \
</div>";

  if (hours === 0 && minutes == 0 && seconds === 0) {
    clearInterval(timer);
    remove();
    atZero();
  }
}, 1000);

function remove() {
  const myNode = document.querySelector("body");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
}

function atZero() {
  const gifContainer = document.createElement("div");
  const gif = document.createElement("img");
  gif.classList = "gif";
  gif.style.height = "auto;";
  gif.style.maxWidth = "100%";
  gif.src = "resources/happy-birthday.gif";
  gifContainer.appendChild(gif);
  gifContainer.classList.add("gifContainer");
  document.body.appendChild(gifContainer);

  var sound = document.createElement("audio");
  sound.id = "audio-player";
  sound.controls = "controls";
  sound.autoplay = true;
  sound.type = "audio/mp3";
  sound.src = "resources/song.mp3";
  sound.addEventListener(
    "load",
    function () {
      sound.play();
    },
    true
  );
}
