import React from "react";
import { useState } from "react";
import TaskData from "./taskdata";
  
const Tasklist = ({ tasks, setTasks, setEditTask }) => {

 
    
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage; 
    const firstIndex = lastIndex - recordsPerPage;  
    const records = TaskData.slice(firstIndex, lastIndex);
    const numberOfPages = Math.ceil(TaskData.length / recordsPerPage);
    const numbers = [...Array(numberOfPages + 1).keys()].slice(1);




    const handleDelete = ({ id }) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

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

    const handleEdit = ({ id }) => {
        const findTask = tasks.find((task) => task.id === id);
        setEditTask(findTask);
    }



    return (
        <div>

            {
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
                )

                )
                }

                {
                    
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

    function prevPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
 
    function NextPage() {    
        if (currentPage !== numberOfPages) {
            setCurrentPage(currentPage + 1)
        } 
    }
}

export default Tasklist;