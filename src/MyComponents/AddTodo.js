import React, { useState } from 'react'

// Always remember one thing that when a function is defined, always put it in brackets like in below.
export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        // Below is written to avoid page Reload. 
        e.preventDefault();

        // An alert so that title and desc won't be black 
        if(!title || !desc){
            alert("Title or Description can't be black");
        }
        else{
        addTodo(title,desc);

        // Now, when have written a particular todo and is saved. Then to get that previuos title and desc, we have to the below,
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3" >
            <h3 className='text-center'>
                Add your work here:
            </h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" value={title} onChange={(e) =>{setTitle(e.target.value)}} 
                     className="form-control" id="title" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text" ></div>
                </div>

{/* Here in both up and down, "value" function is written so as to link it with the above two use states i.e title and desc . It will store contents
Also "onChange" along with events is used so that we can write.

Now as we write something in title and desc as well, it will automatically change the state   of title and desc which is linked through it.
After this we will do the submit process.*/}

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description:</label>
                    <input type="text" value={desc} onChange={(e) =>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}