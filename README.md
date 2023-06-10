This is a React app for a typing game. 
To run the code 
* npm i (to install all the node modules)
* npm run start (to run the app over local browser on localhost 3000)


The app has two main components:

1. Home, which is shown before the game starts and has a 'Start' button. Clicking on the button starts the game.
2. TestContainer, which displays the selected paragraph, and allows the user to type on it within a set time limit of 60 seconds. The user can also see how many words, characters, and mistakes they made while typing.

The app first imports necessary modules like React, a css file, and various images. There is also a helper function included - testDetailsCalculator, which calculates and updates the users’ details while typing e.g number of words, characters, and mistakes made.

defaultState holds the initial state of the App component, which is merged with the constructor's state to initialize various state variables in the App component.

componentDidMount is called when the App component is being mounted, and it sets a random paragraph from the typingTestData array as the currently selected paragraph.

handleKeyPress is called every time the user types a character, and it updates the detailsData state object with the latest details - number of words, characters and mistakes - based on the user input.

The startAgain function resets the state variables to their default values e.g set the selectedParagraph to a new random paragraph.

startTimer starts a timer and updates the component state every 1 second. It sets the timerStarted to true, and updates the timeRemaining state variable with timeRemaining - 1.

handleStartClick is called when onClick on the Start button on the Home component is triggered. It sets the showTest state variable to true, which will render the TestContainer component that allows the user to start typing.

render checks whether the showTest state variable is true. If it is, the TestContainer component is displayed. Else, Home component is displayed, which has the Start button.

Finally, the App component is exported. At the top level it handles the state and rendering of all parts of the application.


few images of the output:-
![image](https://github.com/riva211/chaabi-riva/assets/77054074/8119dd91-92fd-44e9-860a-e7be126aec20)
![image](https://github.com/riva211/chaabi-riva/assets/77054074/e9ba2b71-5358-4d4a-a3bc-24d50bb78e14)
![image](https://github.com/riva211/chaabi-riva/assets/77054074/23cc9a39-46e6-4e7e-b31b-12554af37484)

