import { Route, Routes,Link} from "react-router"
import About from "./Pages/About.jsx"
import Home from "./Pages/Home.jsx"

function App() {


  return (
    <>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
