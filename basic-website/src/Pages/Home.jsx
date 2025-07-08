import {React,useContext} from 'react'
import { AppContext } from '../App'
function Home() {
    let {newUserName} = useContext(AppContext);
  return (
    <h1>
      This is Home page for {newUserName}
    </h1>
  )
}

export default Home
