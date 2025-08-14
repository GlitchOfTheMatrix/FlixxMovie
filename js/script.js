const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
  },
  api: {
    apiKey: "7558d1f258135c1b5e1ad8bf33dca8a1",
    apiUrl: "https://api.themoviedb.org/3/",
  },
};

// Display 20 most Popular movies
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

// Display 20 most TV movies
async function displayPopularShows() {
  // const Results = await fetchAPIData("movie/popular"); // Array of arrays
  // console.log(Results);
  // Results destructured -> results

  const { results } = await fetchAPIData("tv/popular");
  // console.log(results);
  results.forEach((show) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <a href="tv-details.html?id=${show.id}">
            ${
              show.poster_path
                ? `<img
              src="https://images.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
              />`
                : `<img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />`
            }
            </a>
              <div class="card-body">
              <h5 class="card-title">${show.name}</h5>
              <p class="card-text">
                <small class="text-muted">Release: ${
                  show.first_air_date
                }</small>
              </p>
            </div>`;
    document.querySelector("#popular-shows").appendChild(div);
  });
}

// Display show details
async function displayShowDetails() {
  const showID = window.location.search.split("=")[1];

  const show = await fetchAPIData(`tv/${showID}`);

  // Overlay for background image
  displayBackgroundImage("show", show.backdrop_path);

  const div = document.createElement("div");
  div.innerHTML = `<div class="details-top">
          ${
            show.poster_path
              ? `<div>
                <img
                  src="https://images.tmdb.org/t/p/w500${show.poster_path}"
                  class="card-img-top"
                  alt="${show.name}"
                />
              </div>`
              : `<div>
                <img
                  src="images/no-image.jpg"
                  class="card-img-top"
                  alt="${show.name}"
                />
              </div>`
          }
          <div>
            <h2>${show.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${show.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
            <p>${show.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
            ${show.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
            </ul>
            <a href="${
              show.homepage
            }" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${
              show.number_of_episodes
            }</li>
            <li><span class="text-secondary">Last Episode to Air:</span> ${
              show.last_air_date
            }</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${show.production_companies
            .map((company) => `<span>${company.name}</span>`)
            .join(", ")}</div>
        </div>`;
  document.querySelector("#show-details").appendChild(div);
}
// Display movie details
async function displayMovieDetails() {
  const movieID = window.location.search.split("=")[1];

  const movie = await fetchAPIData(`movie/${movieID}`);

  // Overlay for background image
  displayBackgroundImage("movie", movie.backdrop_path);

  const div = document.createElement("div");
  div.innerHTML = `<div class="details-top">
          ${
            movie.poster_path
              ? `<div>
                <img
                  src="https://images.tmdb.org/t/p/w500${movie.poster_path}"
                  class="card-img-top"
                  alt="${movie.title}"
                />
              </div>`
              : `<div>
                <img
                  src="images/no-image.jpg"
                  class="card-img-top"
                  alt="${movie.title}"
                />
              </div>`
          }
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movie.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${movie.release_date}</p>
            <p>${movie.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
            ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join("")}
            </ul>
            <a href="${
              movie.homepage
            }" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommasToNumberRegex(
              movie.budget
            )}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommasToNumberRegex(
              movie.revenue
            )}</li>
            <li><span class="text-secondary">Runtime:</span> ${
              movie.runtime
            } minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${movie.production_companies
            .map((company) => `<span>${company.name}</span>`)
            .join(", ")}</div>
        </div>`;
  document.querySelector("#movie-details").appendChild(div);
}

// Display backdrop on details pages
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.backgroundImage = `url("https://images.tmdb.org/t/p/original/${backgroundPath}")`;
  overlayDiv.style.backgroundSize = "cover";
  overlayDiv.style.backgroundPosition = "center";
  overlayDiv.style.backgroundRepeat = "no-repeat";
  overlayDiv.style.height = "100vh";
  overlayDiv.style.width = "100vw";
  overlayDiv.style.position = "absolute";
  overlayDiv.style.left = "0";
  overlayDiv.style.top = "0";
  overlayDiv.style.zIndex = "-1";
  overlayDiv.style.opacity = "0.1";

  if (type === "movie") {
    document.querySelector("#movie-details").appendChild(overlayDiv);
  } else {
    document.querySelector("#show-details").appendChild(overlayDiv);
  }
}

// Search Movies/Shows
async function search() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  global.search.type = urlParams.get("type");
  global.search.term = urlParams.get("search-term");

  if (global.search.term !== "" && global.search.term !== null) {
    // @todo - make request and display results
    const results = await searchAPIData();
    console.log(results);
  } else {
    showAlert("Please enter a search term");
  }
}

async function displaySlider() {
  const { results } = await fetchAPIData("movie/now_playing");

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("swiper-slide");

    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${
      movie.title
    }" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(
          1
        )} / 10
      </h4>
    `;

    document.querySelector(".swiper-wrapper").appendChild(div);

    initSwiper();
  });
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: false,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey; // If it were production site, this api key would be at the backend, so that nobody could get the api key.

  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  hideSpinner();
  return data;
}

// Search
async function searchAPIData() {
  const API_KEY = global.api.apiKey; // If it were production site, this api key would be at the backend, so that nobody could get the api key.

  const API_URL = global.api.apiUrl;

  showSpinner();

  const response = await fetch(
    `${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}`
  );

  const data = await response.json();

  hideSpinner();
  return data;
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}
function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
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

// Show Alert
function showAlert(message, className) {
  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", className);
  alertEl.appendChild(document.createTextNode(message));
  document.querySelector("#alert").appendChild(alertEl);

  setTimeout(() => alertEl.remove(), 3000);
}

function addCommasToNumberRegex(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Init app
function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      displaySlider();
      displayPopularMovies();
      break;
    case "/shows.html":
      displayPopularShows();
      break;
    case "/movie-details.html":
      displayMovieDetails();
      break;
    case "/tv-details.html":
      displayShowDetails();
      break;
    case "/search.html":
      search();
      break;
  }
  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
