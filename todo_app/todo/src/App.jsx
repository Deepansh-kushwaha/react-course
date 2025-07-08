import { useState } from 'react'



function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange =(event)=>{
    setInputvalue(event.target.value);
  }

  const addTask = () => {
    inputvalue.length > 0 &&
    setTodolist([...todolist, inputvalue]);
    setInputvalue("");
  }

  const deleteTask = (item) =>{
    setTodolist(todolist.filter((item1)=> item1 !== item))
  }
  return (
    <><div>

      <h1 >BASIC REACT TODO APP</h1>
      <label htmlFor="inputfield"></label>
      <input type="text" name='inputfield' onChange={handleChange} value={inputvalue}/>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {todolist.map((item, index) => {
          return <li key={index}>{item} <button onClick={()=>{deleteTask(item)}}>X</button></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default App
