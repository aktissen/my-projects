import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import "./AnimalCheckups.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AnimalCheckups() {
  const location = useLocation();
  const { id, examinations } = location.state;
  let animalId = id;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={id} />
      <Link
        to="/addcheckups"
        state={{
          id: id,
        }}
      >
        <img src="assets/add-checkup.png" className="add-icon" alt="..." />
      </Link>
      <div className="container-circle">
        <div className="row">
          <BackButton />
          <Headline headline={"Untersuchungen"} />
          <div className="line mt-5"></div>
          {examinations.map(function (object, i) {
            return (
              <div className="date-container font-link">
                <div className="pt-3 pb-1">
                  <Link
                    className="text-checkups date"
                    to="/checkups"
                    state={{
                      idAnimal: animalId,
                      id: object.id,
                      title: object.title,
                      date: object.date,
                      place: object.place,
                      comment: object.comment,
                    }}
                  >
                    {object.date}
                  </Link>
                </div>
                <div className="pb-4">
                  <Link
                    className="text-checkups"
                    to="/checkups"
                    state={{
                      idAnimal: animalId,
                      id: object.id,
                      title: object.title,
                      date: object.date,
                      place: object.place,
                      comment: object.comment,
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
