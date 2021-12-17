import React from 'react';

import styles from '../../styles/sass/contact.module.sass';
import ContactForm from "./contact-form";
import Map from "./map";
class Contact extends React.Component {
    render() {
        return (
            <section className={['container-fluid',styles.contact].join(' ')}>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <ContactForm/>
                        </div>
                        <div className={['col',styles.mapHolder].join(' ')}>
                            <div className={styles.heading}>Где вы можете нас найти</div>
                            <div className={styles.address}>Нижний Новгород - ул. Радужная 1, Россия</div>
                            <Map/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;