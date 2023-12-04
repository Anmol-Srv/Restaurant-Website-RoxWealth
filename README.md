# RoxWealth Restaurant Website

## Project Overview
Welcome to the RoxWealth Restaurant Website, a visually captivating frontend application designed to showcase the rich and diverse offerings of a restaurant. Featuring a modern and engaging user interface, this application provides a delightful browsing experience, highlighting menu items, chef details, and upcoming events through API calls to a dummy backend.

## Installation and Setup

### Prerequisites
- Node.js (Version 12.0 or later)
- npm (Node Package Manager)

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/Anmol-Srv/Restaurant-Website-RoxWealth

# Navigate to the project directory
cd Restaurant-Website-RoxWealth

# Install dependencies
npm install

# Start the application
npm start

# The website will be available at
http://localhost:3000
```
## Components Description

### `src`
- **App.js**: The central React component orchestrating the entire application's layout and functionality.
- **index.js**: The entry point of the React application, where the root component is rendered into the DOM.
- **components**: A directory housing all the individual, reusable components of the website, including:
- **Header**: The top navigation bar, providing links to different sections of the website.
- **FoodItemSlider**: A dynamic carousel slider showcasing the restaurant's food items.
- **LandingPage**: The primary landing page component, welcoming visitors with engaging visuals.
- **ChefDetail**: A component dedicated to displaying the chef's biography and culinary expertise.
- **Awards**: Highlights the accolades and recognitions received by the restaurant.
- **EventsSection**: Showcases upcoming events and special occasions at the restaurant.
- **Footer**: The footer section, containing contact information and additional links.
- **assets**: Includes images, logos, and other static files utilized across the website.

### `public`
- This directory contains the public assets such as the favicon, the main HTML file (`index.html`), and other resources like the manifest and `robots.txt` for web standards.

### `restaurantData.json`
- A mock JSON file simulating backend data, including menu items, chef details, and event information.

### `server.js`
- A simple Node.js server script for serving the React app and handling API requests in a development environment.

## REST API Documentation
The server exposes various endpoints to retrieve information about the restaurant, including details about the chef, awards, events, menu, and reviews.

### Base URL
Assuming the server runs locally, the base URL for the API would be:
http://localhost:3000/api

### Endpoints

#### Get Restaurant Information
- **Endpoint**: `/api/restaurant`
- **Method**: `GET`
- **Description**: Retrieves general information about the restaurant, including name, location, ambiance, and sustainability practices.
- **Response Example**:
  ```json
  {
    "name": "Restaurant Name",
    "location": "Restaurant Location",
    "ambiance": "Description of the ambiance",
	  "chef": "Description about the chef of the Restaurant",
	  "awards": "Awards and achievements of the chef",
    "sustainability": "Sustainability practices information",
		"events": "Description and dates for the upcoming events",
		"online_presence": "Social media handles of the restaurants",
		"menu": "Detailed description about the menu and dishes"
  }

## Usage and Examples
- **Viewing the Menu**: Visitors can explore the food item slider to browse the menu.
- **Discovering Chef and Awards**: Detailed information about the chef and the restaurant's awards are prominently displayed.
- **Learning About Events**: The Events Section keeps visitors informed about upcoming events and special dining experiences.

## License
This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for full details.
