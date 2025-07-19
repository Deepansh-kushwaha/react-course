import {auth} from "../.config/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import { use, useEffect } from "react";
import { useLocation } from "react-router";
import toast from 'react-hot-toast'
function Home() {
  const [user] = useAuthState(auth);
  const location = useLocation();
  useEffect(() => {
    if (location.state?.toastmessage) {
      toast.success(location.state.toastmessage,{duration:5000});
      window.history.replaceState({}, document.title);
    }
  },[location.state]);
  return (
    <div>
      <h1>Welcome back {user?.displayName}</h1>
    </div>
  )
}

export default Home
