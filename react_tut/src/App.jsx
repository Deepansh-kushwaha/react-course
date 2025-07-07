import React from "react";
import Card from "/components/Card";
import{ useState } from "react";
function App() {
  const planets = [
    {
      name: "Mercury",
      distance: "57.9 million km from the Sun",
      isGasPlanet: false,
    },
    {
      name: "Venus",
      distance: "108.2 million km from the Sun",
      isGasPlane: false,
    },
    {
      name: "Earth",
      distance: "149.6 million km from the Sun",
      isGasPlanet: false,
    },
    {
      name: "Mars",
      distance: "227.9 million km from the Sun",
      isGasPlane: true,
    },
    {
      name: "Jupiter",
      distance: "778.5 million km from the Sun",
      isGasPlanet: false,
    }
  ];
 const [count,setCount] = useState(0);
  return (
    <>
      <div className="App">
        <Job role="Software Engineer" name="John Doe" salary={50000} />
        <Job role="civil Engineer" name="John " salary={5700} />
        <Job role="Mechanical Engineer" name="bhoot" salary={6000} />

        {planets.map((planet, key) => {
          return  <Card key ={key} name={planet.isGasPlanet ? "yes" :"not"} /> ;
        })}
      </div>
      <div>
        <h1>Cunter App</h1>
          <h3>{count}</h3>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
      </div>
    </>
  );
}
const Job = (props) => {
  return (
    <div>
      <h1>{props.role}</h1>
      <h2>{props.name}</h2>
      <h3>{props.salary}</h3>
    </div>
  );
};

export default App;
