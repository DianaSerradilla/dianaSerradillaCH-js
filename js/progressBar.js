// ----------------Pogress bar

function progressbar(idOne, idTwo, cantidad, value) {
  let progressBar = document.querySelector(idOne);
  let valueContainer = document.querySelector(idTwo);
  let progressEndValue = cantidad;
  let progressValue = value;
  let speed = 10;
  let progress = setInterval(() => {
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient(
    #F2B6A0 ${progressValue * 3.6}deg,
    #F2F2F2 ${progressValue * 3.6}deg
  )`;
    if (progressValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}


progressbar("#circular-progressA", "#value-containerA", 25, 0);
progressbar("#circular-progressB", "#value-containerB", 50, 0);
progressbar("#circular-progressC", "#value-containerC", 0, -1);
progressbar("#circular-progressD", "#value-containerD", 0, -1);