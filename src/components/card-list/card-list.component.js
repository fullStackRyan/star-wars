import "./card-list.styles.css";
import Card from "../card/card.component";
import { extractId } from "../../utils/data.utils";
import { useSelector } from "react-redux";
import { selectCurrentCharacters } from "../../store/characters/characters.selector";

const CardList = () => {
  const characters = useSelector(selectCurrentCharacters);

  return (
    <div className="card-list">
      {characters?.map((character, index) => (
        <Card
          characters={character}
          key={index}
          image={`https://starwars-visualguide.com/assets/img/characters/${extractId(
            character.url
          )}.jpg`}
        />
      ))}
    </div>
  );
};

export default CardList;
