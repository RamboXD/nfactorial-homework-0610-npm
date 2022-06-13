function setWhiteTheme() {
  localStorage.setItem("theme", "light");
  const root = document.getElementById("mainContainer");
  const header = document.getElementById("header");
  const foter = document.getElementById("footer");
  root.className = "light";
  header.className = "navbar bg-light";
  footer.className = "text-center text-lg-start bg-light text-muted";
}
function setDarkTheme() {
  localStorage.setItem("theme", "dark");
  const root = document.getElementById("mainContainer");
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  root.className = "dark";
  header.className = "navbar-dark bg-dark";
  footer.className = "text-white bg-dark form-white btn-outline-light";
}
function getValue() {
  const theme = localStorage.getItem("theme");
  const root = document.getElementById("mainContainer");
  const header = document.getElementById("header");
  root.className = theme;
  if (theme === "dark") {
    header.className = "navbar-dark bg-dark";
    footer.className = "text-white bg-dark form-white btn-outline-light";
  } else {
    header.className = "navbar bg-light";
    footer.className = "text-center text-lg-start bg-light text-muted";
  }
}

const setCookie = () => {
  document.cookie = "user = John; expires = Wed, 15 June 2022 06:00:00 GMT";
};
