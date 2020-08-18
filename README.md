# READ ME

## Getting Started

- Have latest verion of Git installed on your machine.
- Have NodeJS >= 12 installed on your machine.
- Clone repository from GitHub.
- Configure `.env` file.
- Run `npm install` in the root directory to install server dependencies.
- Run `npm install` and then `npm run build` in the web-client react project to install dependencies and compile the web app.
- Run `npm start` in the root directory to launch the server.
- View API documentation at /api-docs

## Commands

- `npm start` - starts the server
- `npm run startn` - starts the server using nodemon
- `npm run startd` - starts the server and attaches the debugger
- `npm run startnd` - starts the server using nodemon and attaches the debugger
- `npm run tests` - runs api tests
- `npm run scrape-recipes` - runs scraper and saves all scraped recipes to a .json file
- `npm run scrape-recipes-debug` - runs scraper with debugger and saves all scraped recipes to a .json file

## API Status Codes

| Code |        Status         | Request Method | When To Use?                                                 |
| ---: | :-------------------: | -------------- | ------------------------------------------------------------ |
|  200 |          OK           | GET            | The request has succeeded. Most common response type.        |
|  400 |      Bad Request      | \*             | Request has invalid syntax.                                  |
|  404 |       Not Found       | GET            | Resource not found but may be available again in the future. |
|  429 |   Too Many Requests   | GET            | Too many requests sent to endpoint.                          |
|  500 | Internal Server Error | \*             | Server encountered unexpected condition.                     |

## Coding Style and Idiom

- ES6 (aka ECMAScript 2015) standard
- kebab-case for file, folder, and route names
- PascalCase for classes
- camelCase for everything else
- Routes are the endpoints that the API consumer calls to access data and services
- app.js is the application entry point and contains the application middleware

## Tools

- [SwaggerUI YAML Editor](https://editor.swagger.io/)
- [Manifest Icon Generator](https://realfavicongenerator.net/)
- [Material Palette](https://www.materialpalette.com/)
