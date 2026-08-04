import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
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

      <div style={{ textAlign: 'center', margin: '30px 0', color: 'green' }}>
        <strong>Backend Status:</strong> {message}
      </div>

      <Booking />
    </>
  );
}

export default App;