import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/dan-seng',
      icon: faGithub,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daniel-gidey-40497337a/',
      icon: faLinkedin,
      color: '#0077b5'
    },
    {
      name: 'Email',
      url: 'mailto:da16gi@gmail.com',
      icon: faEnvelope,
      color: '#ea4335'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-items">
              <div className="contact-item glass-card">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Mekelle, Ethiopia</p>
                </div>
              </div>
              
              <div className="contact-item glass-card">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>da16gi@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item glass-card">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+251 945 012 123</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                    style={{ '--social-color': social.color }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-card">
            <h3 className='dada'>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                >Hi Daniel, I'd like to discuss a potential project</textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
