import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DatabaseContext } from "../../context/databaseContext.js";

export default function BillOverview() {
  const { userInfo } = useContext(DatabaseContext);

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <div className="container-home">
        <div className="row">
          <BackButton />
          <Headline headline={"Rechnungen"} />
        </div>
      </div>
      <br />
      <br />
      <div className="row font-link">
        <ul className="button-container mt-3">
          {userInfo[0].animals.map(function (object, i) {
            return object.bills.map(function (innerObject, j) {
              return (
                <li className="mb-5">
                  <Link
                    className="buttonToNewSite"
                    to="/billprofile"
                    state={{
                      title: innerObject.title,
                      image: innerObject.imageBill,
                    }}
                  >
                    <img
                      src="assets/bill-icon.png"
                      className="icon-image"
                      alt="paw icon"
                    />
                    {innerObject.title}
                  </Link>
                </li>
              );
            });
          })}
        </ul>
      </div>
    </div>
  );
}
