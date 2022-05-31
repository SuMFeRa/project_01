import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


let MyPosts = () => {
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
                <Post message="hi, friends"/>
                <Post message="hi, world"/>
            </div>
        </div>
    )
}

export default MyPosts;
