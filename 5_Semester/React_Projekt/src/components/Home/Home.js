import "./Home.css";
import "../Button/Button.css";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton.js";
import Headline from "../Headline/Headline.js";
import Navbar from "../Navbar/Navbar.js";

const Home = () => {
  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Willkommen Anka"} />
        </div>
        <div className="row font-link">
          <ul className="button-container mt-5">
            <li className="mb-5">
              <Link className="buttonToNewSite" to="/allanimalsoverview">
                <img
                  src="assets/animal-icon.png"
                  className="icon-image"
                  alt="paw icon"
                />
                Meine Tiere
              </Link>
            </li>
            <li className="mb-5">
              <Link className="buttonToNewSite" to="/vetprofile">
                <img
                  src="assets/vet-icon.png"
                  className="icon-image"
                  alt="vet icon"
                />
                Mein Tierarzt
              </Link>
            </li>
            <li className="mb-5">
              <Link className="buttonToNewSite" to="/billoverview">
                <img
                  src="assets/bill-icon.png"
                  className="icon-image"
                  alt="bill icon"
                />
                Rechnungen
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <img src="assets/cat-icon.png" className="cat-icon" alt="cat icon" />
    </div>
  );
};

export default Home;
