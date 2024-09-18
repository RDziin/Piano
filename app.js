function playsound(e) {
  let target;

  if (e.type === "click") {
    const clickedElement = e.target.closest("[data-key]");
    if (clickedElement) {
      target = clickedElement.getAttribute("data-key");
    } else {
      return;
    }
  } else {
    target = e.keyCode;
  }

  const audio = document.querySelector(`audio[data-key="${target}"]`);
  const key = document.querySelector(`.key[data-key="${target}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 330);
}

window.addEventListener("keydown", playsound);
window.addEventListener("click", playsound);


let volumeLevel = 50;

const volume = document.getElementById("volume");
const volumeLevelDisplay = document.getElementById("volumeLevelDisplay");

volume.addEventListener("input", () => {
  volumeLevel = volume.value;
  volumeLevelDisplay.textContent = `${volumeLevel}%`; 
  const audio = document.querySelectorAll("audio");
  audio.forEach((audio) => {
    audio.volume = volumeLevel / 100; 
  });
});