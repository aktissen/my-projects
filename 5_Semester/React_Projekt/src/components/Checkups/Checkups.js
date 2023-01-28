import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import "./Checkups.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Checkups() {
  const location = useLocation();
  const { idAnimal, id, title, date, place, comment } = location.state;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={idAnimal} />
      <div className="container-circle">
        <div className="row font-link">
          <BackButton />
          <Headline headline={"Untersuchung"} />
          <h5>{date}</h5>
          <div>
            <div className="title-container mt-4">{title}</div>
            <div className="comment-container mt-3">{comment}</div>
            <div className="comment-container mt-3">Klinik: {place}</div>
            <Link
              className="buttonToNewSite changeButton font-link"
              to="/changecheckup"
              state={{
                id: id,
                idAnimal: idAnimal,
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
