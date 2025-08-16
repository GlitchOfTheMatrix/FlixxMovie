# FLIXX - Movie & TV Show Discovery App



FLIXX is a sleek, responsive web application for discovering the most popular movies and TV shows. Built with modern vanilla JavaScript, it leverages the The Movie DB (TMDB) API to provide real-time data. The interface is clean, intuitive, and designed to provide a seamless user experience across all devices.

**[View Live Demo](https://flixxmovieappproject.netlify.app/)** 

## Features

-   **Browse Popular Content:** View curated lists of the most popular movies and TV shows.
-   **"Now Playing" Slider:** An interactive, touch-friendly slider on the homepage showcases movies currently in theaters.
-   **Detailed Information:** Access comprehensive details for any movie or show, including its poster, rating, release date, synopsis, and more.
-   **Dynamic Search:** A powerful search functionality to find any movie or TV show from the TMDB database.
-   **Pagination:** Efficiently navigate through multiple pages of search results.
-   **Loading Spinner:** A visual indicator ensures a smooth user experience while data is being fetched asynchronously.
-   **Fully Responsive:** The layout is optimized for a great experience on desktops, tablets, and mobile devices.

## Tech Stack

This project is built using modern web technologies without relying on a major front-end framework.

-   **Core:** HTML5, CSS3 (with Custom Properties), Vanilla JavaScript (ES6+)
-   **API:** [The Movie DB (TMDB) API](https://developers.themoviedb.org/3) for all movie and show data.
-   **Libraries:**
    -   [Swiper.js](https://swiperjs.com/) for the content slider.
    -   [Font Awesome](https://fontawesome.com/) for icons.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need a free API key from The Movie DB.
1.  Create an account at [https://www.themoviedb.org/](https://www.themoviedb.org/).
2.  Go to your account settings, navigate to the "API" section, and generate a new key.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/flixx-app.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd flixx-app
    ```
3.  **Configure the API Key:**
    Open the `script.js` file in your code editor. Locate the `global` object at the top and replace `'YOUR_API_KEY_HERE'` with your actual TMDB API key.
    ```javascript
    const global = {
      currentPage: window.location.pathname,
      search: {
        term: '',
        type: '',
        page: 1,
        totalPages: 1,
        totalResults: 0,
      },
      api: {
        // Enter your API Key here
        apiKey: 'YOUR_API_KEY_HERE', 
        apiUrl: 'https://api.themoviedb.org/3/',
      },
    };
    ```
4.  **Launch the application:**
    Open the `index.html` file in your browser. For the best experience and to avoid potential CORS issues, it is recommended to use a live server. If you are using VS Code, you can use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.

## Project Structure

The project is organized with a clear separation of concerns, making it easy to navigate and maintain.

```
/
├── css/
│   ├── spinner.css
│   ├── style.css
├── images/
|   ├── favicon.png
│   ├── no-image.jpg
│   └── showcase-bg.jpg
├── js/
│   └── script.js
├── lib/
│   ├── fontawesome.css
│   ├── swiper.css
│   └── swiper.js
├── webfonts/
│   ├── fa-brands-400.ttf
│   ├── fa-brands-400.woff2
│   ├── fa-regular-400.ttf
│   ├── fa-regular-400.woff2
│   ├── fa-solid-900.ttf
│   ├── fa-solid-900.woff2
│   ├── fa-v4compatibility.ttf
│   └── fa-v4compatibility.woff2 
├── index.html            # Home page (Popular Movies)
├── movie-details.html    # Movie details page
├── search.html           # Search page and results
├── shows.html            # TV Shows page
└── tv-details.html       # TV Show details page
```
## Acknowledgements

-   This project uses the [TMDb API](https://www.themoviedb.org/documentation/api) but is not endorsed or certified by TMDb.
-   Slider functionality is powered by the excellent [Swiper.js](https://swiperjs.com/) library.
