import "./Card.css";

const Card = (props) => {
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${props.item.banner})` }}
    >
      <div className="info">
        <div className="container">
          <div className="content">
            <div className="image">
              <img src={props.item.poster} alt="img-1" />
            </div>
            <div className="details">
              <h1>{props.item.title}</h1>
              <div className="text">{props.item.dels}</div>
              <div className="text">{props.item.lang}</div>
              <div className="text">{props.item.desc}</div>
              <div className="card-icons">
                <i className="bx bxs-share-alt"></i>
                <i className="bx bxs-heart"></i>
                <i className="bx bxs-message-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
