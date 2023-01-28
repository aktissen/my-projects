import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { useState, useContext } from "react";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import { DatabaseContext } from "../../context/databaseContext.js";
import { useLocation } from "react-router-dom";
import "../Button/Button.css";

export default function AddCheckups() {
  const location = useLocation();
  const { id } = location.state;
  const { userInfo, updateStateDatabase } = useContext(DatabaseContext);
  const [currentCheckupTitle, setCurrentCheckupTitle] = useState([]);
  const [currentCheckupComment, setCurrentCheckupComment] = useState([]);
  const [currentCheckupPlace, setCurrentCheckupPlace] = useState([]);
  const [currentCheckupDate, setCurrentCheckupDate] = useState([]);

  const updateContext = (e) => {
    e.preventDefault();
    let completeUserInfo = userInfo;
    let newCheckup = {};
    let lastItem =
      userInfo[0].animals[id].examinations[
        userInfo[0].animals[id].examinations.length - 1
      ];
    let newID = lastItem.id + 1;

    newCheckup = {
      id: newID,
      title: currentCheckupTitle,
      comment: currentCheckupComment,
      place: currentCheckupPlace,
      date: currentCheckupDate,
    };

    completeUserInfo[0].animals[id].examinations.push(newCheckup);
    updateStateDatabase(completeUserInfo);
    window.location.href = `/`;
  };

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={id} />
      <div className="container-circle">
        <div className="row">
          <BackButton />
          <Headline headline={"Untersuchungen"} />
          <h5 className="font-link">Neue Untersuchung</h5>
        </div>
        <div>
          <form
            onSubmit={updateContext}
            className="form-container font-link d-flex flex-column align-items-center mt-5"
          >
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Titel"
              value={currentCheckupTitle}
              onChange={(e) => setCurrentCheckupTitle(e.target.value)}
            />
            <textarea
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Kommentar"
              value={currentCheckupComment}
              onChange={(e) => setCurrentCheckupComment(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Klinik"
              value={currentCheckupPlace}
              onChange={(e) => setCurrentCheckupPlace(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Datum"
              value={currentCheckupDate}
              onChange={(e) => setCurrentCheckupDate(e.target.value)}
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
