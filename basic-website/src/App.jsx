import { Route, Routes,Link} from "react-router"
import About from "./Pages/About.jsx"
import Home from "./Pages/Home.jsx"
import Error from "./Pages/Error.jsx"
import Forms from "./Pages/Forms.jsx"
import {useState, createContext } from "react"
export const AppContext = createContext();
function App() {
const [newUserName, setNewUserName] =useState("Deepansh");
return (
  <AppContext.Provider value={{newUserName, setNewUserName}}>
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/Deepansh">About</Link>
      <Link to="/form">Form</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:name" element={<About />} />
      <Route path="/form" element={<Forms />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
    </AppContext.Provider>
  )
}

export default App
