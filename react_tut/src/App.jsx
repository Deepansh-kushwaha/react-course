function App() {
  

  return (
    <>
      <div className='App'>  
         <Job role = "Software Engineer" name = "John Doe" salary = {50000}/>
         <Job role = "civil Engineer" name = "John " salary = {5700}/>
         <Job role = "Mechanical Engineer" name = "bhoot" salary = {6000}/>

      </div>
    </>
  )
}
const Job = (props)=> {
    return (
      <div>
        <h1>{props.role}</h1>
        <h2>{props.name}</h2>
        <h3>{props.salary}</h3>
      </div>
    )
}

export default App
