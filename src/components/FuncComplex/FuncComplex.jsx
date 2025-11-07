/* eslint-disable object-curly-spacing */
/* eslint-disable no-unused-vars */
// import React from 'react';
import { useState } from 'react';
import style from './FuncComplex.module.css';
import PropTypes from 'prop-types';
import { randomCeil } from '../../util/random';


const handleSubmit = (e) => {
  const number = e.target.userNumber.value;
  return number;
};

const handleChange = (e) => {
  const number = e.target.userNumber.value;
  return number;
};

const handleReset = (e) => {
  const number = randomCeil(1, 11);
  return number;
};

export const FuncComplex = (props) => {
  const {min, max} = props;
  console.log('Functional FuncComplex loaded');

  // * useState обычный раздельный подход в состояниях
  // todo complex props
  const [userNumber, setUserNumber] = useState('');
  const [count, setCount] = useState(0);
  const [result, setResult] = useState('Результат');
  const [randomNumber, setRandomNumber] = useState(randomCeil(min, max));
  const [newgame, setNewgame] = useState(false);

  return (
    <>
      <div className={style.game}>
        <pre
          className={style.result}
          title={
            newgame ?
              'Нажмите кнопку "Сыграть ещё"' :
              `например попробуйте число ${randomNumber}`
          }
        >
          {result}
        </pre>
        <form
          className={style.form}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <label className={style.label} htmlFor="user_number">
            Попыток {count} and {randomNumber}
          </label>

          <input
            className={style.input}
            autoFocus={true}
            type="number"
            id="user_number"
            name="userNumber"
            disabled={newgame}
            onChange={handleChange}
          />

          <button
            className={style.btn}
            type="submit"
            disabled={newgame}
            title={!newgame ? 'Отправить форму' : 'Кнопка деактивирована'}
          >
            Угадать
          </button>

          {newgame ? (
            <button
              className={style.btn}
              type="reset"
              disabled={!newgame}
              title={
                newgame ?
                  'Очистить форму и начать игру заново' :
                  'Поле деактивировано'
              }
            >
              Сыграть ещё
            </button>
          ) : (
            ''
          )}
        </form>
      </div>
    </>
  );
};


// props validation
FuncComplex.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
