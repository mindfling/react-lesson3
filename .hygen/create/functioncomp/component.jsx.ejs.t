---
to: <%= absPath %>/<%= component_name %>.jsx
---
/* eslint-disable */
// import React from 'react';
import style from './<%= component_name %>.module.css';

export const <%= component_name %> = (props) => {
  console.log('Functional <%= component_name %> loaded');

  return (
    <>
      <div className={style.<%= lower_name %>}>
        {props.children}
      </div>
    </>
  );
};
