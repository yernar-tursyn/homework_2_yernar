import { Component } from 'react';
import './App.css';
import Circle from './component/Circle/Circle';


class App extends Component {
  
  state = {
    numbers: [
      {number: 5},
      {number: 11},
      {number: 16},
      {number: 23},
      {number: 32}
    ]
}

  changeNumbers = () => {
    const numbers = [...this.state.numbers];
    const generatedNumbers = new Set(); 
    const updatedNumbers = numbers.map(item => {
      const newItem = {...item};
      let randomNumber;
      do {
        randomNumber = this.getRandomInt(100);
      } while (generatedNumbers.has(randomNumber)); 
      generatedNumbers.add(randomNumber); 
      newItem.number = randomNumber; 
      return newItem;
    });
  
    updatedNumbers.sort((a, b) => a.number - b.number);
    this.setState({numbers: updatedNumbers});
  
    updatedNumbers.forEach(item => {
      console.log(item.number);
    });
  }
  

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.changeNumbers}>New numbers</button>
        <Circle num = {this.state.numbers[0].number}/>
        <Circle num = {this.state.numbers[1].number}/>
        <Circle num = {this.state.numbers[2].number}/>
        <Circle num = {this.state.numbers[3].number}/>
        <Circle num = {this.state.numbers[4].number}/>
    
      </div>
    );
  }
}

export default App;
