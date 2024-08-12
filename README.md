# Brandmark.io Clone - Full Stack Developer Practical Test

This project is a recreation of the front page of [Brandmark.io](https://brandmark.io/), with additional features and customizations. The project is built using ReactJS, Vite, TailwindCSS, and various other modern technologies. 

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Features](#features)
4. [File Structure](#file-structure)
5. [Components Overview](#components-overview)
    - [Instantly Customize & Export](#instantly-customize-export)
    - [Latest Customer Creations](#latest-customer-creations)
    - [Weather Widget](#weather-widget)
    - [Calculator](#calculator)
6. [Environment Variables](#environment-variables)
7. [Installation](#installation)
8. [Running the Project](#running-the-project)
9. [Future Improvements](#future-improvements)
10. [License](#license)

## Project Overview

This project is designed as a part of a Full Stack Developer practical test, which includes recreating the front page of Brandmark.io with additional custom features. The project includes responsive design, a weather widget, a calculator, and more. The aim is to demonstrate skills in ReactJS, TailwindCSS, API integration, and component-based architecture.

## Technologies Used

- **ReactJS**: A JavaScript library for building user interfaces.
- **Vite**: A modern front-end build tool that provides fast, optimized builds.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **OpenWeatherMap API**: For fetching real-time weather data.
- **.env**: To manage environment variables securely.

## Features

- Responsive design compatible with all devices.
- Weather widget that displays current weather using OpenWeatherMap API.
- Calculator widget with both basic and scientific functionalities.
- Component-based architecture for easy scalability and maintenance.
- Environment variable management for secure API key usage.

## File Structure

```
|__public
|   |__images
|   
|
├── src
│   ├── assets              # Static assets like images, fonts, etc.
│   ├── components          # Reusable React components
│   │   ├── Build.jsx
│   │   ├── Calculator.jsx
│   │   ├── ChatBox.jsx
│   │   ├── ChatInterface.jsx
│   │   ├── Creations.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── InstantlyCustomize.jsx
│   │   ├── Logo.jsx
│   │   ├── LogoDesign.jsx
│   │   ├── Logos.jsx
│   │   ├── SideToolbar.jsx
│   │   ├── Slider.jsx
│   │   ├── WeatherWidget.jsx
│   ├── pages               # Different pages of the application
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   ├── Pricing.jsx
│   │   ├── Support.jsx
│   │   ├── Tools.jsx
│   ├── styles 
|   |             # CSS files and Tailwind configurations
│   │────── App.css
│   │────── App.jsx
│   │────── index.css
│   ├── .env                # Environment variables
│   ├── main.jsx            # Main entry point of the React app
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Components Overview

### Instantly Customize & Export

**Path**: `src/components/InstantlyCustomize.jsx`

This component allows users to instantly customize various elements and export the results. It features a modern and intuitive UI, built with ReactJS and styled using TailwindCSS.

**Features:**
- Dynamic customization options.
- Real-time preview of changes.
- Export functionality.

### Latest Customer Creations

**Path**: `src/components/Creations.jsx`

This component showcases the latest creations made by customers. It includes a responsive grid layout, images, and detailed descriptions.

**Features:**
- Grid layout for displaying images.
- Tooltips for additional information.
- Responsive design for various screen sizes.

### Weather Widget

**Path**: `src/components/WeatherWidget.jsx`

This component displays the current weather information based on the user's location, fetched using the OpenWeatherMap API.

**Features:**
- Real-time weather updates.
- Responsive design.
- Supports multiple locations.

### Calculator

**Path**: `src/components/Calculator.jsx`

A versatile calculator that includes basic and scientific functions, built using ReactJS and TailwindCSS.

**Features:**
- Weather widget Updated and Calculator.
- Responsive and interactive UI.

## Environment Variables

The project uses an `.env` file to manage environment variables securely. The `.env` file should include:

```
VITE_WEATHER_API_KEY=your_openweather_api_key
```

Replace `your_openweather_api_key` with your actual API key from OpenWeatherMap.

## Installation

1. **Clone the repository:**

    ```bash
    https://github.com/AviAcharya1/brandmarkClone.git
    cd brandmark-clone
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add your OpenWeatherMap API key.

4. **Run the project:**

    ```bash
    npm run dev
    ```

## Running the Project

Once the installation is complete, you can run the project locally by executing `npm run dev`. The application will be available at `http://localhost:5173`.

## Future Improvements

- Add more customization options in the Instantly Customize component.
- Improve the design and functionality of the Latest Customer Creations section.
- Implement user authentication and authorization.
- Add more scientific features to the calculator.

## License

This project is licensed under the MIT License.
