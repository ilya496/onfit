import { Route, Routes } from 'react-router-dom'
import './assets/scss/styles.scss';
import Header from './components/Header'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
