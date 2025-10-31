import React, {Component} from 'react';
import style from './ClassComponent.module.css';

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 1,
      max: 10,
      number: Math.floor(Math.random() * this.state.max - this.state.min) +
        this.state.max,
      userNumber: ' ',
    };
  }

  handleSubmit(e) {
    console.log('form submit target: ', e.target);
    this.setState({
      number: 12345,
      result: 'Щас результат',
    });
  }

  handleChange(e) {
    console.log('input change', e);
    console.log('input target', e.target);
    console.log('input value', e.target.value);
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
        <p className={style.result}>{`результат ${this.state.userNumber}`}</p>
        <form
          className={style.form}
          onSubmit={(e) => {
            this.handleSubmit(e);
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
            name="userNumber"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />

          <button className={style.btn} type="submit">
            Угадать
          </button>

          <button className={style.btn} type="reset">
            Очистить
          </button>
        </form>
      </div>
    );
  }
}
