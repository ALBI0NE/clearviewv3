import React, { useState } from "react";
import axios from "axios";

function BookingForm() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [location, setLocation] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      firstName,
      secondName,
      email,
      phoneNumber,
      appointmentTime,
      appointmentType,
      location,
      bookingDate,
      additionalInfo,
    };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://94.76.226.44:5001/make-booking",
        formData
      );

      if (response.data.success) {
        alert("Email sent successfully!");
        setTitle("");
        setFirstName("");
        setSecondName("");
        setEmail("");
        setPhoneNumber("");
        setAppointmentTime("");
        setAppointmentType("");
        setLocation("");
        setBookingDate("");
        setAdditionalInfo("");
      } else {
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <div className='booking-section'>
        <h2>Book an Appointment</h2>
        <p>
          To book an appointment at Clear View Opticians, simply fill out the
          form below with your details, and we'll get back to you as soon as
          possible to confirm your appointment.
        </p>
        <div className='booking-wrapper'>
          <div className='booking-form'>
            <form onSubmit={handleSubmit}>
              <div className='top-booking'>
                <div className='top-booking-content'>
                  <select
                    className='booking-field title-field'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  >
                    <option value='' disabled>
                      Title*
                    </option>
                    <option value='Mr'>Mr</option>
                    <option value='Mrs'>Mrs</option>
                    <option value='Ms'>Ms</option>
                    <option value='Dr'>Dr</option>
                  </select>

                  <input
                    type='text'
                    className='booking-field name-field booking-field-100'
                    placeholder='First Name*'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <input
                    type='text'
                    className='booking-field last-field booking-field-100'
                    placeholder='Last Name*'
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <input
                type='email'
                className='booking-field '
                placeholder='Your e-mail*'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type='number'
                className='booking-field '
                placeholder='Mobile number*'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <div className='top-booking'>
                <div className='top-booking-content'>
                  <select
                    className='booking-field booking-field-100'
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    required
                  >
                    <option value=''>Select an appointment time*</option>
                    <optgroup label='Monday - Friday'>
                      <option value='09:00am'>9:00am</option>
                      <option value='10:00am'>10:00am</option>
                      <option value='11:00am'>11:00am</option>
                      <option value='12:00pm'>12:00pm</option>
                      <option value='01:00pm'>1:00pm</option>
                      <option value='02:00pm'>2:00pm</option>
                      <option value='03:00pm'>3:00pm</option>
                      <option value='04:00pm'>4:00pm</option>
                      <option value='05:00pm'>5:00pm</option>
                    </optgroup>
                    <optgroup label='Saturday'>
                      <option value='09:00am'>9:00am</option>
                      <option value='10:00am'>10:00am</option>
                      <option value='11:00am'>11:00am</option>
                      <option value='12:00pm'>12:00pm</option>
                      <option value='01:00pm'>1:00pm</option>
                    </optgroup>
                  </select>

                  <select
                    className='booking-field booking-field-100'
                    value={appointmentType}
                    onChange={(e) => setAppointmentType(e.target.value)}
                    required
                  >
                    <option value='' disabled hidden>
                      Select appointment type*
                    </option>
                    <option value='Comprehensive Eye Exam'>
                      Comprehensive Eye Exam
                    </option>
                    <option value='Prescription Lenses'>
                      Prescription Lenses
                    </option>
                    <option value='Frame Fitting'>Frame Fitting</option>
                    <option value='Contact Lens Fitting'>
                      Contact Lens Fitting
                    </option>
                    <option value='Lens Options'>Lens Options</option>
                    <option value='Follow-Up Care'>Follow-Up Care</option>
                  </select>

                  <input
                    type='date'
                    className='booking-field booking-field-100'
                    placeholder='Select a date*'
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <select
                className='booking-field'
                placeholder='Where would you like your appointment?*'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              >
                <option value='' disabled hidden>
                  Select location
                </option>
                <option value='Worcester'>Worcester</option>
                <option value='Bromsgrove'>Bromsgrove</option>
                <option value='Pershore'>Pershore</option>
                <option value='Malvern'>Malvern</option>
              </select>
              <textarea
                rows='5'
                cols='60'
                name='message'
                className='booking-field body-msg'
                placeholder='Additional information'
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
              />
              <button type='submit' className='submit-button'>
                Make a booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
