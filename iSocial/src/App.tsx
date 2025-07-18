import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Forbidden from './pages/Forbidden'
import Navbar from './components/Navbar'
import Createpost from './pages/createpost/Createpost'
import { Routes , Route} from 'react-router'

function App() {
  return (
 <>
   <Navbar/>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Forbidden />} />
    <Route path="/createpost" element={<Createpost/>}/>
  </Routes>
 </>
)}

export default App
