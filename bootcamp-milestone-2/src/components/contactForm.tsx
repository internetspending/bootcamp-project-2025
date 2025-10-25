import React, { useState } from 'react';
import style from './contactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <div className={style.formGroup}>
        <label htmlFor="name" className={style.label}>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={style.input}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="email" className={style.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={style.input}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="subject" className={style.label}>Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={style.input}
          required
        />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="message" className={style.label}>Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={style.textarea}
          rows={6}
          required
        />
      </div>

      <button type="submit" className={style.submitButton}>
        Send Message
      </button>
    </form>
  );
}
