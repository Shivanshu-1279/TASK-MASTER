import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
   
   // Styling is done by creating a function 
   let myStyle ={
      minHeight:"100vh",
      margin: "30px auto"
   }

   return (
    <div className="container" style={myStyle}>
                  <h3 className='text-center'>Pending Task:</h3>
               {/* <props className="todos map"></props> */}


   {/* Below is higher order JS, which is simply a for loop and all elements(todos) present in the array can be returned.  */}
    {/* {props.todos.map((todo)=>{
           return  <TodoItem todo = {todo} onDelete={props.onDelete} />
   })} */}


   {/* Same things are written as above only Cases are given i.e if todos become 0, Return the below statment.  */}
   {props.todos.length===0?  "All tasks are performed, nothing to display!!😊": 
   props.todos.map((todo)=>{
           return  <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} />
        //    When map is used for arrays for rendering, key must be specified. 
   })
   }
 
               {/* Here below , only a single todo can be returned.  */}
                {/* <TodoItem todo = {props.todos[0]}/> */}
    </div>
    )
}