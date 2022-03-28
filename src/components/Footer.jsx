import cvt from "../images/cvt.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img
          className="footer__image"
          src={cvt}
          alt="Логотип Центра Высоких Технологий"
        />
        <div>
          <div className="footer__text-item">
            <p className="footer__text">
              426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла
              Маркса, 246 (ДК «Металлург»)
            </p>
            <p className="footer__text">+7 (3412) 93-88-61, 43-29-29</p>
          </div>
          <a
            className="footer__link"
            href="https://htc-cs.ru/"
            target="_blank"
            rel="noreferrer"
          >
            htc-cs.ru
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
