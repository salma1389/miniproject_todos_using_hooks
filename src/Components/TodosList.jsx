import React from 'react';
import TodosCard from './TodosCard';

const TodosList = (props) => {
  return <div>
      {
props.list.map((el,i)=><TodosCard todo={el} key={i} del={props.delete} completeundo={props.completeundo} edited={props.edited}/>)
}
  </div>;
};

export default TodosList;
