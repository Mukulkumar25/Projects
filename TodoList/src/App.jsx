import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoItems,
      addNewItem: addNewItem,
      deleteItem: deleteItem,
      }}>
      <center className="todo-container">
        <AppName />
        <AddT odo/>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;



/* FOR PRACTICE */


// import React from "react";
// // import {useState} from "react";
// const products =[ 
//   {name:"Mukul", id:1},
//   {name:"Atin", id:2},
//   {name:"Jaat", id:3},
//   {name:"Malik", id:4}
// ];
// function App(){
//   const listItem = products.map(pdt =>(
//     <li key={pdt.id}>{pdt.name}</li>
//   ));
//   return(
//     <ul>{listItem}</ul>
//   )
// }
// export default App;

// function MyButton({clk,count}){
  
  
//   return(
//     <button style={{margin:200}} onClick={clk}>Clicked {count} times</button>
//   )
// }







