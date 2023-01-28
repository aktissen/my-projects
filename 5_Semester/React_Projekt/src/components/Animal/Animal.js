import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext.js";
import { useContext } from "react";
import "./Animal.css";
import "../Button/Button.css";

export default function Animal() {
  const location = useLocation();
  const { id } = location.state;
  const { userInfo } = useContext(DatabaseContext);

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <img
        src={userInfo[0].animals[id].img}
        className="animal-picture"
        alt="animal profile"
      />
      <div className="container-animal">
        <div className="row">
          <BackButton />
          <Headline headline={userInfo[0].animals[id].name} />
          <h5 className="font-link">Profil</h5>
          <div className="animalInfo font-link">
            <h4>Name</h4>
            <p>{userInfo[0].animals[id].name}</p>
            <br />
            <h4>Alter</h4>
            <p>{userInfo[0].animals[id].age}</p>
            <br />
            <h4>Krankheiten</h4>
            {userInfo[0].animals[id].illnesses.map(function (object, i) {
              return <p>{object}</p>;
            })}
            <br />
          </div>
          <div>
            <Link
              className="buttonToNewSite changeButton font-link"
              to="/changeanimal"
              state={{
                id: id,
              }}
            >
              Bearbeiten
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
