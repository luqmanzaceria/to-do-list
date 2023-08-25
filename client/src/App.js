import React, { Fragment } from 'react';
import InputTask from "./components/inputTodo"
import ListTasks from "./components/ListTodos"
import './App.css';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTask />
        <ListTasks />
      </div>
    </Fragment>
  );
}

export default App;
