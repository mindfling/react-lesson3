// import React from 'react'; // 6.9k
import { Component } from 'react'; // 4.1k
import ComponentClass from './components/ClassComponent';

export default class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <ComponentClass min={1} max={12} />
        </div>
      </>
    );
  }
}
