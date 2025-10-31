/* eslint-disable    */
import React, {Component} from 'react';
import style from './ClassComponent.module.css';

const randomNumber = (min, max) => {
  // генерируем задуманое число
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  return res;
};

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.randomNumber = randomNumber.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.min = Number(props.min);
    this.max = Number(props.max);
    this.state = {
      result: 'Результат',
      number: this.randomNumber(this.min, this.max),
      userNumber: '',
    };
    console.log('this.state: ', this.state);
  }

  handleSubmit(e) {
    const input = e.target[0];
    this.setState({
      userNumber: input.value,
    });
    console.log(this.state);

    // todo отрабатываем варианты загаданного угаданного числа
    if (+this.state.number === +this.state.userNumber) {
      console.log(`Угадал число ${this.state.number}`);
      this.setState({
        result: `Угадал, угадал!!!\nВаше число ${this.state.userNumber}`,
      });
      alert(`Всё заканчиваем!\nУгадал число ${this.state.number}\nПОЗДРАВЛЯЕМ`);
      input.value = '';
    } else {
      console.log('ааа не угадал');

      if (this.state.userNumber > this.state.number) {
        console.log(`Загаданое вами число ${this.state.userNumber} БОЛЬШЕ`);
        this.setState({
          result: `Загаданое вами число ${this.state.userNumber} БОЛЬШЕ`,
        });
      }
      if (this.state.userNumber < this.state.number) {
        console.log(`Загаданое вами число ${this.state.userNumber} меньше`);
        this.setState({
          result: `Загаданое вами число ${this.state.userNumber} меньше`,
        });
      }
    }

    // todo clear input field
    input.value = '';
  }


  handleChange(e) {
    const input = e.target;
    console.log('input value', input.value);
    this.setState({
      userNumber: e.target.value,
    });
    console.log(this.state);
  }


  handleReset(e) {
    // todo create button reset "Сыграть ещё"
    console.log('form reset', e);
    e.target[0].value = '';
  }


  render() {
    const empty = '\xa0';
    const html = '&nbsp';
    return (
      <div className={style.game}>
        <p className={style.result}>{`\xa0${this.state.result}`}</p>
        <form
          className={style.form}
          onSubmit={e => {
            this.handleSubmit(e);
            e.preventDefault();
          }}
          onReset={e => {
            this.handleReset(e);
            e.preventDefault();
          }}
        >
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>

          <input
            className={style.input}
            type="number"     
            id="user_number"
            name="inputnumber"
            onChange={e => {
              this.handleChange(e);
            }}
          />

          <button className={style.btn} type="submit" title="Отправить форму">
            Угадать
          </button>
          {/*
          <button className={style.btn} type="reset" title="Очистить форму">
            Сыграть ещё
          </button>
          */}
        </form>
      </div>
    );
  }
}
