---
to: <%= absPath %>/<%= component_name %>.jsx
---
/* eslint-disable */
// import React from 'react';
import style from './<%= component_name %>.module.css';
import PropTypes from 'prop-types';


const handle = (e) => {
  const number = Math.random();
  return number;
};

export const <%= component_name %> = (props) => {
  console.log('Functional <%= component_name %> loaded');
  const count = props.min;

  return (
    <>
      <div className={style.<%= lower_name %>}>
        <h2><%= lower_name %> title</h2>
        <button
          className={style.btn}
          onClick={handle}
        >
          click {count}
        </button>
      </div>
    </>
  );
};


// props validation
<%= component_name %>.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
