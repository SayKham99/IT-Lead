import React from 'react'
import './form.scss'
function Form() {
    return (<section className='form'>
        <div className='wrapper'>
            <form className='address'>
                <div className='inputGroup'>
                    <label htmlFor='fullname'>Имя Фамилия</label>
                    <input className='input' type="text" id='fullname'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='Address'>Адрес</label>
                    <input className='input' type="text" id='Address'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='home'>Дом</label>
                    <input className='input' type="text" id='home'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='number'>Квартира</label>
                    <input className='input' type="text" id='number'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='phoneNumber'>Телефон</label>
                    <input className='input' type="tel" id='phoneNumber'/>
                </div>
                <div className='inputGroup'>
                    <label htmlFor='email'>E-Mail</label>
                    <input className='input' type="email" id='email'/>
                </div>
            </form>
            <div className='comment'></div>
        </div>
    </section>)
}

export default Form