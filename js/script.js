const global = {
  currentPage: window.location.pathname,
};
console.log(global.currentPage);
// Init app
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      break;
    case "/shows.html":
      console.log("Shows");
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }
  highlightActiveLink();
}

// Highlight active Link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    const linkHref = link.getAttribute("href").replace("./", "");
    const page = global.currentPage.split("/").pop();
    if (linkHref === page) {
      link.classList.add("active");
      console.log(link.getAttribute("href"));
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
