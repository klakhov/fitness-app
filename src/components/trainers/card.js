import React from 'react';
import styles from '../../styles/sass/trainers.module.sass';

export default function Trainer(props){
    return (
        <>
            <div className={['col', 'card', 'p-0', 'shadow', styles.trainerCard].join(' ')}>
                <img src={props.img} className="card-img-top" alt="trainer"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.desc}</p>
                    </div>
            </div>
        </>
    );
}