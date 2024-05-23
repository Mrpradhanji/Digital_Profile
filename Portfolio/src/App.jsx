import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className='flex-grow'>
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path="/" element={<About/>} /> 
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
