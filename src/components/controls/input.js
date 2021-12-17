
import React from "react";

import styles from '../../styles/sass/controls.module.sass';

export default function Input(props){
    return (
        <input type="text" className={[styles.input].join(' ')} placeholder={props.placeholder}
               onChange={props.onChange}/>
    );
}