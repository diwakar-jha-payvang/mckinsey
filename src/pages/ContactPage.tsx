import { Breadcrumb } from '../components/Breadcrumb'

const offices = [
  { city: 'New York', address: '711 Third Avenue, New York, NY 10017', phone: '+1 212 415 1000' },
  { city: 'London', address: '1 Pancras Square, London N1C 4AG, UK', phone: '+44 20 7933 3000' },
  { city: 'Singapore', address: '1 Raffles Quay, Singapore 048583', phone: '+65 6586 1000' },
]

export function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]} />
          <h1>Contact Us</h1>
          <p>
            We'd like to hear from you. Reach out to discuss how we can help your organization.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2 style={{ marginBottom: 24 }}>Send us a message</h2>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" />
              </div>
              <div className="form-group">
                <label htmlFor="topic">Topic</label>
                <select id="topic" name="topic">
                  <option value="">Select a topic</option>
                  <option value="consulting">Consulting services</option>
                  <option value="careers">Careers</option>
                  <option value="media">Media inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>
              <button type="submit" className="btn btn--primary">
                Submit
              </button>
            </form>
          </div>

          <div>
            <h2 style={{ marginBottom: 24 }}>Our offices</h2>
            {offices.map((office) => (
              <div key={office.city} className="location-card" style={{ marginBottom: 16 }}>
                <h4>{office.city}</h4>
                <p>{office.address}</p>
                <p style={{ marginTop: 8 }}>{office.phone}</p>
              </div>
            ))}
            <p style={{ marginTop: 24, fontSize: 14, color: 'var(--mck-text-muted)' }}>
              For media inquiries, please contact our global communications team. For career questions, visit our careers page.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
