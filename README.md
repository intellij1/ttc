# Top Ten Chart

The application will display Top Ten Song of the week. Song -preview clip can also be played. 
Application is using following  apple api for fetching the top ten song . 
https://itunes.apple.com/us/rss/topsongs/json"

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.js 

### Installation

Steps for Installing , building and running  Application.


```
npm install
npm run build
npm start  - It will run the application on web-pack dev server for development.
```


## Running the tests

jasmine and karma Testing framework is used for running  the automated tests for  application.

steps to run tests

```
npm test
```

## Deployment

After building the application by using npm run build command , dist folder will contain compiled js and index.html that can be deployed in any live webserver.
