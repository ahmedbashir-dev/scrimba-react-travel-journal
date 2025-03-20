# Scrimba React Travel Journal

This project is a travel journal application built with React and Vite. It allows users to view a list of travel destinations with details such as images, titles, countries, dates, and descriptions.

## Project Structure
- **scrimba-react-travel-journal/**
  - `.gitignore`
  - `eslint.config.js`
  - `index.html`
  - `package.json`
  - `README.md`
  - `vite.config.js`
  - **public/**
  - **src/**
    - **assets/**
      - `Globe.png`
      - `marker.png`
      - `react.svg`
    - **components/**
      - `Entry.jsx`
      - `Header.jsx`
    - `data.js`
    - `index.css`
    - `main.jsx`


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/scrimba-react-travel-journal.git
cd scrimba-react-travel-journal
```

2. Install the dependencies

```sh
npm install
```

** Running the Application **
To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and you can view the application in your browser at `http://localhost:5175/`

### Building the Application
To build the appication for production, run:

```sh
npm run build
```

The built files will be output to the `dist` directory.

### Linting the Code
To lint the code using ESLint, run:

```sh
npm run lint
```

## Project Details
### Components
- `Header.jsx`: Displays the header of the application with globe icon and title
- `Entry.jsx`: Displays individual travel journal entries with images, titles, countries, dates, and descriptions.

### Data
- `data.js`: Contains the data for the travel journal entries.

### Styles
- `index.css`: Contains the CSS styles for the application.

### Assets
- `Globe.png`: Icon used in the header. 
- `marker.png`: Icon used in the journal entries.
