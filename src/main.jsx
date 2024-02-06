// Import the React library
import React from 'react';

// Import the createRoot function from the react-dom/client module
import { createRoot } from 'react-dom/client';

// Import the App component from the App.jsx file located in the components/App directory
import App from './components/App/App';

// Import the CSS styles from the index.scss file
import './styles/index.scss';

// Create an entry point for the React application by retrieving the element with the ID 'root' in the DOM
const root = createRoot(document.getElementById('root'));

// Render the App component into the entry point of the application
root.render(<App />);
