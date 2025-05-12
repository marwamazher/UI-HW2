import React, { useState } from 'react';
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
    setFormData({
      name: '',
      email: '',
      subject: ''
    });
  }

  return (
    <div className="contact-form">
      <h1 style={{textAlign: "center", padding:"20px", color: "#3b000e"}}>Contact Us</h1>
      <p style={{textAlign: "center", fontSize:"14px", marginBottom:"20px"}}>If you have any questions or concerns, fill in the form below and we will get back to you soon!</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: '200px' }}
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
