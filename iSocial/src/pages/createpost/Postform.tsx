import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { collection, addDoc } from "firebase/firestore"
import { db, auth } from '../../.config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
function Postform() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  interface CreateFormdata { title: string, description: string };
  const shema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),

  });
  const { register, handleSubmit, formState: { errors }, reset } = useForm<CreateFormdata>({ resolver: yupResolver(shema) });
  const postCollection = collection(db, "posts");
  const onSubmit = async (data: CreateFormdata) => {
    await addDoc(postCollection, {
      ...data,
      username: user?.displayName,
      userId: user?.uid
    })
      .then(() => {
        reset();
        navigate("/",
          {
            state: {
              toastmessage: "Post created successfully",
            }
          })
      })
      .catch((error) => toast.error("Some error occured please try again later" + error.message));

  };
  const base = "input";
  const errored = "input input-error";
  return (
    <div className='flex flex-col justify-center items-center '>
      <form>
        <fieldset className=" fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Add Post  </legend>

          <label className="label">Title</label>
          <input type="string" className={errors.title ? errored : base} placeholder={errors.title ? errors.title.message : "Title"} {...register("title")} />

          <label className="label">Description</label>
          <input type="string" className={errors.title ? errored : base} placeholder={errors.description ? errors.description.message : "Description"} {...register("description")} />

          <button className="btn btn-neutral mt-4" onClick={handleSubmit(onSubmit)}>Post</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Postform
