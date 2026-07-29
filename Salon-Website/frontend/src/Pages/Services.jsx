import './Services.css';

export default function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <div className="service-card">
          <h3>Haircut</h3>
          <p>Professional haircut and styling.</p>
        </div>

        <div className="service-card">
          <h3>Facial</h3>
          <p>Refreshing facial treatments for glowing skin.</p>
        </div>

        <div className="service-card">
          <h3>Hair Color</h3>
          <p>Trendy hair coloring by expert stylists.</p>
        </div>

        <div className="service-card">
          <h3>Manicure</h3>
          <p>Beautiful nail care and manicure service.</p>
        </div>
      </div>
    </section>
  );
}