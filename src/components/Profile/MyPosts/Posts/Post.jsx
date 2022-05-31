import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div className={s.item} >
            <img alt="avaPost" src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-twitch-32.jpg" ></img>
            {props.message}
            <div>
                <span>
                    Like
                </span>
            </div>
        </div>
    )
}

export default Post;


