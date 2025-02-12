// App.js или App.jsx
import { useState } from 'react';
import Header from './components/header'; // Убедитесь, что путь правильный
import Hero from './components/mainPageComponents'; // Убедитесь, что путь правильный
import './App.css';
import './normalize.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Container">
      <Header />
      <Hero />
    </div>
  );
}

export default App;