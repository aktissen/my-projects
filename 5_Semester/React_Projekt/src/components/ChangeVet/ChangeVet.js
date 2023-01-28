import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { useState, useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";
import "./ChangeVet.css";
import "../Button/Button.css";

export default function ChangeVet() {
  const { userInfo, updateStateDatabase } = useContext(DatabaseContext);
  const [currentVetName, setCurrentVetName] = useState([]);
  const [currentVetAdress, setCurrentVetAdress] = useState([]);
  const [currentVetPlz, setCurrentVetPlz] = useState([]);
  const [currentVetTel, setCurrentVetTel] = useState([]);
  const [currentVetWeb, setCurrentVetWeb] = useState([]);

  const updateContext = (e) => {
    //e.preventDefault();
    let completeUserInfo = userInfo;
    let newVet = {
      name: currentVetName,
      adress: currentVetAdress,
      plz: currentVetPlz,
      tel: currentVetTel,
      web: currentVetWeb,
    };
    completeUserInfo[0].vet[0] = newVet;

    updateStateDatabase(completeUserInfo);
    window.location.href = `/`;
  };

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Mein Tierarzt"} />
          <h5>Bearbeiten</h5>
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
              value={currentVetName}
              onChange={(e) => setCurrentVetName(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Adresse"
              value={currentVetAdress}
              onChange={(e) => setCurrentVetAdress(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Ort und PLZ"
              value={currentVetPlz}
              onChange={(e) => setCurrentVetPlz(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Telefon"
              value={currentVetTel}
              onChange={(e) => setCurrentVetTel(e.target.value)}
            />
            <input
              className="form-input border-top-0 border-end-0 border-1 rounded-bottom p-2 mb-4"
              type="text"
              placeholder="Website"
              value={currentVetWeb}
              onChange={(e) => setCurrentVetWeb(e.target.value)}
            />
            <div className="button-container">
              <button
                type="submit"
                className="font-link buttonToNewSite submitButton"
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
