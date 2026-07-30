import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Booking from './Pages/Booking';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/test')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Services />

      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h3>Backend Status:</h3>
        <p>{message}</p>
      </div>

      <Booking />
    </>
  );
}

export default App;