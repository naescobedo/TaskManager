import React,{ Fragment , useState} from "react";



const EditTask = ({tasks}) => {

    const [description, setDescription] = useState(tasks.description);

    //Custom styles
    const customModalStyle = {
        backgroundColor: '#222529',
    };

    const customButtonStyle = {
        color: '#ffffff',
    };

    //Edit description function

    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/tasks/${tasks.task_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message)
            
        }


    }



    return <Fragment>

 
    <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target={`#id${tasks.task_id}`}>
     Edit </button>


    <div className="modal" id={`id${tasks.task_id}`} onClick={() => setDescription(tasks.description)} >
      <div className="modal-dialog">
        <div className="modal-content">
    
          <div className="modal-header" style={customModalStyle}>
            <h4 className="modal-title">Edit task</h4>
            <button type="button" className="close" data-dismiss="modal" style={customButtonStyle} onClick={() => setDescription(tasks.description)} >&times;</button>
          </div>
    
          <div className="modal-body" style={customModalStyle} >
            <input type="text" 
            className="form-control" 
            value = {description} 
            onChange={e => setDescription(e.target.value)}
            style={{
                    color: '#ffffff',
                    backgroundColor: '#383b3e',
                  }} 
            />
          </div>
    
          <div className="modal-footer" style={customModalStyle}>
            <button type="button" className="btn btn-outline-success" data-dismiss="modal" onClick={e => updateDescription(e)}>Change</button>
            <button type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={() => setDescription(tasks.description)}> Close </button>
          </div>
    
        </div>
      </div>
    </div></Fragment>;
}

export default EditTask;