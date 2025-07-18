import { auth, provider } from "../.config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };    
  return (
    <div className="text-center">
      <h1 className="text-3xl m-5">Login/Signup</h1>
      <button className="btn btn-primary m-2 " onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
    
  );
}

export default Login;
