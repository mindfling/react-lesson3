---
to: <%= absPath %>/<%= component_name %>.jsx
---
/* eslint-disable react/prop-types */
/* eslint-disable */
import React, { Component } from 'react';
import style from './<%= component_name %>.module.css';

export class <%= component_name %> extends Component {
  constructor(props) {
    super(props);
    console.log('class <%= component_name %> Component loaded');

    this.state = {
      number: 5,
    }
  }

  handle = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log('handle target', target);

    this.setState((state, props) => {
      return {
        number: Math.random(),
      }
    }, () => {
      console.log('handle update', this.state);
    })
  }

  render() {
    console.log('render class <%= component_name %> Compontent');
    return (
      <>
        <div className={style.container}>
          {props.children}
        </div>
      </>
    );
  }
};
