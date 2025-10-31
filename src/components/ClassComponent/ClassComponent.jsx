import React, {Component} from 'react';
import style from './ClassComponent.module.css';

export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      number: 55,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit', this.state.number);
  }


  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.number}</p>
        <form className={style.form} onSubmit={(e) => this.handleSubmit(e)}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input className={style.input} type="number" id="user_number" />
          <button className={style.btn} type='submit'>Угадать</button>
        </form>
      </div>
    );
  }
}
