import React from 'react';
import style from './BrainDraint.module.css';

export const BrainDraint = props => {
  console.log('BrainDraint');

  return (
    <>
      <div className={style.container} title={props.title}>
        {props.children}
      </div>
    </>
  )
}
