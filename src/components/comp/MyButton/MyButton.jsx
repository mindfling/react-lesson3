import React from 'react';
import style from './MyButton.module.css';

export const BrainDraint = props => {
  console.log('MyButton loaded');

  return (
    <>
      <div className={style.container} title={props.title}>
        {props.children}
      </div>
    </>
  )
}
