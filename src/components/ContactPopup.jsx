import "../components/ContactPopup.css";
import React from 'react';

export const ContactPopup = ({ showPopup, handleFormSubmit, setShowPopup, email, subject, message, setEmail, setSubject, setMessage }) => {
  return (
    showPopup && (
      <div id="popup" className="popup-overlay">
        <div className="popup">
          <button className="popup-close-btn" onClick={() => setShowPopup(false)}>Close</button>
          <div className="popup-inner">
            <h3>Send me an email</h3>
            <form onSubmit={handleFormSubmit}>
              <input className="form-input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className="form-input" type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
              <textarea className="form-input form-textarea" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              <button className="popup-submit-btn" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
};
