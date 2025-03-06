import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-section">
          <h1>Call to us</h1>
          <p>We are available 24/7, 7 days a week</p>
          <p>Phone: +8801611112222</p>
        </div>

        <div className="contact-section">
          <h1>Write to us</h1>
          <pre>
            Fill out our form and we will contact
            you within 24 hours
          </pre>
          <p>Email: customer@exclusive.com</p>
          <p>Email: support@exclusive.com</p>
        </div>
      </div>

      <div className="contact-form">
        <input type="text" placeholder='Your Name' className="input-field" />
        <input type="email" placeholder='Your Email' className="input-field" />
        <textarea placeholder='Your Message' className="input-field" rows="4"></textarea>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default Contact;