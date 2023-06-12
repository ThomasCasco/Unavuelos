document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme");
  const table = document.getElementsByClassName("table");

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  });
});

const toggle = document.getElementById("theme");
const contrails = document.getElementById("contrails");

toggle.addEventListener("change", function () {
  if (this.checked) {
    contrails.classList.add("dark-theme");
  } else {
    contrails.classList.remove("dark-theme");
  }
});

const toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  toggleSwitch.classList.toggle("active");
});
