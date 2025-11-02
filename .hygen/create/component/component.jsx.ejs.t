---
to: <%= absPath %>/<%= component_name %>.jsx
---
/* eslint-disable react/prop-types */
/* eslint-disable */
import React from 'react';
import style from './<%= component_name %>.module.css';

export const <%= component_name %> = (props) => {
<% if (isFunctional) { %>  console.log('Functional <%= component_name %> loaded');<% } %>
<% if (isClass) { %>  console.log('Class <%= component_name %> loaded');<% } %>
  return (
    <>
      <div className={style.container} title={props.title}>
        {props.children}
      </div>
    </>
  );
};
