import "./clients.scss"
import Button from "../Button/Button"

const Clients = () =>
{
  return (
    <section className="clients-section-container">
      <div className="clients-section-content">
        <div className="left-section">
          <div className="major-clients-icons">
            <img
              src="/images/logo/sony-logo.png"
              alt="sony logo"
              loading="lazy"
            />
            <img
              src="/images/logo/canon-logo.png"
              alt="oreo logo"
              loading="lazy"
            />
            <img
              src="/images/logo/haier-logo.png"
              alt="vaseline logo"
              loading="lazy"
            />

            <img
              src="/images/logo/lenovo-logo.png"
              alt="kit kat logo"
              loading="lazy"
            />
            <img
              src="/images/logo/samsung-logo.png"
              alt="lenovo logo"
              loading="lazy"
            />
            <img
              src="/images/logo/netflix-logo.png"
              alt="samsung logo"
              loading="lazy"
            />


          </div>
        </div>
        <div className="right-section">
          <h1>The go-to agency for effective influencer campaigns.</h1>
          <p>
            Our clients are the top-tier brands across all industries, from
            startups to global corporations. They share a common demand: an
            influencer marketing agency that prioritizes measurable outcomes
            over superficial metrics.
          </p>
          <Button text="see all clients" />
        </div>
      </div>
    </section>
  )
}

export default Clients
