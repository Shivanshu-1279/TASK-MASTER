// import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";
import {About} from "./MyComponents/About";

import React, { useState , useEffect } from 'react';
// The above state hook Returns a stateful value, and a function to update it. And the other is effect hoke 

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
                    
function App() {
  // The below case of null is taken i.e when no todos are present.
                    let initTodo;
                  if(localStorage.getItem("todos")===null){
                    initTodo = [];
                  }
                  else{
                    initTodo = JSON.parse(localStorage.getItem("todos"));
                  }
                                              
  // Specifying onDelete function
         const onDelete = (todo) =>{
          console.log("I am onDelete of todo" , todo);

          // Now if when we want to delete the task by clicking on delete, we'll have to do create a setTodos.filter method which is higher order array method

          // here setTodos is function which will update new todo to pass (filter is an advanced JS).
         setTodos(todos.filter((e)=>{
                return   e!==todo;
            }));
             console.log("deleted" , todos)
            // The below is done so that deleted todos can get saved.
            localStorage.setItem("todos" , JSON.stringify(todos));
           }

        //  Defining addTodo Function 
        const addTodo = (title,desc) =>{
          console.log("I am adding a new todo" , title, desc)

            // Printing a new todo in the list
            let sno; 
          if(todos.length===0){
                       sno=0;
          } 
        else{
         sno = todos[todos.length-1].sno + 1;
        }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo]);
         console.log(myTodo);

        }

        // For loop was used below when the todos were given.

        const [todos, setTodos] = useState(initTodo);
 
        // Whenever todos are getting changed then call the below effect hook function 
        useEffect(() => {
  
                     // The below is done for the todos to get saved.
        localStorage.setItem("todos" , JSON.stringify(todos));
        }, [todos])
        
   
  return (
  <>
  {/* React Router Dom is used to render home and about page without getting reload. */}
  <Router> 
  <Header title= "TodoList"  searchBar={true}/>

{/* here routes is used instead of switch. we have to first install "npm install react-router-dom@6" and here no "exact" is used, it automatically understands */}
<Routes>
          <Route exact path="/" element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }></Route>
          <Route exact path="/about" element={<About />}></Route>
 </Routes>


       <Footer/>
     </Router>
  </>
  );
}

export default App;