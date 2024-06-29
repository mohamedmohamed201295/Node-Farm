# Node Farm
Learning Node.js by building a farm-to-table web application.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Introduction
Node Farm is a project aimed at learning and implementing Node.js for building a web application that serves farm products information. It includes both server-side and client-side rendering using Node.js and HTML templates.

## Features
- **Overview Page:** Displays a list of farm products with brief information.
- **Product Page:** Detailed view of each farm product.
- **API Endpoint:** Provides JSON data of farm products.
- **Dynamic Templating:** HTML templates rendered dynamically using Node.js.

## Technologies Used
- Node.js
- HTTP module
- File system module (fs)
- URL module
- Nodemon (for development)
- slugify (for generating slugs)

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
This will start the server on `http://localhost:3000`.

## Usage
- Access the application in your web browser at `http://localhost:3000`.
- Navigate through the overview page to see a list of farm products.
- Click on each product to view detailed information on its own page.

## API Endpoints
- **Overview Page (GET): `/` or `/overview`**
  - Renders HTML with all farm product cards.
- **Product Detail Page (GET): `/product?id={id}`**
  - Renders HTML with detailed information of a specific product.
- **API Endpoint (GET): `/api`**
  - Returns JSON data of all farm products.

## License
This project is licensed under the MIT License - see the `LICENSE` file for details.
