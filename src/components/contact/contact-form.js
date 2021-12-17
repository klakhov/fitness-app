
import React, { useState } from "react";
import Input from "../controls/input";
import Textarea from "../controls/textarea";
import styles from '../../styles/sass/contact.module.sass';

export default function ContactForm(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    return (
        <>
            <div className="row">
                <div className={styles.heading}>Не стесняйтесь спрашивать о чем угодно</div>
                <Input placeholder='Имя' onChange={(e)=>setName(e.target.value)}/>
                <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <Textarea placeholder='Сообщение' onChange={(e)=>setText(e.target.value)}/>
                <button className={styles.contactButton}>Отправить сообщение</button>
            </div>
        </>
    );
}