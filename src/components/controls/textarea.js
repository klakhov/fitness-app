import styles from "../../styles/sass/controls.module.sass";
import React from "react";

export default function Textarea(props){
    return (
        <textarea className={[styles.textarea].join(' ')} placeholder={props.placeholder}
               onChange={props.onChange} rows={5}/>
    );
}