import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";
import "./AllAnimalsOverview.css";

export default function AllAnimalsOverview() {
  const { userInfo } = useContext(DatabaseContext);

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Meine Tiere"} />
        </div>
        <br />
        <div className="row font-link">
          <ul className="button-container mt-3">
            {userInfo[0].animals.map(function (object, i) {
              return (
                <li className="mb-5">
                  <Link
                    className="buttonToNewSite"
                    to="/animalprofile"
                    state={{
                      name: object.name,
                      id: object.id,
                      age: object.age,
                      img: object.img,
                      illnesses: object.illnesses,
                      bills: object.bills,
                      notes: object.notes,
                      examinations: object.examinations,
                    }}
                  >
                    <img
                      src="assets/animal-icon.png"
                      className="icon-image"
                      alt="paw icon"
                    />
                    {object.name}
                  </Link>
                </li>
              );
            })}

            <li className="mb-5">
              <Link className="buttonToNewSite" to="/addnewanimal">
                <img
                  src="assets/animal-icon.png"
                  className="icon-image"
                  alt="paw icon"
                />
                neues Tier
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
