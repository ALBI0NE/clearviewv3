import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      subject,
      message,
    };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://94.76.226.44:5000/send-email",
        formData
      );

      if (response.data.success) {
        alert("Email sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        alert("Error sending email. Please try again later.");
      }
    } catch (error) {
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <>
      <div className='contact-section'>
        <h2>Contact us</h2>
        <div className='contact-wrapper'>
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                className='field'
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                className='field'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='text'
                className='field'
                placeholder='Enter the subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows='5'
                cols='60'
                name='message'
                className='field body-msg'
                placeholder='What is your message?'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type='submit' className='submit-button'>
                Send
              </button>
            </form>
          </div>
          <div className='opening-times'>
            <div className='opening-times-wrapper'>
              <div className='opening-times-top'>
                <div className='opening-content'>
                  <h3>Bromsgrove:</h3>
                  <p>
                    123 High Street, Bromsgrove, B61 3EG <br /> 0121 555 1234
                    <br />
                    info@clearviewoptix.co.uk <br />
                    Opening Times: Monday - Friday: 9:00am - 5:30pm; Saturday:
                    9:00am - 1:00pm; Sunday: Closed
                  </p>
                </div>
                <div className='opening-content'>
                  <h3>Worcester:</h3>
                  <p>
                    456 London Road, Worcester, WR5 2JN <br /> 01905 555 6789
                    <br />
                    info@clearviewoptix.co.uk <br />
                    Opening Times: Monday - Friday: 9:00am - 5:30pm; Saturday:
                    9:00am - 1:00pm; Sunday: Closed
                  </p>
                </div>
              </div>
              <div className='opening-times-bottom'>
                <div className='opening-content'>
                  <h3>Malvern:</h3>
                  <p>
                    789 Church Street, Malvern, WR14 2AA <br />
                    01684 555 9999 <br />
                    info@clearviewoptix.co.uk <br />
                    Opening Times: Monday - Friday: 9:00am - 5:30pm; Saturday:
                    9:00am - 1:00pm; Sunday: Closed
                  </p>
                </div>
                <div className='opening-content'>
                  <h3>Pershore:</h3>
                  <p>
                    101 Bridge Street, Pershore, WR10 1AJ <br />
                    01386 555 4444 <br />
                    info@clearviewoptix.co.uk <br />
                    Opening Times: Monday - Friday: 9:00am - 5:30pm; Saturday:
                    9:00am - 1:00pm; Sunday: Closed
                  </p>
                </div>
              </div>
              <div className='opening-time-center'>
                <p>
                  Please note that our opening times are subject to change. If
                  you are unsure about our opening hours, please don't hesitate
                  to contact us by phone or email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
