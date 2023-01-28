import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { useState, useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";
import "./ChangeAnimal.css";
import "../Button/Button.css";

export default function ChangeAnimal() {
  const { userInfo, updateStateDatabase } = useContext(DatabaseContext);
  const [currentAnimalName, setCurrentAnimalName] = useState([]);
  const [currentAnimalAge, setCurrentAnimalAge] = useState([]);
  const [currentAnimalIllnesses, setCurrentAnimalIllnesses] = useState([]);
  let animalId = 0;

  const updateContext = (e) => {
    e.preventDefault();
    let completeUserInfo = userInfo;
    let orderedIllnessArray = [];

    if (currentAnimalIllnesses.includes(",")) {
      let illnessArray = currentAnimalIllnesses.split(",");
      illnessArray.forEach(function (element) {
        orderedIllnessArray.push(element.replace(" ", ""));
      });
    } else {
      orderedIllnessArray.push(currentAnimalIllnesses);
    }

    completeUserInfo[0].animals[animalId].name = currentAnimalName;
    completeUserInfo[0].animals[animalId].age = currentAnimalAge;
    completeUserInfo[0].animals[animalId].illnesses = orderedIllnessArray;
    updateStateDatabase(completeUserInfo);
    window.location.href = `/`;
  };

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Meine Tiere"} />
          <h5 className="font-link">Bearbeiten</h5>
        </div>
        <div>
          <form
            onSubmit={updateContext}
            className="form-container font-link d-flex flex-column align-items-center mt-5"
          >
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Name"
              value={currentAnimalName}
              onChange={(e) => setCurrentAnimalName(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Alter"
              value={currentAnimalAge}
              onChange={(e) => setCurrentAnimalAge(e.target.value)}
            />
            <textarea
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Krankheiten"
              value={currentAnimalIllnesses}
              onChange={(e) => setCurrentAnimalIllnesses(e.target.value)}
            />
            <div className="button-container">
              <button
                className="font-link buttonToNewSite submitButton"
                type="submit"
              >
                Speichern
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
