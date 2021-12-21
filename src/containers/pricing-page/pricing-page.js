import React, {useState} from 'react';
import styles from "../../styles/sass/pricing.module.sass";
import controls from "../../styles/sass/controls.module.sass";

import Input from "../../components/controls/input";
import Textarea from "../../components/controls/textarea";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export default function PricingPage(){
    const options = [
        'Абонемент в зал',
        'Персональные тренировки',
        'Массаж',
    ];
    const [category, setCategory] = useState('Абонемент в зал');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [duration, setDuration] = useState('');
    const [amount, setAmount] = useState('');
    return (
        <>
            <section className={['container-fluid',  styles.pricing].join(' ')}>
                <div className={['container',  styles.pricingContainer].join(' ')}>
                    <div className="row">
                        <div className={['col-auto', styles.pricingForm].join(' ')}>
                            <div className={['row', 'justify-content-center', styles.heading].join(' ')}>
                                <div className="col-auto">
                                    Хотите узнать стоимость услуг? Обратитесь к нам!
                                </div>
                            </div>
                            <div className="row">
                                <Dropdown className={[controls.dropdown].join(' ')} onChange={(e)=>{
                                    setCategory(e.value);
                                }}
                                          options={options} value={'Абонемент в зал'} placeholder="Выберете категорию"/>
                            </div>
                            <div className="row">
                                {category === 'Абонемент в зал' ?  <Input placeholder='На сколько месяцев планируете приобрести'
                                                                          onChange={(e)=>setDuration(e.target.value)}/>
                                                                :  <Input placeholder='Сколько посещений хотите приобрести'
                                                                          onChange={(e)=>setAmount(e.target.value)}/>}

                            </div>
                            <div className="row">
                                <Input placeholder='Имя' onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <div className="row">
                                <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="row">
                                <Input placeholder='Телефон' onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div className="row">
                                <Textarea placeholder='Сообщение' onChange={(e)=>setText(e.target.value)}/>
                            </div>
                            <div className="row">
                                <button className='special-link-filled'>
                                    Расчитать стоимость
                                </button>
                            </div>
                        </div>
                        <div className="col mt-5">
                            <div className="row justify-content-center">
                                <div className={['col-auto', styles.pricingsubheading].join(' ')}>
                                    перезвоним в течении 5-ти минут
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className={['col-auto', 'text-center', styles.pricingheading].join(' ')}>
                                    Оставьте заявку на расчет стоимости, наш менеджер перезвонит вам!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}