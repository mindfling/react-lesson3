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
      result: "Результат",
      number: this.randomNumber(this.min, this.max),
      userNumber: "",
      newgame: false,
    };
    console.log("this.state: ", this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target[0];
    this.setState({
      userNumber: input.value,
    });
    // console.log(this.state);

    // todo отрабатываем варианты загаданного угаданного числа
    if (!this.state.userNumber) {
      console.log(`Введите целое число`);
      this.setState({
        result: `Введите целое число`,
      });
      return;
    }

    if (+this.state.number === +this.state.userNumber) {
      console.log(`Угадал число ${this.state.number}`);
      this.setState({
        result: `Угадал, угадал!!!\nВаше число ${this.state.userNumber}`,
      });
      // alert(`Всё заканчиваем!\nУгадал число ${this.state.number}\nПОЗДРАВЛЯЕМ`);
      input.value = "";
      this.setState({
        newgame: true,
      });
    } else {
      console.log("ааа не угадал");

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
    input.value = "";
  }

  handleChange(e) {
    const input = e.target;
    console.log("input value", input.value);
    this.setState({
      userNumber: e.target.value,
    });
    console.log(this.state);
  }

  handleReset(e) {
    // todo create button reset "Сыграть ещё"
    console.log("form reset", e);
    e.target[0].value = "";
    this.setState({
      number: randomNumber(this.min, this.max),
      newgame: false,
    });
  }

  guessButton = () => {
    return (
      <>
        <button className={style.btn} type="submit" title="Отправить форму">
          Угадать
        </button>
      </>
    );
  };

  newgameButton = () => {
    if (this.state.newgame) {
      return (
        <button
          className={style.btn}
          type="reset"
          disabled={this.state.newgame ? true : false}
          title="Очистить форму"
        >
          Сыграть ещё
        </button>
      );
    }
  };

  getDisabled = () => (this.state.newgame ? "disabled" : "");

  render() {
    const empty = "\xa0";
    const html = "&nbsp";
    return (
      <div className={style.game}>
        <p className={style.result}>{`\xa0${this.state.result}`}</p>
        <form
          className={style.form}
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
        >
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>

          <input
            className={style.input}
            type="number"
            id="user_number"
            name="inputnumber"
            disabled={this.state.newgame ? true : false}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />

          {this.guessButton()}

          {this.newgameButton()}
        </form>
      </div>
    );
  }
}
