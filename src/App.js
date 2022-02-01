import { Todos } from './Data';
import { useState } from 'react';
import './App.css';
import TodosList from './Components/TodosList';
import Search from './Components/Search';


function App() {
  const [todos, setTodos] = useState(Todos);

  //delete card 
  const handelDelete=(id)=>{
    setTodos(todos.filter(el=>el.id !==id ))
  }

  //change the button undo/complete
  const handelComplete=(id)=>{
    setTodos(todos.map(el=> el.id===id? { ...el,isDone:!el.isDone} : el))
  }
//add a new input
  const handeladd=(newtask)=>{
    setTodos( [...todos,newtask])
  }

  //change the edited input
  const handelEdit=(task)=>{
 setTodos(todos.map(el=> el.id===task.id?{...el,...task} : el))
  }

  return (
    <div className="App">
      <Search add={handeladd}/>
      <TodosList list={todos} delete={handelDelete} completeundo={handelComplete} edited={handelEdit}/>
      
    </div>
  );
}

export default App;
