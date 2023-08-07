import React, { useState } from 'react';

const BookingForm = () => {
  const [numPeople, setNumPeople] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [reservationTime, setReservationTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [seatingOption, setSeatingOption] = useState('indoor');

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const handleDateChange = (e) => {
    setReservationDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setReservationTime(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSeatingOptionChange = (e) => {
    setSeatingOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the booking details to a server
    // You can also show a confirmation message or redirect to another page after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row' style={{paddingLeft:`8px`, paddingRight:`8px`}}>
          <input
            className='col-6'
            type="date"
            value={reservationDate}
            onChange={handleDateChange}
            required
          />
          <input
            className='col-6'
            type="time"
            value={reservationTime}
            onChange={handleTimeChange}
            required
          />
      </div>

      <div className='row' style={{marginTop:`16px`, paddingLeft:`8px`, paddingRight:`8px`}}>
        <select className='col-12' value={numPeople} onChange={handleNumPeopleChange} required>
            <option value="" disabled>Number of People</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
      </div>

      <div className='row' style={{marginTop:`16px`, paddingLeft:`8px`, paddingRight:`8px`}}>
        <input
            className='col-12'
            type="text"
            value={occasion}
            onChange={handleOccasionChange}
            placeholder='Occasion'
        />
      </div>

      <div className='row' style={{marginTop:`16px`}}>
        <p>Seating Option:</p>
        <label>
          <input
            type="radio"
            value="indoor"
            checked={seatingOption === 'indoor'}
            onChange={handleSeatingOptionChange}
          />
          Indoor
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="outdoor"
            checked={seatingOption === 'outdoor'}
            onChange={handleSeatingOptionChange}
          />
          Outdoor
        </label>
      </div>

      <button className='submitBtn' type="submit" style={{marginTop:`24px`}}>Let's Go</button>
    </form>
  );
};

export default BookingForm;