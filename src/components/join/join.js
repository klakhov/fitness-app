import React from 'react';

import styles from '../../styles/sass/join.module.sass';
import {Link} from 'react-router-dom';

class Join extends React.Component {
    render() {
        return (
            <section className={['container-fluid',styles.join].join(' ')}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className={['col-auto', styles.joinToday].join(' ')}>
                            <div className={['row', styles.heading].join(' ')}>
                                <div className="col">
                                    Новичок в спортзале?
                                </div>
                            </div>
                            <div className={['row', styles.subHeading].join(' ')}>
                                <div className="col">
                                    Ваше членство до 2 месяцев БЕСПЛАТНО!
                                </div>
                            </div>
                            <div className={['row', styles.joinButton].join(' ')}>
                                <div className="col">
                                   <Link className='special-link-filled' to='/'>Станьте участником сегодня!</Link>
                                </div>
                            </div>
                        </div>
                        <div className={['col-auto', styles.aboutWorkingHours].join(' ')}>
                            <div className={['row', styles.heading].join(' ')}>
                                <div className="col">
                                   Рабочие часы
                                </div>
                            </div>
                            <div className={['row', styles.workingHours].join(' ')}>
                                <div className="col">
                                    Ежедневно
                                </div>
                            </div>
                            <div className={['row', styles.workingTime].join(' ')}>
                                <div className="col">
                                    7:00 - 22:00
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Join;