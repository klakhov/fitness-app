import React from 'react';
import styles from "../../styles/sass/training.module.sass";

import Timetable from "../../components/timetable/timetable";
import Contact from "../../components/contact/contact";

export default function TrainingPage(){
    return (
        <>
            <section className={['container-fluid', 'page-offset', styles.training].join(' ')}>
                <div className={["container", ].join(' ')}>
                    <div className="row justify-content-center">
                        <div className={['col-auto', styles.subheading].join(' ')}>
                            наши еженедельные групповые занятия
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className={['col-auto', styles.heading].join(' ')}>
                            Расписание тренировок
                        </div>
                    </div>
                    <div className="row">
                        <Timetable/>
                    </div>
                </div>
            </section>
            <Contact/>
        </>
    );
}