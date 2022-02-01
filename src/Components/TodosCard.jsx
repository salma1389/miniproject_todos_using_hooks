import React from 'react';
import Edit from './Edit';

const TodosCard = ({todo,del,completeundo,edited}) => {
  return <div>
      <h1>{todo.action}</h1>
      <button onClick={()=>completeundo(todo.id)}> {todo.isDone? 'undo':'complete'}</button>
      <button onClick={()=>del(todo.id)}> Delete</button>
      <Edit value={todo} edited={edited} />
  </div>;
};

export default TodosCard;
