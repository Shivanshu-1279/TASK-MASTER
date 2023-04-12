import React from 'react'

export const TodoItem = ({todo , onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
       <p>{todo.desc}</p>     
       <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
       <hr />

       {/* Here basically, when we are passing function inside arrow function i.e(   "()=>{function name}" ) , then it will pass the function rather than only calling the function */}
    </div>
          
)
}