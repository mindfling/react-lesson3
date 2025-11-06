---
to: <%= absPath %>/<%= component_name %>.jsx
---
/* eslint-disable react/prop-types */
/* eslint-disable */
import {Component} from 'react';
import style from './<%= component_name %>.module.css';
import PropTypes from 'prop-types';


export class <%= component_name %> extends Component {
  constructor(props) {
    super(props);
    console.log('class <%= component_name %> Component loaded');
    this.state = {
      number: this.props.min,
      data: null,
    },
    console.log(this.state);
  }

  handle(e) {
    e.preventDefault();
    const target = e.target;
    console.log('handle target', target);

    this.setState((state, props) => ({
      number: Math.random(),
      data: 'hallo',
    }), () => {
      console.log('handle update', this.state);
    });
  }

  render() {
    console.log('render class <%= component_name %> Compontent');
    return (
      <>
        <div className={style.container}>
          <h2><%= lower_name %> title</h2>
          <button
            className={style.btn}
            onClick={(e) => {
              this.handle(e);
            }}
          >
            click
          </button>
        </div>
      </>
    );
  }
}


// props validation
<%= component_name %>.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
