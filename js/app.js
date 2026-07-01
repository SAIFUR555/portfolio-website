const darkModeBtn = document.getElementById("darkModeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");

darkModeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeBtn.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    darkModeBtn.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  darkModeBtn.textContent = "Light";
}

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
});

navItems.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});