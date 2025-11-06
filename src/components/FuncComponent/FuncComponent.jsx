/* eslint-disable no-unused-vars */
/* eslint-disable */
import React from 'react';
import {useState} from 'react';
import {randomCeil} from '../../util/random';
import style from './FuncComponent.module.css';
import PropTypes from 'prop-types';


/*
 * todo useState
const state = {
  result: 'Результат'
  randomNumber: randomCeil(0, 9), // todo
  userNumber: null,
  newgame: false, // todo
  count: 0,
};
*/

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('submit');
};

const handleChange = (e) => {
  console.log('change');
};

const handleReset = (e) => {
  console.log('reset');
};


export const FuncComponent = ({min, max}) => {
  console.log("Functional FuncComponent loaded");

  // * useState
  const [userNumber, setUserNumber] = useState("");
  const [result, setResult] = useState("Результат");
  const [randomNumber, setRandomNumber] = useState(randomCeil(min, max));
  const [newgame, setNewgame] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", count);

    setCount((count) => count + 1);

    setResult(() => {
      if (!userNumber || isNaN(userNumber) || !isFinite(userNumber)) {
        return `Введите целое число от ${min} до ${max}`;
      }

      if (userNumber < min) {
        return `Ваше число должно быть больше ${min}`;
      }

      if (userNumber > max) {
        return `Ваше число должно быть меньше чем ${max}`;
      }

      if (userNumber > randomNumber) {
        return `Ваше число ${userNumber} БОЛЬШЕ загаданого`;
      }

      if (userNumber < randomNumber) {
        return `Ваше число ${userNumber} меньше загаданого`;
      }

      if (Number(userNumber) === Number(randomNumber)) {
        setNewgame(() => true);
        // eslint-disable-next-line max-len
        return `Загаданное число ${userNumber}\nУгадали! Угадал за попыток ${count}`;
      }
    });
  }; // handleSubmit

  const handleChange = (e) => {
    console.log("change");
    console.log(e.target, e.target.value);
    setUserNumber(() => e.target.value);
  };
  
  const handleReset = (e) => {
    console.log("reset");
    setNewgame(() => {
      e.target.userNumber.focus(); // make focus on input // todo
      return false;
    });
    // todo reset
    setRandomNumber(() => {
      const rand = randomCeil(min, max);
      console.log("rand: ", rand);
      setResult(() => `Новая игра и число ${rand}`);
      return rand;
    });

    console.log(e.target);
    console.log(e.target.userNumber);
    e.target.userNumber.value = '';
    e.target.userNumber.focus(); // make focus on input

    setTimeout(() => {
      e.target.userNumber.focus(); // todo async or timeout
      console.log('reset timeout');
    }, 0);
  };

  return (
    <>
      <div className={style.game}>
        <pre
          className={style.result}
          title={
            newgame
              ? 'Нажмите кнопку "Сыграть ещё"'
              : `например попробуйте число ${randomNumber}`
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
            title={!newgame ? "Отправить форму" : "Кнопка деактивирована"}
          >
            Угадать
          </button>

          {newgame ? (
            <button
              className={style.btn}
              type="reset"
              disabled={!newgame}
              title={
                newgame
                  ? "Очистить форму и начать игру заново"
                  : "Поле деактивировано"
              }
            >
              Сыграть ещё
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
};


// props validation
FuncComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
