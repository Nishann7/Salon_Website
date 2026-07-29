import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Booking Received!\nName: ${formData.name}\nService: ${formData.service}\nDate: ${formData.date}`
    );

    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
    });
  };

  return (
<section id="booking" style={{ padding: '60px 20px', textAlign: 'center' }}>      <h2>Book Appointment</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '400px',
          margin: '20px auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select Service</option>
          <option>Haircut</option>
          <option>Facial</option>
          <option>Hair Color</option>
          <option>Manicure</option>
          <option>Makeup</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            background: '#e91e63',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </section>
  );
}