import { Link } from 'react-router-dom'
import { Breadcrumb } from '../components/Breadcrumb'

const careerTracks = [
  {
    title: 'Consulting',
    description: 'Solve complex problems for leading organizations across industries.',
  },
  {
    title: 'Technology',
    description: 'Build digital products and platforms that power our firm and clients.',
  },
  {
    title: 'Business Operations',
    description: 'Enable our firm through finance, HR, marketing, and more.',
  },
  {
    title: 'Analytics & AI',
    description: 'Apply data science and AI to drive impact at scale.',
  },
]

const jobs = [
  { title: 'Associate Consultant', location: 'New York, NY', type: 'Full-time' },
  { title: 'Senior Associate', location: 'London, UK', type: 'Full-time' },
  { title: 'Engagement Manager', location: 'Singapore', type: 'Full-time' },
  { title: 'Software Engineer', location: 'Remote / Hybrid', type: 'Full-time' },
  { title: 'Data Scientist', location: 'Boston, MA', type: 'Full-time' },
  { title: 'Business Analyst', location: 'Chicago, IL', type: 'Full-time' },
  { title: 'Product Manager', location: 'San Francisco, CA', type: 'Full-time' },
  { title: 'Summer Associate', location: 'Multiple locations', type: 'Internship' },
]

export function CareersPage() {
  return (
    <>
      <section className="careers-hero">
        <div className="container">
          <Breadcrumb
            variant="light"
            items={[
              { label: 'Home', path: '/' },
              { label: 'Careers' },
            ]}
          />
          <h1>Build a career with lasting impact</h1>
          <p>
            Join exceptional people working on the challenges that matter. Develop skills, relationships, and a career that makes a difference.
          </p>
          <button type="button" className="btn btn--white">
            Search open roles
          </button>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="career-tracks">
            {careerTracks.map((track) => (
              <div key={track.title} className="career-track">
                <h3>{track.title}</h3>
                <p>{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--gray">
        <div className="container">
          <div className="featured-split">
            <div className="featured-split__image">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt=""
              />
            </div>
            <div className="featured-split__content">
              <h2>Life at McKinsey</h2>
              <p>
                You'll work alongside talented colleagues from diverse backgrounds, tackle problems that matter, and develop skills that will serve you throughout your career.
              </p>
              <p>
                We invest heavily in learning and development, offering mentorship, training programs, and opportunities to grow across practices and geographies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__header">
            <h2>Open positions</h2>
            <p>Explore current opportunities across our global offices.</p>
          </div>
          <ul className="job-list">
            {jobs.map((job) => (
              <li key={job.title} className="job-item">
                <div>
                  <h4>{job.title}</h4>
                  <p className="job-item__meta">
                    {job.location} · {job.type}
                  </p>
                </div>
                <button type="button" className="btn btn--outline">
                  Apply
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Not sure where to start?</h2>
          <p>Learn more about our hiring process and what we look for in candidates.</p>
          <Link to="/contact" className="btn btn--white">
            Contact recruiting
          </Link>
        </div>
      </section>
    </>
  )
}
