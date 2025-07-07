import { useState } from 'react'



function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange =(event)=>{
    setInputvalue(event.target.value);
  }

  const addTask = () => {
    setTodolist([...todolist, inputvalue]);
    setInputvalue("");
  }
  return (
    <><div>

      <h1 >BASIC REACT TODO APP</h1>
      <label htmlFor="inputfield"></label>
      <input type="text" name='inputfield' onChange={handleChange} value={inputvalue}/>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todolist.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
    </>
  )
}

export default App
