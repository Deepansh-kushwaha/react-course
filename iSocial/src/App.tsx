import Home from './pages/main/Home'
import About from './pages/About'
import Login from './pages/Login'
import Forbidden from './pages/Forbidden'
import Navbar from './components/Navbar'
import Createpost from './pages/createpost/Createpost'
import { Routes , Route} from 'react-router'
import {Toaster} from 'react-hot-toast'
function App() {
  return (
     
 <>
   <Navbar/>
   <Toaster position='top-center' />
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
