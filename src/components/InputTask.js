import React, { Fragment, useState } from "react";

const InputTask = () => {

    const [description, setDescription] = useState("")

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/tasks`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)

        }

    }

    return (
        <Fragment>
            <h1 className="text-center mt-5" style={{color: '#ffffff'}}>Task Manager</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input types="text" 
                className="form-control" 
                value={description} 
                onChange={e => setDescription(e.target.value)}
                style={{
                    color: '#ffffff',             
                    backgroundColor: '#383b3e',    
                  }}  />
                <button className="btn btn-success">Add</button>

            </form>
        </Fragment>
    )
}


export default InputTask;