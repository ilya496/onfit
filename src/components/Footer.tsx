import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__item">
            <h3 className="footer__title">About us</h3>
            <p className="footer__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quidem.</p>
          </div>
          <div className="footer__item">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__list">
              <li className="footer__list-item"><a href="/" className="footer__link">Web Design</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Development</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Hosting</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Search Engine Optimization</a></li>
            </ul>
          </div>
          <div className="footer__item">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list">
              <li className="footer__list-item"><a href="/" className="footer__link">+44 987 065 908</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Lorem, ipsum.</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Lorem ipsum dolor.</a></li>
              <li className="footer__list-item"><a href="/" className="footer__link">Lorem ipsum dolor sit.</a></li>
            </ul>
          </div>
        </div> 
      </div>
    </footer>
  )
}

export default Footer