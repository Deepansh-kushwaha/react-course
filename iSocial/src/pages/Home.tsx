import {auth} from "../.config/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>Welcome back {user?.displayName}</h1>
    </div>
  )
}

export default Home
