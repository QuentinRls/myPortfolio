import React, { useState } from "react";
import "../style/contact.css";

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://your-server-endpoint.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, contactNo, message }),
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setContactNo('');
        setMessage('');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <div className="screen">
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>ME</span>
            </div>
            <div className="app-contact">CONTACT INFO : +33 7 49 09 16 32</div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <form onSubmit={handleSubmit}>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="EMAIL"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group">
                  <input
                    className="app-form-control"
                    placeholder="CONTACT NO"
                    value={contactNo}
                    onChange={(e) => setContactNo(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group message">
                  <input
                    className="app-form-control"
                    placeholder="MESSAGE"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <div className="app-form-group buttons">
                  <button
                    type="button"
                    className="app-form-button"
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setContactNo('');
                      setMessage('');
                    }}
                  >
                    CANCEL
                  </button>
                  <button type="submit" className="app-form-button" disabled={loading}>
                    {loading ? 'Envoi en cours...' : 'SEND'}
                  </button>
                </div>
              </form>
              {success && <p className="success-message">Votre message a été envoyé avec succès !</p>}
              {error && <p className="error-message">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;