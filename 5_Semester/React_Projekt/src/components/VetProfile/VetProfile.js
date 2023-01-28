import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";
import "./VetProfile.css";
import "../Button/Button.css";

export default function VetProfile() {
  const { userInfo } = useContext(DatabaseContext);

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Mein Tierarzt"} />
          <div className="vetInfo font-link">
            <h4>Name</h4>
            <p>{userInfo[0].vet[0].name}</p>
            <br />
            <h4>Adresse</h4>
            <p>{userInfo[0].vet[0].adress}</p>
            <p>{userInfo[0].vet[0].plz}</p>
            <br />
            <h4>Telefon</h4>
            <p>{userInfo[0].vet[0].tel}</p>
            <br />
            <h4>Website</h4>
            <p>{userInfo[0].vet[0].web}</p>
          </div>
          <div>
            <Link
              className="buttonToNewSite changeButton font-link"
              to="/changevet"
            >
              Bearbeiten
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
