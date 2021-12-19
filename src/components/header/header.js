import React from 'react';

import {Link} from 'react-router-dom';
import styles from '../../styles/sass/header.module.sass';
class Header extends React.Component {
  render() {
    return (
      <header className={['container-fluid','fixed-top', styles.body].join(' ')}>
          <div className="container">
              <div className="row">
                  <div className={['col-auto', 'navbar-brand', styles.logo].join(' ')}>
                      <Link to='/'>Gymno Fitness</Link>
                  </div>
                  <nav className={['col', 'd-flex','justify-content-center', styles.nav].join(' ')}>
                      <div className={['mx-auto', styles.linkContainer].join(' ')}>
                          <Link className="link" to='/'>Главная</Link>
                          <Link className="link" to='/training'>Занятия</Link>
                          <Link className="link" to='/club'>О клубе</Link>
                          <Link className="link" to='/about'>О нас</Link>
                          <Link className="link" to='/pricing'>Стоимость</Link>
                          <Link className="link" to='/profile'>Профиль</Link>
                      </div>
                  </nav>
              </div>
          </div>

      </header>
    );
  }
}

export default Header;