import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = () => {
    let dialogsData = [
        {id: 1, name: "Dmitry"},
        {id: 2, name: "Anna"},
        {id: 3, name: "Kiryll"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Sveta"},
        {id: 6, name: "Sasha"}
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "My friend"},
        {id: 3, message: "Yo"}
    ]

    let dialogsElements = dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData
        .map((message) => <Message message={message.message} id={message.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;