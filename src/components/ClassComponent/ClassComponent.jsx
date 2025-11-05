import {Component} from 'react'; 
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';
import { randomCeil, randomFloor } from '../../util/random';


// * Классовый компонент
export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.min = Number(props.min);
    this.max = Number(props.max);
    this.state = {
      result: 'Результат',
      randomNumber: randomCeil(this.min, this.max),
      userNumber: '',
      newgame: false,
      count: 0,
    };
    console.log('this.state: ', this.state);
  }


  handleSubmit = e => {
    e.preventDefault();
    const input = e.target.userNumber;

    this.setState(state => {
      if (!state.userNumber || isNaN(state.userNumber) || !isFinite(state.userNumber)) {
        return {
          result: `Введите целое число от ${this.min} до ${this.max}`,
        }
      }
      
      if (state.userNumber < this.min) {
        return {
          result: `Ваше число должно быть больше ${this.min}`,
          count: state.count + 1,
        }
      }
      
      if (state.userNumber > this.max) {
        return {
          result: `Ваше число должно быть меньше чем ${this.max}`,
          count: state.count + 1,
        };
      }
      
      if (state.userNumber > state.randomNumber) {
        return {
          count: state.count + 1,
          result: `Ваше число ${state.userNumber} БОЛЬШЕ загаданого`,
        }
      }
      
      if (state.userNumber < state.randomNumber) {
        return {
          count: state.count + 1,
          result: `Ваше число ${state.userNumber} меньше загаданого`,
        }
      }
    
      if (Number(state.userNumber) === Number(state.randomNumber)) {
        const counted = state.count + 1;
        return {
          count: counted,
          newgame: true, // перезапуск игры
          result: `Ваше число ${state.userNumber}\nУгадал! Угадал за попыток ${counted}`,
        };
      } 
    }, () => {
      this.state.userNumber = '';
      e.target.userNumber.focus(); // make focus on input
    }); // setState

    // после submit очищаем форму
    input.value = '';
  }


  handleChange = e => {
    const input = e.target;
    this.setState((state, props) => ({
      userNumber: input.value,
    }), () => {
      // console.log(this.state);
    });
  }


  handleReset = e => {
    this.setState({
      result: 'Новая игра',
      randomNumber: randomCeil(this.min, this.max),
      userNumber: '',
      newgame: false, // возвращаем в исходное состояние
      count: 0,
    }, () => {
      // console.log(this.state);
      e.target.userNumber.focus(); // make focus on input
    });
    e.target.userNumber.value = ''; // clear
  }


  render() {
    return (
      <div className={style.game}>
        <pre
          className={style.result}
          title={this.state.newgame ?
            'Нажмите кнопку "Сыграть ещё"' :
            `например попробуйте число ${this.state.randomNumber}`}
        >
          {this.state.result}
        </pre>
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
            autoFocus={true}
            type="number"
            id="user_number"
            name="userNumber"
            disabled={this.state.newgame}
            onChange={this.handleChange}
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
                'Поле деактивировано'}
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


ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
}
