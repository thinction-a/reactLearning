import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunc from './EventPracticeFunc';
import ValidationSample from './ValidationSample';
import CreateRef from './CreateRef';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

import React, { Component } from 'react';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    )
  }
}

export default App;

{/* class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {this.scrollBox=ref}} />
        <button onClick={() => {this.scrollBox.scrollToBottom()}}>맨 밑으로</button>
        <IterationSample />
      </div>
    );
  }
}

export default App; */}

{/* const App = () => {
  return (
    <><ScrollBox ref={(ref) => {this.scrollBox=ref}} />
    <button onClick={() => {this.scrollBox.scrollToBottom}}>맨 밑으로</button>
    <MyComponent name={'thirdParty'} favoriteColor={'Purple'}>React</MyComponent>
    <Counter />
    <Say />
    <EventPractice />
  <EventPracticeFunc />
    <ValidationSample />
    <ScrollBox ref={(ref) => this.scrollBox=ref} />
    <button onClick={() => {this.scrollBox.scrollToBottom}}>맨 밑으로</button>
    </>
  );
}

export default App; */}
