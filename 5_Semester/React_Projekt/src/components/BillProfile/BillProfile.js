import BackButton from "../BackButton/BackButton.js";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import "./BillProfile.css";

export default function BillProfile() {
  const location = useLocation();
  const { title, image } = location.state;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline="Rechnungen" />
          <h5 className="font-link">{title}</h5>
          <img src={image} alt="bill" width="500px"></img>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
