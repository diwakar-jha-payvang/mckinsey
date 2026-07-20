import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../data/navigation'
import { Toast } from './Toast'

export function Footer() {
  const [email, setEmail] = useState('')
  const [toastEmail, setToastEmail] = useState<string | null>(null)

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedEmail = email.trim()
    if (!trimmedEmail) return

    setToastEmail(trimmedEmail)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div>
            <h3>Stay informed with our latest insights</h3>
            <p>Get our newsletter delivered to your inbox with the latest thinking on business and management.</p>
          </div>
          <form className="footer__form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="footer__input"
              placeholder="Enter your email"
              aria-label="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <button type="submit" className="btn btn--footer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__links">
        <div className="footer__column">
          <h4>Explore</h4>
          <ul>
            {footerLinks.explore.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column">
          <h4>About</h4>
          <ul>
            {footerLinks.about.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__column">
          <h4>Connect</h4>
          <div className="footer__social">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">X</a>
            <a href="#facebook">Facebook</a>
            <a href="#youtube">YouTube</a>
          </div>
          <p style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
            Download the McKinsey Insights app for leadership and business insights on the go.
          </p>
        </div>
        <div className="footer__column">
          <h4>Legal</h4>
          <ul>
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 KuberPayment. All rights reserved.</p>
        <div className="footer__legal">
          {footerLinks.legal.map((link) => (
            <Link key={link.label} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {toastEmail && (
        <Toast
          message="Subscribed successfully"
          detail={toastEmail}
          onClose={() => setToastEmail(null)}
        />
      )}
    </footer>
  )
}
