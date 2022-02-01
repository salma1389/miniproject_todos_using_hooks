import React, { useState } from 'react';

const Search = ({add}) => {
    const [text, setText] = useState("");
    const handelSubmit=(e)=>{
        e.preventDefault()
        const newInput={
            id:Math.random(),action:text,isDone:false
        }
        add(newInput)
        setText('')
    }
  return <div>
      <form onSubmit={handelSubmit}>
          <input type="text" placeholder='add an input text' value={text} onChange={(e)=>setText(e.target.value)} />
      </form>
  </div>;
};

export default Search;
