import './Home.css';

export default function Home() {
  return (
    <div className="home" id="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Glow & Style Salon</h1>
          <p>
            Professional hair, beauty, and bridal services in Nepal
          </p>
          <section className="stats">
  <div>
    <h3>500+</h3>
    <p>Happy Clients</p>
  </div>

  <div>
    <h3>10+</h3>
    <p>Expert Stylists</p>
  </div>

  <div>
    <h3>5★</h3>
    <p>Average Rating</p>
  </div>
</section>

          {/* Scroll to booking section */}
          <a href="#booking" className="hero-btn">
  Book Appointment
</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="card">
            <h3>Haircut</h3>
            <p>Modern haircut and styling for all ages.</p>
          </div>

          <div className="card">
            <h3>Hair Color</h3>
            <p>Trendy coloring and highlighting services.</p>
          </div>

          <div className="card">
            <h3>Facial</h3>
            <p>Skin care treatments for a healthy glow.</p>
          </div>

          <div className="card">
            <h3>Bridal Makeup</h3>
            <p>Complete bridal beauty packages.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>

        <p>
          We are a modern beauty salon dedicated to providing premium beauty
          services with experienced stylists and a relaxing environment.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Clients Say</h2>

        <div className="testimonial-grid">
          <div className="card">
            <p>“Amazing haircut and friendly staff!”</p>
            <strong>- Sita</strong>
          </div>

          <div className="card">
            <p>“Best bridal makeup experience in town.”</p>
            <strong>- Priya</strong>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>

        <p>📍 Kathmandu, Nepal</p>
        <p>📞 +977-98XXXXXXXX</p>
        <p>✉️ hello@glowstyle.com</p>
      </section>
    </div>
  );
}