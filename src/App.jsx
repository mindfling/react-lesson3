import React from 'react';
import ComponentClass from './components/ClassComponent';

export default class App extends React.Component {
  render() {
    console.log('Hallo App class component');

    return (
      <div className="app">
        <ComponentClass min="5" max="27" text="text hallo" />
      </div>
    );
  }
}
