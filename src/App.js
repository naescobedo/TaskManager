import './App.css';
import React, { Fragment } from 'react';

//Components
import InputTask from './components/InputTask';
import ListTasks from './components/ListTask';




function App() {
  return( 
    <Fragment> <div className="container" style= {{backgroundColor: '#222529'}}>
      <InputTask />
      <ListTasks />
    </div>

    </Fragment>
    );
}

export default App;
