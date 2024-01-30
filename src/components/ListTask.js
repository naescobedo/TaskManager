import React, { Fragment , useEffect, useState} from "react";
import EditTask from "./EditTask";


const ListTasks = () => {

    const [tasks, setTasks] = useState([]);

    //delete task

    const deleteTask = async (id) =>{
        try {
            const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            });

            setTasks(tasks.filter(tasks => tasks.task_id !== id));
        } catch (err) {
            console.error(err.message)
        }
    };

    const getTasks = async() => {
        try {

            const response = await fetch(`http://localhost:5000/tasks`);
            const jsonData = await response.json();

            setTasks(jsonData);
        } catch (err) {
            console.log(err.message)
        }
    }


    useEffect(() => {
        getTasks();
    },[]);

    console.log(tasks);

    return (<Fragment>  <table className="table table-dark table-hover mt-5 text-center">
    <thead>
      <tr>
        <th>Task</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
       
      {tasks.map((tasks) => (
        <tr key = {tasks.task_id}>
            <td>{tasks.description}</td>
            <td>
                <EditTask tasks = {tasks}/>
            </td>
            <td>
                <button className= "btn btn-outline-danger" onClick = {() => deleteTask(tasks.task_id)}> Delete </button></td>
        </tr>
      ))}
      
    </tbody>
  </table></Fragment>);
};

export default ListTasks;