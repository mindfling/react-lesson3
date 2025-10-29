import React from 'react';
import style from './Button.module.css';

export const Button = props => {
  console.log('Button loaded');

  return (
    <>
      <div className={style.container} title={props.title}>
        {props.children}
      </div>
    </>
  )
}
