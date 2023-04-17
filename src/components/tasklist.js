import React from "react";
import { useState } from "react";
import TaskData from "./taskdata";
  
const Tasklist = ({ tasks, setTasks, setEditTask }) => {

 
//setting variables to calculate pages to display
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 3;
    const lastIndex = currentPage * recordsPerPage; 
    const firstIndex = lastIndex - recordsPerPage;  
    const records = TaskData.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(TaskData.length / recordsPerPage);


// functions to  handle task managements

        //delete function
    const handleDelete = ({ id }) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
        //complete function
    const handleComplete = (task) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === task.id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };
            // edit function
    const handleEdit = ({ id }) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    }



    return (
        <div>
            
            {
                // Creating tasks from the input values
                tasks.map((task) => (
                    <li className="TaskList" key={task.id}>
                        <input
                            className={`list ${task.completed ? "complete" : ""}`}
                            type="text"
                            value={task.title}
                            onChange={(event) => event.preventDefault()} />

                        <div className="iconsContainer">
                            <button className="CompleteButton" onClick={() => handleComplete(task)}>
                                <i className="fa fa-check-circle"></i>
                            </button>
                            <br></br>
                            <button className="EditButton" onClick={() => handleEdit(task)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <br></br>
                            <button className="DeleteButton" onClick={() => handleDelete(task)}>
                                <i className="fa fa-trash"></i>
                            </button>
                        </div>
                    </li>
                ))
            }

                {
                   //Rendering of all the tasks in the database  
                     records.map((task) => (
                        
                        <div className="TaskList" >
                                <input
                                    className="list"
                                    type="text"
                                    value={task.title}
                                    onChange={(event) => event.preventDefault()} />
                                
    
                            <div className="iconsContainer">
                                    <button className="CompleteButton">
                                        <i className="fa fa-check-circle"></i>
                                    </button>
    
                                <br></br>
    
                                    <button className="EditButton" >
                                        <i className="fa fa-edit"></i>
                                    </button>
    
                                <br></br>
    
                                    <button className="DeleteButton">
                                        <i className="fa fa-trash"></i>
                                    </button>
    
                            </div>
                        </div>
                            
                        ) )
                }

                {
                    // including pagination to the array of tasks rendered from the database 
                    <nav>

                        
                    <ul className="pagination">
                        
                        <div className="page-item">
                            <a
                            href="#" 
                            className="page-link"
                            onClick={prevPage}
                            >Prev</a>
                        </div>
                       
                        <div className="page-item">
                            <a  href="#"
                            className="page-link"
                           onClick={NextPage}
                            >Next</a>
                        </div>
        
                    </ul>
                </nav>
                }
               
        </div>
    );


// functions to Paginate the array displayed

        // function to go back
    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
        //function to proceed to next page
    function NextPage() {    
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1)
        } 
    }

}

export default Tasklist;