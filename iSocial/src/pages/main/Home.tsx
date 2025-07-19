import {auth,db} from "../../.config/firebase"
import {useAuthState} from 'react-firebase-hooks/auth'
import {getDocs, collection} from 'firebase/firestore'
import {useEffect ,useState} from "react"
import { useLocation ,useNavigate } from "react-router"
import toast from 'react-hot-toast'
import Posts from './Posts'

export interface Post{
    id: string,
    title: string,
    description: string,
    username: string,
    userId: string
  }
function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if(!user) {
    navigate("/login");
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state?.toastmessage) {
      toast.success(location.state.toastmessage,{duration:5000});
      window.history.replaceState({}, document.title);
    }
  },[location.state]);
 const [postList , setPostlist] = useState<Post[]|null>(null);
 const postCollection = collection(db, "posts");
const getposts = async ()=>{
  const data  = await getDocs(postCollection);
  setPostlist(data.docs.map((doc)=>({...doc.data(), id:doc.id}))as Post[])
}

useEffect(()=>{
  getposts();
},[]);
  return (
    <>
   {postList?.map((post)=>
    <Posts key={post.id} post={post}/>
  )}
  </> 
  )
}

export default Home
