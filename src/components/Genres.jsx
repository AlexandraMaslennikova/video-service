function Genres() {
  return (
    <section className="genres">
      <h2 className="genres__title">Жанры</h2>
      <div className="genres-items">
        <div className="genres-item">
            <span className="genres-item__emoji">😁</span>
            <h3 className="genres-item__title">Комедии</h3>
        </div>
        <div className="genres-item">
            <span className="genres-item__emoji">😭</span>
            <h3 className="genres-item__title">Драмы</h3>
        </div>
        <div className="genres-item">
            <span className="genres-item__emoji">👽</span>
            <h3 className="genres-item__title">Фантастика</h3>
        </div>
        <div className="genres-item">
            <span className="genres-item__emoji">👻</span>
            <h3 className="genres-item__title">Ужасы</h3>
        </div>
      </div>
    </section>
  );
}

export default Genres;
