/* eslint-disable  */
import React, {Component} from 'react';
import style from './ClassComponent.module.css';

// генерируем задуманое число
const randomNumber = (min, max) => {
  const res = Math.floor(Math.random() * (max - min + 1)) + min;
  return res;
};

// * Классовый компонент
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
      newgame: false,
    };
    console.log('this.state: ', this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = e.target[0];
    this.setState({
      userNumber: input.value,
    });

    // проверка на пустое поле
    if (!this.state.userNumber) {
      this.setState({
        result: `Введите целое число от ${this.min} до ${this.max}`,
      });
      return;
    }

    if (+this.state.number === +this.state.userNumber) {
      this.setState({
        result: `Угадал, угадал:) \nВаше число ${this.state.userNumber}`,
        newgame: true,
      });
    } else {
      if (this.state.userNumber > this.state.number) {
        this.setState({
          result: `Загаданое вами число ${this.state.userNumber} БОЛЬШЕ`,
        });
      }

      if (this.state.userNumber < this.state.number) {
        this.setState({
          result: `Загаданое вами число ${this.state.userNumber} меньше`,
        });
      }
    }

    input.value = ''; // очистка поля
  }

  handleChange(e) {
    const input = e.target;
    this.setState({
      userNumber: input.value,
    });
  }

  handleReset(e) {
    e.target[0].value = '';
    this.setState({
      result: 'Новая игра',
      number: randomNumber(this.min, this.max),
      userNumber: '',
      newgame: false,
    });
  }


  render() {
    return (
      <div className={style.game}>
        <p
          className={style.result}
          title={this.state.newgame ?
            'Нажмите кнопку \"Сыграть ещё\"' :
            `например попробуйте число ${this.state.number}`}
        >
          {this.state.result}
        </p>
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
            disabled={this.state.newgame}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />

          <button
            className={style.btn}
            type="submit"
            disabled={this.state.newgame}
            title={!this.state.newgame ?
              'Отправить форму' :
              'Кнопка деактивирована'}
          >
            Угадать
          </button>

          {this.state.newgame ? (
            <button
              className={style.btn}
              type="reset"
              disabled={!this.state.newgame}
              title={this.state.newgame ?
                'Очистить форму и начать игру заново' :
                'Полне деактивировано'}

            >
              Сыграть ещё
            </button>
          ) : (
            ''
          )}
        </form>
      </div>
    );
  }
}
