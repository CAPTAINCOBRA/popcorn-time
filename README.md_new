This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


In the index.js, we pass store as props and in the App.js, we create a ComponentDidMount method which takes the store passed down from Index.html as props. We then 
subscribe to our store and use forceUpdate method to keep it updated. We pass a dispatch action in componentDidMount to addMovies(which we get from the data file). 

In the render method, we decouple list, favourites and showFavourites from props.store.getState(). We create a const displayMovies that will be used to display 
 either only the favourites or the complete list depending whether showFavourites is true or false.

 In the return method which renders the html, we have a Navbar component at the top. And then we have 2 tabs Movies and favourites. Both have an onChange method defined onClick.
 Using which we navigate between the movies and favourite tabs. 
 
 There is a MovieCard component which takes movie, key(index), dispatch and isFavourite as props. 
 We map the movies on the MovieCard component using the displayMovies which will hold either the complete list or the favourites depending upon the tag which has been
 clicked by the user. 


 In the MovieCard component, import addFavourite and removeFromFavourite actiontypes.
 Define handleFavourite and Unfavourite options for movies. Take the movie out of the prop and dispatch the addFavourite action. Same with unfavourite.
 Add the functionality for favourite and unfavourite button showing depending upon what is clicked when. 

Define variables(Action Types) for ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES and SET_SHOW_FAVOURITES. 
Create Action Creators for all these action types. 

In the Reducer component, import ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES and SET_SHOW_FAVOURITES from ../actions.

Create an initialMovieState with list as empty array, favourites as empty array, and showFavourites set to false. 

Define a reducer function, movies which takes in a state and gives out an action to be carried out on the store.

Define multiple switch cases in the reducer function.
Use the spread operator to copy everything from an array and specofy the thing that has to be changed. 

As a default case, return state(as you got it).


Create another reducer and combine all into 1. 

We use connect function to connect s component to the redux store
Create connect function in App.js and declare what data we want from the store and which component we want to connect to the store.
We pass a afunction as a cllback method inside connect
