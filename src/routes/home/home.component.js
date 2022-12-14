import React, { useState, useEffect } from "react";
import Button from "../../components/button/button.component";
import CardList from "../../components/card-list/card-list.component";
import { fetchStarWarsInfo } from "../../utils/data.utils";
import { useParams, useNavigate } from "react-router-dom";
import PageNumber from "../../components/page-number/page-number.component";
import "./home.styles.css";
import { useDispatch } from "react-redux";
import {
  setCurrentCharacters,
  sortByMass,
} from "../../store/characters/characters.slice";

const Home = () => {
  const { id = "1" } = useParams();
  const [page, setPage] = useState(parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementPage = () => {
    navigate(`/characters/${page + 1}`);
    setPage(page + 1);
  };
  const decrementPage = () => {
    navigate(`/characters/${page - 1}`);
    setPage(page - 1);
  };

  useEffect(() => {
    fetchStarWarsInfo(page).then((data) =>
      dispatch(setCurrentCharacters(data.results))
    );
  }, [page, dispatch]);

  return (
    <div>
      <PageNumber number={page} />
      <div className="buttons-container">
        <Button
          disabled={page <= 1}
          onClick={decrementPage}
          buttonType={page <= 1 ? "disabled" : "notDisabled"}
        >
          Previous
        </Button>
        <Button onClick={() => dispatch(sortByMass())}>
          Sort By
          <br />
          Mass
        </Button>
        <Button
          disabled={page >= 9}
          onClick={incrementPage}
          buttonType={page >= 9 ? "disabled" : "notDisabled"}
        >
          Next
        </Button>
      </div>
      <CardList />
    </div>
  );
};

export default Home;
