# Magic Cards

A simple card deck creator built with React

Available on heroku: https://ibm-code-test.herokuapp.com/

### Getting Started

To get started:

1. Clone from this repo and run 'npm install' from a terminal within the app's root directory
2. The app can be launched locally for development using 'npm start' which will start a webpack dev server
3. To test the application run 'npm test', this will trigger the Jest testing suites to execute in the terminal
4. This application has a couple of hooks to enforce code quality using Husky, commits to Git will trigger a prettier run against the code, push's will run the test suite first and then run an Eslint. If any of these produce issues the process will fail.
5. To build the app for a production release run 'npm run build', the build output 'bundle.js' will be created for desired next deployment actions

### Contact

Any questions contact chaycarnell@gmail.com
