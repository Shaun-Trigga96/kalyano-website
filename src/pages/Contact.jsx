import React, { useState } from 'react';
import styles from './contact.module.css';

// Contact Page
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Contact Us</h1>
        <p className={styles.subtitle}>Let's create something amazing together</p>
        
        <div className={styles.contentGrid}>
          {/* Contact Information */}
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Get in Touch</h2>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.infoItemTitle}>Phone</h3>
                  <p className={styles.infoItemText}>067 681 7119</p>
                  <p className={styles.infoItemText}>068 247 6726</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.infoItemTitle}>Email</h3>
                  <p className={styles.infoItemText}>contact@kalyano.com</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.iconContainer}>
                  <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className={styles.infoItemTitle}>Location</h3>
                  <p className={styles.infoItemText}>Cape Town, South Africa</p>
                </div>
              </div>
            </div>

            <div className={styles.noticeCard}>
              <h3 className={styles.noticeTitle}>📅 Booking Notice</h3>
              <p className={styles.noticeText}>
                Limited slots available each month. Contact us early to secure your preferred date for your video shoot.
              </p>
            </div>

            <div className={styles.hoursCard}>
              <h3 className={styles.hoursTitle}>🕒 Business Hours</h3>
              <div className={styles.hoursList}>
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> By appointment only</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <div className={styles.formFields}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your full name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your phone number"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  <option value="">Select a service</option>
                  <option value="basic">Basic Package (R1,400)</option>
                  <option value="standard">Standard Package (R3,000)</option>
                  <option value="premium">Premium Cinematic Package (R6,000+)</option>
                  <option value="consultation">Consultation (R150)</option>
                  <option value="rush">Rush Delivery (+R500)</option>
                  <option value="other">Other - Please specify in message</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={styles.formTextarea}
                  placeholder="Tell us about your project, preferred dates, and any specific requirements..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className={styles.formButton}
              >
                Send Message
              </button>
            </div>

            <div className={styles.formNote}>
              <p>We typically respond within 24 hours during business days</p>
            </div>
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className={styles.quickContactSection}>
          <h2 className={styles.quickContactTitle}>Quick Contact</h2>
          <div className={styles.quickContactGrid}>
            <div className={styles.quickContactCard}>
              <div className={`${styles.quickContactIconContainer} ${styles.whatsappIconContainer}`}>
                <svg className={`${styles.quickContactIcon} ${styles.whatsappIcon}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.51 3.488"/>
                </svg>
              </div>
              <h3 className={styles.quickContactCardTitle}>WhatsApp</h3>
              <p className={styles.quickContactCardText}>Instant messaging</p>
              <button className={`${styles.quickContactButton} ${styles.whatsappButton}`}>
                Chat Now
              </button>
            </div>

            <div className={styles.quickContactCard}>
              <div className={`${styles.quickContactIconContainer} ${styles.callIconContainer}`}>
                <svg className={`${styles.quickContactIcon} ${styles.callIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className={styles.quickContactCardTitle}>Call Direct</h3>
              <p className={styles.quickContactCardText}>Speak with us directly</p>
              <button className={`${styles.quickContactButton} ${styles.callButton}`}>
                Call Now
              </button>
            </div>

            <div className={styles.quickContactCard}>
              <div className={`${styles.quickContactIconContainer} ${styles.bookIconContainer}`}>
                <svg className={`${styles.quickContactIcon} ${styles.bookIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 6v6m-6-6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className={styles.quickContactCardTitle}>Book Consultation</h3>
              <p className={styles.quickContactCardText}>Schedule a meeting</p>
              <button className={`${styles.quickContactButton} ${styles.bookButton}`}>
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <div className={styles.mapCard}>
            <h2 className={styles.mapTitle}>Find Us</h2>
            <div className={styles.mapContent}>
              <div className={styles.mapContentInner}>
                <svg className={styles.mapIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className={styles.mapContentTitle}>Cape Town, South Africa</h3>
                <p className={styles.mapContentText}>Serving the greater Cape Town area</p>
                <p className={styles.mapContentNote}>Map integration available upon request</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqCard}>
            <div className={styles.faqItems}>
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How far in advance should I book?</h3>
                <p className={styles.faqAnswer}>We recommend booking at least 2-3 weeks in advance, especially for weekend shoots. Our calendar fills up quickly due to limited monthly slots.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What's included in the Basic Package?</h3>
                <p className={styles.faqAnswer}>The Basic Package (R1,400) includes professional filming, basic editing, and delivery of your final video. Perfect for simple projects and social media content.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>Do you travel outside Cape Town?</h3>
                <p className={styles.faqAnswer}>Yes, we can travel for shoots outside Cape Town. Additional travel costs may apply depending on the location and distance.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>How long does editing take?</h3>
                <p className={styles.faqAnswer}>Standard editing takes 5-7 business days. Rush delivery is available for an additional R500 and guarantees delivery within 2-3 business days.</p>
              </div>
              
              <div className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>What payment methods do you accept?</h3>
                <p className={styles.faqAnswer}>We accept bank transfers, cash, and most major credit cards. A 50% deposit is required to secure your booking, with the remainder due upon completion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;