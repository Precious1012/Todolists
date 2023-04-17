import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Form from './components/Form.js';
import Tasklist from './components/tasklist.js';
import './App.css';

const App = () => {

  //setting variable to simulate tasks in the browser
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  // setting variables and states for inputs and tasks
  const [tasks, setTasks] = useState(initialState); 
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState(null);
  

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  },[tasks]);

  return(

    <div className='Container'>

        <div className='AppWrapper'>

          <div className='TopWrapper'>
                <div>
                  <Header/>
                </div>

                <div> 
                  <Form
                    input = {input}
                    setInput = {setInput}
                    tasks = {tasks}
                    editTask = {editTask}
                    setTasks = {setTasks}
                    setEditTask={setEditTask}/> 
                </div>
          </div>

            <div>
                <Tasklist
                 tasks = {tasks}
                 setTasks = {setTasks} 
                 setEditTask = {setEditTask} 
                 />
            </div>       

        </div>
        
    </div>


  );
}

export default App;
