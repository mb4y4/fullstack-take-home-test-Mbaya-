 ![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)


# Ello Book Assignment

Ello Book Assignment is a full-stack web application that allows users to search for books, view book details, and manage a reading list. This project leverages React on the frontend, Apollo Client for GraphQL queries, and a backend API to provide a seamless and interactive user experience.

## Features

- **Search Books:** Users can search for books using a search bar.
- **View Book Details:** Detailed information about each book including title, author, and cover photo.
- **Manage Reading List:** Users can add books to their reading list and remove them as needed.
- **Pagination:** Load more books in batches to improve performance and user experience.

## Technologies Used

- **Frontend:** React, Material-UI, Apollo Client
- **Backend:** GraphQL, Node.js (Assumed backend setup)
- **State Management:** React Context API

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/mb4y4/fullstack-take-home-test-Mbaya-.git
    cd fullstack-take-home-test-Mbaya-
    ```

2. **Install dependencies:**

    ```bash
    # Install backend dependencies
    cd backend
    npm install
    
    # Install frontend dependencies
    cd ../frontend
    npm install
    ```

3. **Run the application:**

    ```bash
    # Start the backend server
    cd backend
    npm start

    # Start the frontend development server
    cd ../frontend
    npm run dev
    ```

    The backend server will typically run on `http://localhost:4000`, and the frontend will run on `http://localhost:3000`.

## Project Structure

- **frontend/**
  - **src/**
    - **components/**: Reusable React components (e.g., `BookCard`, `SearchBar`).
    - **contexts/**: React Context API setup (e.g., `SearchContext`).
    - **pages/**: Page components (e.g., `HomePage`, `SearchPage`).
    - **App.js**: Main application component.
  - **public/**: Public assets and HTML template.
  - **package.json**: Frontend dependencies and scripts.

- **backend/**
  - **src/**: Backend source code.
  - **index.js**: Main server entry point.
  - **schema.graphql**: GraphQL schema definitions.
  - **package.json**: Backend dependencies and scripts.

## Usage

1. **Searching for Books:** Use the search bar on the homepage to find books.
2. **Adding to Reading List:** Click on "Add to Reading List" on any book card to add it to your reading list.
3. **Viewing Reading List:** Navigate to the reading list page to see all the books you've added.
4. **Loading More Books:** Click "Load More" to fetch additional books in batches.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Commit your changes:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a pull request.**

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need further assistance, feel free to contact me at [d.sommy@gmail.com].
