# Spendi - Budget Tracker With Voice Assistant

## Live Demo

https://spendi.netlify.app/

## Video Demo

https://www.youtube.com/watch?v=A0PVJAPZKF8

![Spendi App GIF](https://raw.githubusercontent.com/willtrinh/spendi/master/src/assets/Spendi.gif)

## About

- _Spendi_ is a budget tracker that allows users to input their budget with ease using their own microphone.
- My inspiration for the app was to remove the hassle of having the users manually filling out different fields for their spending.

![Spendi App](https://raw.githubusercontent.com/willtrinh/spendi/master/src/assets/Spendi.png)

## Tech Stack

- React
- Node.js
- Express
- Speechly API
- Chart.js

## Getting Started

To run the app on your local machine open your terminal follow the steps below:

```

git clone https://github.com/willtrinh/spendi.git

cd into the recently cloned directory

npm install

npm start

Open http://localhost:3000 to view it in the browser.
```

## User Stories

- User should be able to `manually` add new transaction by filling in their income and expense in the form.
- User should be able to `automatically` add new transaction by using their microphone.
- User should be able to delete any specific transaction.
- User should be able to see changes to their budget reflected on either income or expense doughnut chart.

## Future Scope

- User should be able to `automatically` delete any specific transaction.
- User should be able to `manually` search for any transaction.
- User should be able to `automatically` search for any transaction.

## Available scripts

### `npm install`

Install required dependencies to run the app

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
