import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AnimalNotes() {
  const location = useLocation();
  const { id, notes } = location.state;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={id} />
      <Link
        to="/addnotes"
        state={{
          id: id,
        }}
      >
        <img src="assets/add-note.png" className="add-icon" alt="..." />
      </Link>
      <div className="container-circle">
        <div className="row">
          <BackButton />
          <Headline headline={"Notizen"} />
          <div className="line mt-5"></div>
          {notes.map(function (object, i) {
            return (
              <div className="date-container font-link">
                <div className="pt-3 pb-1">
                  <Link
                    className="text-checkups date"
                    to="/notes"
                    state={{
                      animalId: id,
                      notes: notes,
                      id: object.id,
                      title: object.title,
                      date: object.date,
                      test: object.test,
                    }}
                  >
                    {object.date}
                  </Link>
                </div>
                <div className="pb-4">
                  <Link
                    className="text-checkups"
                    to="/notes"
                    state={{
                      animalId: id,
                      id: object.id,
                      title: object.title,
                      date: object.date,
                      test: object.test,
                    }}
                  >
                    {object.title}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
