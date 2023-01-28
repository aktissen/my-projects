import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import CircleAnimalPic from "../CircleAnimalPic/CircleAnimalPic.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AnimalBills() {
  const location = useLocation();
  const { id, bills } = location.state;

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <CircleAnimalPic id={id} />
      <Link
        to="/addbills"
        state={{
          id: id,
        }}
      >
        <img src="assets/add-bill.png" className="add-icon" alt="..." />
      </Link>
      <div className="container-circle">
        <div className="row">
          <BackButton />
          <Headline headline={"Rechnungen"} />
        </div>
        <div className="row font-link">
          <ul className="button-container mt-3">
            {bills.map(function (object, i) {
              return (
                <li className="mb-5">
                  <Link
                    className="buttonToNewSite"
                    to="/billprofile"
                    state={{
                      id: id,
                      title: object.title,
                      image: object.imageBill,
                    }}
                  >
                    <img
                      src="assets/bill-icon.png"
                      className="icon-image"
                      alt=""
                    />
                    {object.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
