import {Component} from 'react'; 
import style from './ClassComponent.module.css';
import {randomNumber} from '../../util/random';
// генерируем задуманое число


// * Классовый компонент
export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.min = Number(props.min);
    this.max = Number(props.max);
    this.state = {
      result: 'Результат',
      number: randomNumber(this.min, this.max),
      userNumber: '',
      newgame: false,
    };
    // console.log('this.state: ', this.state);
  }


  handleSubmit = e => {
    e.preventDefault();
    const input = e.target.userNumber;
    // const input = e.target[0];
    // this.setState({
    //   userNumber: input.value,
    // });

    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: `Введите целое число от ${this.min} до ${this.max}`,
        }
      }
      
      if (state.userNumber < this.min) {
        return {
          result: `Число должно быть больше ${this.min}`,
        }
      }
      
      if (state.userNumber > this.max) {
        return {
          result: `Число должно быть меньше чем ${this.max}`,
        };
      }
      
      if (Number(state.userNumber) === Number(state.number)) {
        return {
          result: `Угадал, угадал:) \nВаше число ${state.userNumber}`,
          newgame: true, // перезапуск игры
        };
      } 
      
      if (state.userNumber > state.number) {
        return {
          result: `Ваше число ${state.userNumber} БОЛЬШЕ загаданого`,
        }
      }
      
      if (state.userNumber < state.number) {
        return {
          result: `Ваше число ${state.userNumber} меньше загаданого`,
        }
      }
    }); // setState

    // после submit очищаем форму
    input.value = '';
  }


  handleChange = e => {
    const input = e.target;
    this.setState({
      userNumber: input.value,
    });
  }


  handleReset = e => {
    this.setState({
      result: 'Новая игра',
      number: randomNumber(this.min, this.max),
      userNumber: '',
      newgame: false, // возвращаем в исходное состояние
    });
    e.target.userNumber.value = ''; // clear
  }


  render() {
    return (
      <div className={style.game}>
        <p
          className={style.result}
          title={this.state.newgame ?
            'Нажмите кнопку "Сыграть ещё"' :
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
