import React from 'react';
import style from './MaLone.module.css';

export const MaLone = props => {
  return (
    <>
      <div className={style.container} title={props.title}>
        {props.children}
      </div>
    </>
  )
}
