import React from 'react';
import ComponentClass from './components/ClassComponent';

export default class App extends React.Component {
  render() {
    console.log('Hallo App class component');

    return (
      <div className="app">
        <ComponentClass my="this is my" text="hallllo" />
      </div>
    );
  }
}
