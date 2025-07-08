import React from 'react'

const Task = (props) => {
 return (
              <li style={{backgroundColor: props.isCompleted ? "green" : null }} >
                {props.taskName}
                <button
                  onClick={() => {
                    props.deleteTask(props.id);
                  }}
                >
                  X
                </button>&nbsp;&nbsp;
                <button onClick={()=>props.completeTask(props.id)}>✔️</button>
              </li>
            );
}

export default Task
