import React from 'react';

import styles from '../../styles/sass/footer.module.sass';
class Header extends React.Component {
    render() {
        return (
            <footer className={['container-fluid', styles.body].join(' ')}>
                <div className="container px-5">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            Все права защищены © {new Date().getFullYear()} Gymno Fitness Co.
                        </div>
                        <div className="col-auto">
                            support@gymso.com
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Header;