/* eslint-disable    */
import React, {Component} from 'react';
import style from './ClassComponent.module.css';

// генерируем задуманое число
const randomNumber = (min, max) => {
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(` min ${min} max ${max} => res ${res}`);
  return res;
};

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.min = Number(props.min);
    this.max = Number(props.max);
    this.state = {
      result: 'Результат',
      number: randomNumber(this.min, this.max),
      userNumber: '',
    };
    console.log(' this.state: ', this.state);
  }

  handleSubmit(e) {
    const input = e.target[0];
    this.setState({
      userNumber: input.value,
    });
    console.log(this.state);

    // todo отрабатываем варианты загаданного угаданного числа
    if (this.state.number == this.state.userNumber) {
      console.log(`Угадал число ${this.state.number}`);
      alert(`Всё заканчиваем!\nУгадал число ${this.state.number}\nПОЗДРАВЛЯЕМ`);
      input.value = '';
      return '';
    } else {
      console.log('ааа не угадал');
      if (this.state.userNumber > this.state.number) {
        console.log('Загаданое вами число БОЛЬШЕ');
      }
      if (this.state.userNumber < this.state.number) {
        console.log('Загаданое вами число меньше');
      }
    }
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
    console.log("form reset", e);
  }


  render() {
    const empty = "\xa0";
    const html = "&nbsp";
    return (
      <div className={style.game}>
        <p className={style.result}>{`\xa0${this.state.result}`}</p>
        <form
          className={style.form}
          onSubmit={(e) => {
            this.handleSubmit(e);
            e.preventDefault();
          }}
          onReset={(e) => {
            this.handleReset(e);
            // e.preventDefault();
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
            onChange={(e) => {
              this.handleChange(e);
            }}
          />

          <button className={style.btn} type="submit" title="Отправить форму">
            Угадать
          </button>

          <button className={style.btn} type="reset" title="Очистить форму">
            Очистить
          </button>
        </form>
      </div>
    );
  }
}
