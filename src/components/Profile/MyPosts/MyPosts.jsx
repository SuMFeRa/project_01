import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = () => {


    let postsData = [
        {id: 1, message: "hi, friends", likesCount: 12},
        {id: 2, message: "hi, world", likesCount: 11}
    ]

    let postsElement = postsData
        .map((post) => <Post message={post.message} id={post.id} likesCount={post.likesCount}/>)

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
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
