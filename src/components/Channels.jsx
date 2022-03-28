import { Scrollbars } from "react-custom-scrollbars";

import first from "../images/first.png";
import two from "../images/two.png";
import RBK from "../images/RBK.png";
import Amedia from "../images/Amedia.png";
import Discovery from "../images/Discovery.png";

function Channels() {
  return (
    <section className="channels">
      <Scrollbars style={{ width: 1180, height: 696 }}   
        >
        <div className="channel">
          <img
            className="channel__logo"
            src={first}
            alt="Логотип Первого канала"
          />
          <div>
            <h2 className="channel__title">Первый канал</h2>
            <p className="channel__text">
              <span className="channel__time">13:00</span>Новости (с субтитрами)
            </p>
            <p className="channel__text">
              <span className="channel__time">14:00</span>Давай поженимся
            </p>
            <p className="channel__text">
              <span className="channel__time">15:00</span>Другие новости
            </p>
          </div>
        </div>
        <div className="channel">
          <img
            className="channel__logo"
            src={two}
            alt="Логотип телеканала Дважды два"
          />
          <div>
            <h2 className="channel__title">2&times;2</h2>
            <p className="channel__text">
              <span className="channel__time">13:00</span>МУЛЬТ ТВ. Сезон 4, 7
              серия
            </p>
            <p className="channel__text">
              <span className="channel__time">14:00</span>ПОДОЗРИТЕЛЬНАЯ СОВА.
              Сезон 7, 7 серия
            </p>
            <p className="channel__text">
              <span className="channel__time">15:00</span>БУРДАШЕВ. Сезон 1, 20
              серия
            </p>
          </div>
        </div>
        <div className="channel">
          <img
            className="channel__logo"
            src={RBK}
            alt="Логотип телеканала РБК"
          />
          <div>
            <h2 className="channel__title">РБК</h2>
            <p className="channel__text">
              <span className="channel__time">13:00</span>ДЕНЬ. Горючая смесь:
              как бороться с суррогатом на АЗС
            </p>
            <p className="channel__text">
              <span className="channel__time">14:00</span>ДЕНЬ. Главные темы
            </p>
            <p className="channel__text">
              <span className="channel__time">15:00</span>Главные новости
            </p>
          </div>
        </div>
        <div className="channel">
          <img
            className="channel__logo"
            src={Amedia}
            alt="Логотип телеканала AMEDIA"
          />
          <div>
            <h2 className="channel__title">AMEDIA PREMIUM</h2>
            <p className="channel__text">
              <span className="channel__time">13:00</span>Клиент всегда мёртв
            </p>
            <p className="channel__text">
              <span className="channel__time">14:00</span>Голодные игры:
              Сойка-пересмешница. Часть I
            </p>
            <p className="channel__text">
              <span className="channel__time">15:00</span>Секс в большом городе
            </p>
          </div>
        </div>
        <div className="channel">
          <img
            className="channel__logo"
            src={Discovery}
            alt="Логотип телеканала Discovery"
          />
          <div>
            <h2 className="channel__title">Discovery</h2>
            <p className="channel__text">
              <span className="channel__time">13:00</span>Как устроена Вселенная
            </p>
            <p className="channel__text">
              <span className="channel__time">14:00</span>Выжить любой ценой
            </p>
            <p className="channel__text">
              <span className="channel__time">15:00</span>Как это устроено
            </p>
          </div>
        </div>
      </Scrollbars>
    </section>
  );
}

export default Channels;
