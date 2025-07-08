import { Route, Routes,Link} from "react-router"
import About from "./Pages/About.jsx"
import Home from "./Pages/Home.jsx"
import Error from "./Pages/Error.jsx"
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
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:name" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
    </AppContext.Provider>
  )
}

export default App
