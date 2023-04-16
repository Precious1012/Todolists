import React, {useState, useEffect} from 'react';
import Header from './components/header';
import Form from './components/Form.js';
import Tasklist from './components/tasklist.js';
import TaskData from './components/taskdata';
import './App.css';

const App = () => {


  const [tasks, setTasks] = useState([]); 
  const [input, setInput] = useState("");
  const [editTask, setEditTask] = useState(null);
  


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  },[tasks]);

  return(

    <div className='Container'>

        <div className='AppWrapper'>
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
