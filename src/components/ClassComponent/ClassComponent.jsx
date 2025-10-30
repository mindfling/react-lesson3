import React from 'react';
import style from './ClassComponent.module.css';

// * Классовый компонент
export class ClassComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      result: 4,
      number: 5,
    };
    console.log('constructor ClassComponent');
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // this.state = 32;
    this.setState(32);
  }

  handleClick(e) {
    console.log('click', e);
    console.log('state', this.state.number);
  }

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={(e) => this.handleSubmit(e)}>
          <label className={style.label} htmlFor="user_number">
            Угадай число
          </label>
          <input className={style.input} type="number" id="user_number" />
          <button className={style.btn}
            onClick={this.handleClick}
            title="Press button to guise">
            Угадать
          </button>
        </form>
      </div>
    );
  }
}

