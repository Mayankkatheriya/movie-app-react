import "./Card.css";
import {useState} from 'react'

const Card = (props) => {
  let [heartStyle , setStyle] = useState({
    color : "white"
  })

  const likeCheck = () => {
    let updatedObj = {...heartStyle}
    if(heartStyle.color === "white"){
      updatedObj.color = "red"
    }
    else {
      updatedObj.color = "white"

    }
    setStyle(updatedObj)
  }

  const shareText = async() => {
    try {
      await navigator.share({
        title: `${props.item.title}`,
        text: `I just read "${props.item.title}" on the Movie-Site App. It was really interesting!`,
      });   
    } catch (err) {
      console.error("error:", err.message);
    }
  }

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${props.item.banner})`, filter: `drop-shadow(0 0 0.75rem ${props.item.color})`}}
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
                <i title = "Share" onClick = {shareText} className="bx bxs-share-alt"></i>
                <i title = "Like" onClick = {likeCheck} className="bx bxs-heart" style = {heartStyle}></i>
                <i title = "Review" className="bx bxs-message-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
