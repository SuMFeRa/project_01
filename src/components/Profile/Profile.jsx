import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

let Profile = () => {
    return <div>
            <img className={s.profile_img} src="https://w-dog.ru/wallpapers/0/25/380748713648050/taksi-zheltyj-chernyj-i-belyj-gorod-pr.jpg"></img>
        <div>
            avatar and description
        </div>
        <MyPosts />
    </div>
}

export default Profile;