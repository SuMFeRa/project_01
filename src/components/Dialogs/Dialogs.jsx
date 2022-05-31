import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} > {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}> {props.message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name="Dmitry" id="1" />
                <DialogItem name="Anna" id="2" />
                <DialogItem name="Kiryll" id="3" />
                <DialogItem name="Andrey" id="4" />
                <DialogItem name="Sveta" id="5" />
                <DialogItem name="Sasha" id="6" />
            </div>
            <div className={s.messages}>
                <Message message = "Hi"/>
                <Message message = "My friend"/>
                <Message message = "Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;