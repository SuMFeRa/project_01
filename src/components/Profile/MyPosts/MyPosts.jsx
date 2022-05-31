import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = () => {


let postsData = [
    {id: 1, message: "hi, friends", likesCount: 12},
    {id: 2, message: "hi, world", likesCount: 11}
]

return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea name="" id="" cols="40" rows="5"></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </div>

        <div className={s.posts}>
            <Post message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1 ].likesCount}/>
        </div>
    </div>
)
}

export default MyPosts;
