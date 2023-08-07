import React from 'react';
import BookingForm from './bookingForm';

const BookingPage = () => {
  return (
    <div className='container-fluid' style={{padding:`32px`}}>
        <div className='row justify-content-center'>
            <div className='col-lg-6 col-sm-12'>
                <div className='row' style={{marginBottom:`8px`}}>
                    <h1 className='Lora' style={{color: `#face14`}}><b>Little Lemon</b></h1>
                    <h3 className='Lora'>Chicago</h3>
                    <h4 style={{marginTop:`60px`}}>Find a table for any ocassion</h4>
                </div>
                <div className='row' style={{marginBottom:`8px`, paddingLeft:`8px`, paddingRight:`8px`}}>
                    <div className='col-6' style={{height:`120px`, backgroundImage:`url(pic1.jpg)`, backgroundSize: `cover`}}></div>
                    <div className='col-6' style={{height:`120px`, backgroundImage:`url(pic2.jpg)`, backgroundSize: `cover`}}></div>
                </div>
                <BookingForm />
            </div>
        </div>
    </div>
  );
};

export default BookingPage;