## 5 Day Weather Forecast

### Prerequisites

An up-to-date node and npm installation.

### Technology

Client-side application, build with Javascript, HTML and CSS, utilising React.js for view rendering, Redux for state management, Radium for CSS and create-react-app for build and run (and Webpack and Babel under the covers). Express.js is used for the server, specifically to allow the site to run on Heroku. Testing is entirely server-side, using Mocha and Enzyme.

### Build

```
npm install
```

### Run

To run on a local machine:

```
npm run develop
```

Then open your browser at ```http://localhost:3000```.

### Build

To build for production:

```
npm run build
```

After building, then production install can be run using:

```
npm start
```

And again, open your browser at ```http://localhost:3000```.

### Testing

To run unit tests:

```
npm test
```

### To Do

There are 4 main areas to improve:

1. Improved testing - a full acceptance testing suite, using webdriver.io and cucumber or yadda. In addition, add code coverage and improve unit testing. The components are reasonably well tested, but I ran out of time to TDD a fair amount of the redux code. In addition, acceptance tests would be useful to ensure that the app matches expectations - for example, what should the rules for summarising the daily weather be?
2. Improve the UX. At the moment, it is very basic. For example, to show the hour breakdown for each day, you need to click the day row, but there is little indication that that is possible. It's also very monochrome.
3. Add new functionality, such as allowing the user to select the location, and change the units from metric to imperial, or refresh the data on a timer, rather than forcing the user to press refresh.
4. Fix any bugs (e.g. take into account daylight savings), and add error handling, 404 support, etc.
