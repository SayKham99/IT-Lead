import React from 'react'
import './form.scss'
import {useForm} from 'react-hook-form'


function Form() {
    const {register, handleSubmit, formState: {errors}, watch, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data)
        reset();
    }

    return (<section className='form'>
        <form className='wrapper' onSubmit={handleSubmit(onSubmit)}>
            <div className='address'>
                <div className='inputg'>
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" id='fullname' className='input'
                           {...register('fullName', {required: true})}
                    />
                </div>
                <div className='inputg'>
                    <label htmlFor="address">Address</label>
                    <input type="text" id='addrres' className='input'
                           {...register('address', {required: true})}
                    />
                </div>
                <div className='inputg'>
                    <label htmlFor="home">Home</label>
                    <input type="text" id='home' className='input'
                           {...register('home', {required: true})}
                    />
                </div>
                <div className='inputg'>
                    <label htmlFor="room">Room</label>
                    <input type="text" id='room' className='input'
                           {...register('room', {required: true})}
                    />
                </div>
                <div className='inputg'>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id='phone' className='input'
                           {...register('phone', {required: true})}
                    />
                </div>
                <div className='inputg'>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id='room' className='input'
                           {...register('room', {required: true})}
                    />
                </div>
            </div>
            <div className='comment'>
                <div className='text'>
                    <label htmlFor='commit'>Comment</label>
                    <textarea id='commit' className='commits'
                              {...register('commit', {required: true})}
                    ></textarea>
                </div>
                <button type="submit" className='submit'>Submit Buying</button>
            </div>
        </form>
    </section>)
}

export default Form