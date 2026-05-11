import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ← Paste your EmailJS credentials here
const EMAILJS_SERVICE_ID  = 'service_vvhpg5i'
const EMAILJS_TEMPLATE_ID = 'template_rnlq0du'
const EMAILJS_PUBLIC_KEY  = 'I1vIxir8cr8kAhgsM'

const Contact = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error(err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="contact" id="contact">
      <Container fluid="xxl" className="px-4">
        <Row className="align-items-start g-5">

          {/* Left — info */}
          <Col lg={5}>
            <span className="contact__eyebrow">Contact</span>
            <h2 className="contact__title">Got a question?<br />Shoot us an email.</h2>
            <p className="contact__sub">
              Whether you're a civic body, researcher, or fellow developer — we'd love
              to hear from you. Reach out and we'll get back as soon as possible.
            </p>

            <div className="contact__info-list">
              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Email</div>
                  <div className="contact__info-value">devanshuasm750@gmail.com</div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Organisation</div>
                  <div className="contact__info-value">MRSAC, Nagpur, Maharashtra</div>
                </div>
              </div>

              <div className="contact__info-item">
                <div className="contact__info-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <div className="contact__info-label">Response Time</div>
                  <div className="contact__info-value">Usually within 24 hours</div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right — form */}
          <Col lg={7}>
            <div className="contact__form-wrap">
              <form ref={formRef} onSubmit={handleSubmit} className="contact__form">

                <Row className="g-3">
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className="form-control gs-input"
                        required
                      />
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="form-control gs-input"
                        required
                      />
                    </div>
                  </Col>
                </Row>

                <div className="form-group mt-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your query, collaboration idea, or feedback..."
                    className="form-control gs-input gs-textarea"
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' && (
                    <>
                      <span className="contact__spinner" />
                      Sending...
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                  {status === 'success' && '✓ Message sent successfully!'}
                  {status === 'error'   && '✗ Something went wrong. Try again.'}
                </button>

              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact