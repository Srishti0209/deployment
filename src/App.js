import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import data from './data/mockdata.json';
import ToDoForm from './components/ToDoForm.js';
function App() {

  const [toDoList, setToDoList] = useState(data);

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
     Hello Everyone!! A todo list will go here
     <Header/>
     <ToDoList toDoList = {toDoList} handleToggle={handleToggle} handleFilter={handleFilter}></ToDoList>
     <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
