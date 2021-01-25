# Onyx Technical Test

To address the requirements in the test I mainly used these two online resources, with a combination of reference documentation on the React Redux site and some quick internet searches.

The first here to help scaffold the app :

-   https://adriancelczynski.medium.com/react-with-typescript-starter-kit-without-create-react-app-including-webpack-eslint-bef225c35ffa

The second to help set up testing using React Testing Library:

-   https://medium.com/javascript-in-plain-english/the-practical-guide-to-start-react-testing-library-with-typescript-d386804a018

The app was generated from a GitHub template project (see below for the original readme). I started by removing some unwanted files. I removed the eslint configuration as I was going to add something more basic later on but ran out of time.

I then added redux and redux-thunk packages and configured the project to use some basic CSS. For a production app, I'd look at a webpack bundling and minification plug-in for CSS, but in this instance I ran out of time.

Next steps were to configure the basic store, reducer and action creators. I started with stubbing the fetch wallet async action to get an end-to-end redux-connected component working, then added in the fetch service and refactored the reducer.

When I examined the data, I noticed there were multiple currencies returned, so I decided to display each one with separate controls to manage the balances.

Future considerations:

-   Add eslint
-   Add react-router for navigating routes (if needed)
-   A nicer UI, perhaps using Material UI
-   Local storage for maintaining the account balance
-   Better error handling
-   Production support for CSS bundling/minification
-   Consider using webpack merge for dev/prod webpack configurations
-   Review the general layout of code and types

# react-typescript-starter

###### Clean React + TypeScript starter, without usage of create-react-app ⚛

Configured with:

-   Webpack
-   ESLint
-   Prettier

## Read post on medium:

https://medium.com/@adriancelczynski/react-with-typescript-starter-kit-without-create-react-app-including-webpack-eslint-bef225c35ffa
