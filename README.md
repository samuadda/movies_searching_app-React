# 🎬 Movie Search & Collections App

A modern React application that allows users to search for movies using the OMDb API, view details, and curate a personal list of favorites. This project represents a key milestone in my frontend development journey, demonstrating mastery of React state management, API integration, and modern CSS styling.

![App Screenshot Placeholder](./public/screenshot-main.png)
_(Note: Replace this with an actual screenshot of your app)_

## ✨ Features

-   **Search Movies**: Real-time searching using the OMDb API.
-   **Favorites List**: Add and remove movies from your personal collection.
-   **Movie Details**: Click on any movie to view more details in a modal.
-   **Responsive Design**: Fully responsive grid layout that works on desktop and mobile.
-   **Modern UI**: Dark theme, glassmorphism effects, and smooth animations.

## 🛠️ Tech Stack

-   **React.js**: Functional components and Hooks (`useState`, `useEffect`).
-   **CSS3**: Custom properties (variables), Flexbox, Grid, and Animations.
-   **OMDb API**: External data fetching for movie information.
-   **JavaScript (ES6+)**: Async/Await, Array methods (`map`, `filter`).

## 📂 Project Structure

```text
movies_searching_app-React/
├── public/                  # Static assets (index.html, icons, etc.)
├── src/
│   ├── App.css              # Styling for the main App component
│   ├── App.js               # Main application component and state holder
│   ├── App.test.js          # Unit tests
│   ├── FavouriteList.jsx    # Component to display the list of favorite movies
│   ├── FavouriteMovie.jsx   # Component for individual movie items in the favorite list
│   ├── index.css            # Global application styles
│   ├── index.js             # Application entry point
│   ├── searchMovies.jsx     # Component for searching movies via API
│   ├── setupTests.js        # Test setup configuration
│   └── reportWebVitals.js   # Performance measuring
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🚀 How to Run Locally

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/movie-search-app.git
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Start the App**
    ```bash
    npm start
    ```
    The app will open at `http://localhost:3000`.

## 📚 What I Learned

Building this project helped solidify several core frontend concepts:

### 1. React State Management

-   Learned how to lift state up to the parent `App` component to share data between `SearchMovies` and `FavouriteList`.
-   Managed complex state for the Modal visibility and the selected movie data.

### 2. API Integration

-   Mastered `fetch` and `async/await` to handle asynchronous data from the OMDb API.
-   Implemented error handling to manage cases where movies aren't found or the network fails.

### 3. Modern CSS & UI/UX

-   Moved beyond basic styling to use **CSS Grid** for responsive layouts.
-   Implemented **CSS Variables** for consistent theming.
-   Added polish with **transitions**, **animations** (fade-ins), and **backdrop-filters** for a professional look.

### 4. Component Architecture

-   Practiced breaking down the UI into reusable components (`FavouriteMovie`, `SearchMovies`, `FavouriteList`).
-   Learned the importance of clean prop drilling and event handling.

## 📸 Screenshots

### Search Interface

![Search Interface](./public/screenshot-search.png)

### Favorites Grid

![Favorites Grid](./public/screenshot-grid.png)

### Movie Details Modal

![Movie Details](./public/screenshot-modal.png)

---

_Built with ❤️ by [Your Name]_
