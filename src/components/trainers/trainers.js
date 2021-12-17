import React from 'react';

import styles from '../../styles/sass/trainers.module.sass';
import Trainer from "./card";
import img1 from '../../images/trainers/img1.jpg'
import img2 from '../../images/trainers/img2.jpg'
import img3 from '../../images/trainers/img3.jpg'

class Trainers extends React.Component {
    render() {
        const trainers = [
            {
                name: "Иван",
                desc: "Силовые тренировки",
                img: img1,
            },
            {
                name: "Артур",
                desc: "Функциональные тренировки",
                img: img2,
            },
            {
                name: "Борис",
                desc: "Кроссфит",
                img: img3,
            },
        ]
        const trainersCards = trainers.map((trainer) => {
            return <Trainer name={trainer.name} desc={trainer.desc} img={trainer.img} key={trainer.name}/>
        })
        return (
            <section className={['container-fluid',styles.trainers].join(' ')}>
                <div className={["container", ].join(' ')}>
                    <div className="row justify-content-center">
                        <div className="col">
                            <div className={['row',styles.heading].join(' ')}>
                                <div className="col-auto">
                                    Привет, Мы Gymno
                                </div>
                            </div>
                            <div className={['row',styles.desc].join(' ')}>
                                <div className="col-auto">
                                    Мы подберем для вас лучшего тренера, составим программу тренировок.
                                    Прогресс не заставит себя долго ждать!
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="row">
                                {trainersCards}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Trainers;