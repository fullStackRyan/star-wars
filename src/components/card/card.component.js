import "./card.styles.css";

const Card = ({ characters, image }) => {
  const { name, mass, height, hair_color, gender } = characters;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="Avatar" className="card-image" />
        </div>
        <div className="flip-card-back">
          <h3>{name}</h3>
          <p>mass: {mass}</p>
          <p>height: {height}</p>
          <p>hair color: {hair_color}</p>
          <p>gender: {gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
