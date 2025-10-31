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
    // eslint-disable-next-line react/prop-types
    this.min = Number(props.min);
    // eslint-disable-next-line
    this.max = Number(props.max);
    this.state = {
      result: 'Результат',
      number: randomNumber(this.min, this.max),
      userNumber: '',
    };
    console.log(' this.state: ', this.state);
  }

  handleSubmit(e) {
    const input = e.target.inputnumber;
    console.log('input: ', input);
    // console.log('form submit target: ', e.target);
    // console.log('form submit value: ', e.target[0].value);
    // console.log('form submit value: ', e.target['inputnumber'].value);
    // console.log('form submit value: ', e.target.inputnumber.value);
    this.setState({
      userNumber: input.value,
      // userNumber: e.target[0].value,
    });
    console.log(this.state);

    // todo отрабатываем варианты загаданного угаданного числа
    // eslint-disable-next-line
    if (this.state.number == this.state.userNumber) {
      console.log(`Угадал число ${this.state.number}`);
      alert(`Всё заканчиваем!\nУгадал число ${this.state.number}\nПОЗДРАВЛЯЕМ`);
      input.value = '';
    } else {
      console.log('ааа не угадал');
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
    console.log('form reset', e);
  }


  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>a&nbsp;{`\xa0${this.state.result}`}</p>
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
