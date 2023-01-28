import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { useState, useContext, useRef } from "react";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import { DatabaseContext } from "../../context/databaseContext.js";
import { useLocation } from "react-router-dom";
import "../Button/Button.css";

export default function AddBills() {
  let fileInput = useRef();
  const location = useLocation();
  const { id } = location.state;

  const { userInfo, updateStateDatabase } = useContext(DatabaseContext);
  const [currentBillTitle, setCurrentBillTitle] = useState([]);

  const updateContext = (e) => {
    e.preventDefault();
    let completeUserInfo = userInfo;

    completeUserInfo[0].animals[id].bills.title = currentBillTitle;
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
          <Headline headline={"Rechnung"} />
          <h5 className="font-link">Bearbeiten</h5>
        </div>
        <div>
          <form
            onSubmit={updateContext}
            className="form-container font-link d-flex flex-column align-items-center mt-5"
          >
            <input
              type="file"
              ref={fileInput}
              className="custom-image-upload"
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Titel"
              value={currentBillTitle}
              onChange={(e) => setCurrentBillTitle(e.target.value)}
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
