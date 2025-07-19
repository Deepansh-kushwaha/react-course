import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import type { Post as Ipost } from './Home';
import { auth, db } from '../../.config/firebase';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
interface Props {
    post: Ipost
}
interface Like {
    likeId: string,
    userId: string
}
function Posts(props: Props) {
    const [user] = useAuthState(auth);
    const { post } = props;
    const likeCollection = collection(db, "likes");

    const likedoc = query(likeCollection, where("postId", "==", post.id))
    // const [liked, setLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState<Like[] | null>(null);
    const getLikes = async () => {

        const data = await getDocs(likedoc);
        setLikes(data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id })));
    };

    const addLike = async () => {
        try {
            const newDoc = await addDoc(likeCollection, { userId: user?.uid, postId: post.id })
            if (user) {
                setLikes((prev) => prev ? [...prev, { userId: user.uid, likeId: newDoc.id }] : [{ userId: user.uid, likeId: newDoc.id }]);
            }
        } catch (e) {
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }

    }
    const removeLike = async () => {
        try {
            const liketoDeletequery = query(likeCollection, where("postId", "==", post.id), where("userId", "==", user?.uid));
            const liketoDeletedata = await getDocs(liketoDeletequery);
            const likeid = liketoDeletedata.docs[0].id;
            const liketoDelete = doc(db, "likes", likeid);
            await deleteDoc(liketoDelete);
            if (user) {
                setLikes((prev) => prev && prev.filter((like) => like.likeId !== likeid));
            }
        } catch (e) {
            console.log(e)
            if (e instanceof Error) {
                toast.error(e.message);
            }
        }

    }
    const hasuserliked = likes?.find((like) => like.userId === user?.uid);
    useEffect(() => {
        getLikes();
    }, [])

    return (
        <div className='flex flex-wrap justify-center gap-4 m-8'>
            <div className="card bg-neutral text-neutral-content w-96">
                <h4 className='font-bold m-3'>@{post.username}</h4>
                <div className="card-body items-center">
                    <h2 className="card-title font-extrabold text-xl text-center">{post.title}</h2>
                    <p className='text-sm text-center'>{post.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-ghost" onClick={hasuserliked ? removeLike : addLike}>{hasuserliked ? <span>❤️</span> : "🤍"}{likes?.length != 0 ? <span>{likes?.length}</span> : ""}</button>
                        <button className="btn btn-ghost">💬</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
