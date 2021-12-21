import React from 'react';

import styles from "../../styles/sass/training.module.sass";

export default function Timetable(){
    return (
        <>
            <table className={[styles.table, styles.tableBordered, styles.schedule].join(' ')}
                   >

                <thead className={[styles.light].join(' ')}>
                <tr>
                    <th><i className="fa fa-calendar"></i></th>
                    <th>Пн</th>
                    <th>Вт</th>
                    <th>Ср</th>
                    <th>Чт</th>
                    <th>Пт</th>
                    <th>Сб</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td><small>Утренние</small></td>
                    <td>
                        <strong>Кардио</strong>
                        <span>7:00 - 9:00</span>
                    </td>
                    <td>
                        <strong>Силовой Фитнес</strong>
                        <span>7:00 - 9:00</span>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                        <strong>Секция йоги</strong>
                        <span>7:00 - 9:00</span>
                    </td>
                </tr>

                <tr>
                    <td><small>Утренние</small></td>
                    <td></td>
                    <td></td>
                    <td>
                        <strong>Бокс</strong>
                        <span>8:00 - 9:00</span>
                    </td>
                    <td>
                        <strong>Аэробика</strong>
                        <span>8:00 - 9:00</span>
                    </td>
                    <td></td>
                    <td>
                        <strong>Кардио</strong>
                        <span>8:00 - 9:00</span>
                    </td>
                </tr>

                <tr>
                    <td><small>Дневные</small></td>
                    <td>
                        <strong>Бокс</strong>
                        <span>14:00 - 16:00</span>
                    </td>
                    <td>
                        <strong>Бокс</strong>
                        <span>11:00 - 14:00</span>
                    </td>
                    <td>
                        <strong>Аэробика</strong>
                        <span>11:30 - 15:30</span>
                    </td>
                    <td></td>
                    <td>
                        <strong>Тренировка тела</strong>
                        <span>11:50 - 17:20</span>
                    </td>
                </tr>

                <tr>
                    <td><small>Вечерние</small></td>
                    <td></td>
                    <td>
                        <strong>Пауэрлифтинг</strong>
                        <span>15:00 - 18:00</span>
                    </td>
                    <td></td>
                    <td>
                        <strong>Кардио</strong>
                        <span>18:00 - 21:00</span>
                    </td>
                    <td></td>
                    <td>
                        <strong>Кроссфит</strong>
                        <span>17:00 - 19:00</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}