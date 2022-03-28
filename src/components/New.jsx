import cat from "../images/cat.jpg";
import bathman from "../images/bathman.jpg";
import hollywood from "../images/hollywood.jpg";
import girl from "../images/girl.jpg";

function New() {
  return (
    <section className="new">
      <h2 className="new__title">🔥 Новинки</h2>
      <div className="movie-items">
        <div className="movie-item">
            <img
              className="movie-item__image"
              src={cat}
              alt="Обложка Мульт в кино"
            />
            <div className="movie-item__overlay">
              <p className="movie-item__text">
                В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша
                научит завязывать шнурки.
              </p>
            </div>
          <p className="movie-item__title">
            Мульт в кино. Выпуск №103. Некогда грустить!
          </p>
        </div>
        <div className="movie-item">
            <img
              className="movie-item__image"
              src={bathman}
              alt="Обложка Бетмана"
            />
            <div className="movie-item__overlay">
              <p className="movie-item__text">
                После двух лет поисков правосудия на улицах Готэма для своих
                сограждан Бэтмен становится олицетворением беспощадного возмездия.
                Когда в городе происходит серия жестоких нападений на
                представителей элиты, улики приводят Брюса Уэйна в самые темные
                закоулки преступного мира, где он встречает Женщину-Кошку,
                Пингвина... Но теперь под прицелом оказывается сам Бэтмен.
              </p>
            </div>
          <p className="movie-item__title">Новый Бэтмен</p>
        </div>
        <div className="movie-item">
            <img
              className="movie-item__image"
              src={hollywood}
              alt="Обложка фильма Однажды в Голливуде"
            />
            <div className="movie-item__overlay">
              <p className="movie-item__text">
                Фильм повествует о череде событий, произошедших в Голливуде в 1969
                году, на закате его «золотого века». Известный актер Рик Далтон и
                его дублер Клифф Бут пытаются найти свое место в стремительно
                меняющемся мире киноиндустрии.
              </p>
            </div>
          <p className="movie-item__title">Однажды... в Голливуде</p>
        </div>
        <div className="movie-item">
            <img
              className="movie-item__image"
              src={girl}
              alt="Обложка фильма стриптизерши"
            />
            <div className="movie-item__overlay">
              <p className="movie-item__text">
                Танцовщицы элитного стриптиз-клуба, клиенты которого — известные
                финансисты с Уолл-Стрит, привыкли к большим заработкам и роскошной
                жизни. Но после финансового кризиса 2008 года посетителей в клубе
                заметно поубавилось, и деньги к девушкам уже не текут рекой.
              </p>
            </div>
          <p className="movie-item__title">Стриптизёрши</p>
        </div>
      </div>
    </section>
  );
}

export default New;
