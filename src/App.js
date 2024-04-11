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
  
// changeNumbers = () => {
//   const numbers = [...this.state.numbers];
//   const int = {...numbers[0]};
//   int.num = this.getRandomInt(100);
  //   int.number = int.num;
  //   numbers[0] = int;
  //   this.setState({numbers});
  //   console.log(numbers[0]);
  // }

  changeNumbers = () => {
    const numbers = [...this.state.numbers];
    const generatedNumbers = new Set(); // Создаем пустой набор для отслеживания уже сгенерированных чисел
  
    // Заменяем значения number на уникальные случайные числа и обновляем массив
    const updatedNumbers = numbers.map(item => {
      const newItem = {...item};
      let randomNumber;
      do {
        randomNumber = this.getRandomInt(100); // Генерируем случайное число
      } while (generatedNumbers.has(randomNumber)); // Проверяем, было ли уже сгенерировано такое число
      generatedNumbers.add(randomNumber); // Добавляем сгенерированное число в набор
      newItem.number = randomNumber; // Присваиваем сгенерированное число свойству number
      return newItem;
    });
  
    // Устанавливаем новое состояние компонента с измененным массивом updatedNumbers
    updatedNumbers.sort((a, b) => a.number - b.number);
    this.setState({numbers: updatedNumbers});
  
    // Выводим в консоль новое значение свойства number для всех элементов массива updatedNumbers
    updatedNumbers.forEach(item => {
      console.log(item.number);
    });
  }
  
  


  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  render () {
    // console.log(this.numbers);
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
