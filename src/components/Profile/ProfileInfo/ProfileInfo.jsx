import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <img className={s.profile_img} alt="шапка профиля" src="https://w-dog.ru/wallpapers/0/25/380748713648050/taksi-zheltyj-chernyj-i-belyj-gorod-pr.jpg">
            </img>
            <div className = {s.descriptionBlock}>
                avatar and description
            </div>
        </div>
    )
}

export default ProfileInfo;