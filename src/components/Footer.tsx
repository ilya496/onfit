import facebookLogo from "../assets/images/facebook.svg";
import instagramLogo from "../assets/images/instagram.svg";
import twitterLogo from "../assets/images/twitter.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__upper">
        <div className="container">
          <ul className="footer__list">
            <li className="footer__item">
              <h2 className="footer__item__title">Свяжитесь с нами</h2>
              <a href="#" className="footer__item__link">
                the quick fox jumps over the lazy dog
              </a>
              <div className="footer__social">
                <img src={facebookLogo} alt="Facebook logo" />
                <img src={instagramLogo} alt="Instagram logo" />
                <img src={twitterLogo} alt="Twitter logo" />
              </div>
            </li>
            <li className="footer__item">
              <h2 className="footer__item__title">Информации</h2>
              <a href="#" className="footer__item__link">
                О нас
              </a>
              <a href="#" className="footer__item__link">
                Перевозчик
              </a>
              <a href="#" className="footer__item__link">
                Мы ищем сотрудников
              </a>
              <a href="#" className="footer__item__link">
                Блог
              </a>
            </li>
            <li className="footer__item">
              <h2 className="footer__item__title">Возможности</h2>
              <a href="#" className="footer__item__link">
                Маркетинг бизнеса
              </a>
              <a href="#" className="footer__item__link">
                Аналитика пользователей
              </a>
              <a href="#" className="footer__item__link">
                Живой чат
              </a>
              <a href="#" className="footer__item__link">
                Неограниченная поддержка
              </a>
            </li>
            <li className="footer__item">
              <h2 className="footer__item__title">Ресурсы</h2>
              <a href="#" className="footer__item__link">
                IOS &amp; Android
              </a>
              <a href="#" className="footer__item__link">
                Посмотреть демонстрацию
              </a>
              <a href="#" className="footer__item__link">
                Клиенты
              </a>
              <a href="#" className="footer__item__link">
                API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__lower__container">
          <h2 className="copyright-title">
            &copy; 2024 <span className="brand-name">Onfit</span>. All Rights
            Reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
