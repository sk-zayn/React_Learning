import { useState } from "react";
import TodoItem from "./TodoItem";

function Todo(props) {
  // const todoItems = props.todoList.map((todo)=> <TodoItem  key={todo.id} todo={todo}/>)
  const [todoItems, setTodoItems] = useState([{data: "Todo 1" , id: 201}, {data: "Todo 2", id: 202}]);
  const [inputText, setInputText]= useState("")
  return(
    <>
    <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
    <button onClick={()=>setTodoItems([...todoItems, {data: inputText, id: (new Date()).getTime()}])}>Add Todo</button>
      <ul> {todoItems.map((todo) => <TodoItem todo = {todo} key={todo.id} />)} </ul>
    </>
  );

};


export default Todo;
