import React from 'react';

import styles from '../../styles/sass/hero.module.sass';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <section className={['container-fluid',styles.hero].join(' ')}>
                <div className={[styles.overlay].join(' ')}/>
                <div className={["container", styles.welcome].join(' ')}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className={['text-center', styles.heroText].join(' ')}>
                                <div className={[styles.headingDop].join(' ')}>новый способ построения здорового тела!</div>
                                <div className={[styles.heading].join(' ')}>фитнес как стиль жизни вместе с gymso</div>
                                <div className="mt-5">
                                    <Link className="special-link-filled" to='/'>Начать</Link>
                                    <Link className="special-link ms-4" to='/'>Подробнее</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Header;