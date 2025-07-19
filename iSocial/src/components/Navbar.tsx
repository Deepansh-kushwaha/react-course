import { Link, NavLink,useNavigate } from "react-router";
import { auth } from "../.config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
const navigate = useNavigate();
const [user] = useAuthState(auth);
const base = "btn rounded-full";
const active = "btn-active ";
const inactive = "btn-ghost hover:border-b-amber-50 ";
const logout = async () => {
  await signOut(auth).then(() => navigate("/")).catch((error) => console.log(error));
};
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          iSocial
        </Link>
      </div>
      <div className="flex-1 flex gap-10 justify-center items-center ">
        <NavLink to={"/"} className={({isActive})=>`${base} ${isActive?active:inactive}`}>Home</NavLink>
        <NavLink to={"/about"} className={({isActive})=>`${base} ${isActive?active:inactive}`}>About</NavLink>
      </div>
      <div className="flex-1 flex gap-8 justify-end items-center">
        
             {user ?
             <> 
              <Link to={"/createpost"}>New Post</Link>
              <Link to={"/about"} className="justify-between">
                Profile
              </Link>
              <a onClick={logout}>Logout</a></>:
              <Link to={"/login"}>Login</Link>
             }
        
        <div className="flex items-center">
          <div
            className="btn btn-ghost btn-circle avatar"
           
          >
            <div className="w-10 rounded-full">
              {user &&
              <img
              alt="Tailwind CSS Navbar component"
              src={user?.photoURL||"https://placeimg.com/192/192/people"}
              />
            }
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Navbar;
