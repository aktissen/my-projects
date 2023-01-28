import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import "./ChangeNotes.css";
import { useState, useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ChangeNotes() {
  const location = useLocation();
  const { animalId, id, notes } = location.state;
  const { userInfo, updateStateDatabase } = useContext(DatabaseContext);
  const [currentNotesTitle, setCurrentNotesTitle] = useState([]);
  const [currentNotesDate, setCurrentNotesDate] = useState([]);
  const [currentNotesTest, setCurrentNotesTest] = useState([]);

  const updateContext = (e) => {
    e.preventDefault();
    let completeUserInfo = userInfo;

    completeUserInfo[0].animals[animalId].notes[id].title = currentNotesTitle;
    completeUserInfo[0].animals[animalId].notes[id].date = currentNotesDate;
    completeUserInfo[0].animals[animalId].notes[id].test = currentNotesTest;
    updateStateDatabase(completeUserInfo);
    window.location.href = `/`;
  };

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={id} />
      <div className="container-circle">
        <div className="row font-link">
          <BackButton />
          <Headline headline={"Notizen"} />
          <h5 className="font-link">Bearbeiten</h5>
          <div>
            <form
              onSubmit={updateContext}
              className="form-container font-link d-flex flex-column align-items-center mt-5"
            >
              <input
                className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
                type="text"
                placeholder="Titel"
                value={currentNotesTitle}
                onChange={(e) => setCurrentNotesTitle(e.target.value)}
              />
              <textarea
                className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
                type="text"
                placeholder="Kommentar"
                value={currentNotesDate}
                onChange={(e) => setCurrentNotesDate(e.target.value)}
              />
              <input
                className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
                type="text"
                placeholder="Datum"
                value={currentNotesTest}
                onChange={(e) => setCurrentNotesTest(e.target.value)}
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
    </div>
  );
}
