import { useEffect, useState } from "react";
import Task from "./Task";
import Axios from "axios";

function App() {
  const [inputvalue, setInputvalue] = useState("");
  const [todolist, setTodolist] = useState([]);

  const handleChange = (event) => {
    setInputvalue(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: inputvalue,
      isCompleted: false,
    };
    inputvalue.length > 0 && setTodolist([...todolist, task]);
    setInputvalue("");
  };

  const deleteTask = (id) => {
    setTodolist(todolist.filter((item1) => item1.id !== id));
  };
  const completeTask = (id) => {
    setTodolist(
      todolist.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: true };
        } else {
          return item;
        }
      })
    );
  };
 const [excuses, setExcuses] = useState("");
  const fetchexcuse= (excused)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excused}/`).then((res)=>{
      setExcuses(res.data[0].excuse);
    })
  }

  
  return (
    <>
      <div>
        <h1>BASIC REACT TODO APP</h1>
        <label htmlFor="inputfield"></label>
        <input
          type="text"
          name="inputfield"
          onChange={handleChange}
          value={inputvalue}
        />
        <button onClick={addTask}>Add Task</button>
        <ol>
          {todolist.map((item) => {
            return (
              <Task
                taskName={item.taskName}
                id={item.id}
                deleteTask={deleteTask}
                isCompleted={item.isCompleted}
                completeTask={completeTask}
              />
            );
          })}
        </ol>
      </div>
      <div>
        <h1>Random Excuses</h1>
        <button onClick={()=>{fetchexcuse("party")}}>Get for Party</button>
        <button onClick={()=>{fetchexcuse("office")}}>Get for Office</button>
        <button onClick={()=>{fetchexcuse("family")}}>Get for family</button>
        <p>{excuses}</p>
      </div>
    </>
  );
}

export default App;
