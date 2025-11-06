import React from 'react';
// import ClassComponent from './components/ClassComponent';
import {FuncComponent} from './components/FuncComponent/FuncComponent';


const App = () => {
  console.log('Functional App loaded');

  return (
    <>
      <div className="app">
        {/* <ClassComponent min={1} max={12} /> */}
        <FuncComponent min={1} max={12} />
      </div>
    </>
  );
};


export default App;
