## 5 Day Weather Forecast

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

There are 3 main areas to consider:

1. Improved testing - a full integration testing suite, using webdriver.io and cucumber or yadda. In addition, add code coverage and improve unit testing. The components are reasonably well tested, but I ran out of time to TDD a fair amount of the redux code.
2. Improve the UX. At the moment, it is very basic. For example, to show the hour breakdown for each day, you need to click the day row, but there is little indication that that is possible. It's also very monochrome.
3. Add new functionality, such as allowing the user to select the location, and change the units from metric to imperial, or refresh the data on a timer, rather than forcing the user to press refresh.
