const global = {
  currentPage: window.location.pathname,
};

// Display Popular movies
async function displayPopularMovies() {
  // const Results = await fetchAPIData("movie/popular"); // Array of arrays
  // console.log(Results);
  // Results destructured -> results

  const { results } = await fetchAPIData("movie/popular");
  // console.log(results);
  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://images.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
              />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
            }
            </a>
              <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${movie.release_date}</small>
              </p>
            </div>`;
    document.querySelector("#popular-movies").appendChild(div);
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "7558d1f258135c1b5e1ad8bf33dca8a1"; // If it were production site, this api key would be at the backend, so that nobody could get the api key.

  const API_URL = "https://api.themoviedb.org/3/";

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  return data;
}

// Highlight active Link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    const linkHref = link.getAttribute("href").replace("./", "");
    const page = global.currentPage.split("/").pop();
    if (linkHref === page) {
      link.classList.add("active");
      // console.log(link.getAttribute("href"));
    }
  });
}

// Init app
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      displayPopularMovies();
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

document.addEventListener("DOMContentLoaded", init);
