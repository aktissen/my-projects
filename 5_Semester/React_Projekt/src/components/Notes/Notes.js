import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import "./Notes.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Notes() {
  const location = useLocation();
  const { animalId, id, title, date, test, notes } = location.state;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={animalId} />
      <div className="container-circle">
        <div className="row font-link">
          <BackButton />
          <Headline headline={"Notizen"} />

          <h5>{date}</h5>
          <div>
            <div className="title-container mt-4">{title}</div>
            <div className="comment-container mt-3">{test}</div>
            <Link
              className="buttonToNewSite changeButton font-link"
              to="/changenotes"
              state={{
                animalId: animalId,
                id: id,
                notes: notes,
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
