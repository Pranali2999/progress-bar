window.addEventListener("scroll", updateProgressBar);

function updateProgressBar() {
  const fullHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrolledHeight = window.scrollY;
  const scrollPercentage = (scrolledHeight / (fullHeight - windowHeight)) * 100;

  const progressBar = document.getElementById("progress");
  const progressPercent = document.getElementById("progress-percent");
  progressBar.style.width = scrollPercentage + "%";
  progressPercent.textContent = Math.round(scrollPercentage) + "%" + "viewed";
}
