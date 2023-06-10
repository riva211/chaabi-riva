import React from 'react';
import './App.css';
import base from '../../../src/assests/base.png';
import man from '../../../src/assests/man.gif';
import { TestContainer } from "./../TestContainer/TestContainer";
import { typingTestData } from './../../data/source'
import { randomElementSelector } from '../../helper/randomSelector';
import { testDetailsCalculator } from '../../helper/testDetailsCalculator';

const defaultState = {
    timerStarted: false,
    timeRemaining: 60,
    detailsData: {
        words: 0,
        characters: 0,
        mistakes: 0,
    },
    selectedParagraph: '',
};

const Home = ({ onStartClick }) => {
    return (
       
        <div className="flex bg-black h-screen justify-center items-center relative">
        <div className="absolute bottom-0">
          <img src={base} alt='' />
        </div>
        <img src={man} alt='' className='h-40 left-0 mb-10 bottom-8 sm:h-60 lg:h-80 absolute' />
        <div className="absolute flex flex-col justify-center items-center w-full">
  <span className='text-white heading text-7xl shadow-yellow-300 p-5 border-green-300 border rounded-xl shadow-2xl mb-24 font-extrabold justify-center' >Typing Game</span>
  <button className='w-52 h-20 bg-gradient-to-r from-yellow-700 via-green-500 to-yellow-500 text-blue-700 font-bold border-2 border-white rounded-2xl shadow-xl text-3xl mt-4 hover:border-spacing-2 hover:shadow-2xl hover:shadow-white focus:outline-none' onClick={onStartClick}>Start </button>
</div>

      </div>
      
    );
}

class App extends React.Component {
    constructor () {
        super();

        this.state = {
            ...defaultState,
            showTest: false,
        }
    }

    componentDidMount = () => {
        console.log('Selecting Paragraph...');
        this.setState({
            ...this.state,
            selectedParagraph: randomElementSelector(typingTestData),
            showTest: false,
        })
    }

    handleKeyPress = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer()

        const updatedDetails = testDetailsCalculator(this.state.selectedParagraph, inputValue)
        console.log('Updated Details: ', updatedDetails)

        this.setState({ detailsData: updatedDetails })
    }

    startAgain = () => this.setState({ ...defaultState, selectedParagraph: randomElementSelector(typingTestData)})

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                this.setState({ timeRemaining: (this.state.timeRemaining - 1) })
            } else {
                clearInterval(timer)
            }
        }, 1000)
    }

    handleStartClick = () => {
        this.setState({
            ...defaultState,
            selectedParagraph: randomElementSelector(typingTestData),
            showTest: true,
        })
    };

    render() {
        if (!this.state.showTest) {
            return <Home onStartClick={this.handleStartClick} />
        }

        return (
            <div className="app-container bg-black  overflow-hidden ">
<h1 className= ' inn  justify-center flex font-extrabold text-yellow-200' ><span >Typing</span><span>Test</span></h1>                <div className="test-container-main">
                    <TestContainer
                        handleKeyPress={this.handleKeyPress}
                        timeRemaining={this.state.timeRemaining}
                        timerStarted={this.state.timerStarted}
                        startAgain={this.startAgain}
                        words={this.state.detailsData.words}
                        characters={this.state.detailsData.characters}
                        mistakes={this.state.detailsData.mistakes}
                        selectedParagraph={this.state.selectedParagraph}
                    />
                </div>
            </div>
        )
    }
}

export default App;