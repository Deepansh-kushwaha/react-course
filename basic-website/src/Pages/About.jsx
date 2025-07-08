import {React, useContext} from 'react'
import { useNavigate,useParams } from 'react-router'
import { AppContext } from '../App'
import Changename from '../Components/Changename'
const About = () => {
    let navigate = useNavigate();
    let {name} = useParams();
    let {newUserName} = useContext(AppContext);
  return (
    <div>
      <h1>This is a about {newUserName}</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h3>Change user name</h3>
      <Changename />
    </div>
  )
}

export default About
