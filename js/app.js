const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light";
  } else {
    darkModeBtn.textContent = "Dark";
  }
});