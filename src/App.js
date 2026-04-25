import Todo from "./Todo";


function App() {
  const todos = [{data: "todo 1", id: 412}, {data: "todo 2", id: 413}, {data: "todo 3", id: 414}, {data: "todo 4", id: 415}];
  return (
    <div>
      <Todo todoList = {todos}/>
    </div>
  );
}

export default App;
