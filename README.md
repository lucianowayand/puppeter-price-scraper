## Overview
This repository contains a web scraper that uses Puppeteer to scrape a page on the web and return a sorted list of products. The scraper has one endpoint, which when called in the GET '/' route, returns the array of products ordered by price.

## Getting Started
To get started, clone the repository and install the dependencies by running:
```npm install```

To run the server, use the command:
```npm start```

This will start the server at http://localhost:3333

## Endpoints
The only endpoint available is the GET '/' route, which returns the array of products ordered by price.

### Technologies
* Node.js
* TypeScript
* Express
* Puppeteer
* Nodemon

### Dependencies
* @types/express
* body-parser
* express
* nodemon
* puppeteer
* typescript
