import { useState } from 'react'



function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange =(event)=>{
    setInputvalue(event.target.value);
  }

  const addTask = () => {
    const task = {
       id : todolist.length === 0 ? 1 : todolist[todolist.length -1].id + 1,
       taskName : inputvalue,
    }
    inputvalue.length > 0 &&
    setTodolist([...todolist, task]);
    setInputvalue("");
  }

  const deleteTask = (id) =>{
    setTodolist(todolist.filter((item1)=> item1.id !== id))
  }
  return (
    <><div>

      <h1 >BASIC REACT TODO APP</h1>
      <label htmlFor="inputfield"></label>
      <input type="text" name='inputfield' onChange={handleChange} value={inputvalue}/>
      <button onClick={addTask}>Add Task</button>
      <ol>
        {todolist.map((item, index) => {
          return <li key={index}>{item.taskName} <button onClick={()=>{deleteTask(item.id)}}>X</button></li>
        })}
      </ol>
    </div>
    </>
  )
}

export default App
