import BackButton from "../BackButton/BackButton.js";
import Navbar from "../Navbar/Navbar.js";
import Headline from "../Headline/Headline.js";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./AnimalProfile.css";

export default function AnimalProfile() {
  const location = useLocation();
  const { id, name, age, illnesses, img, examinations, notes, bills } =
    location.state;
  let imageUrl;

  if (img.includes("blob")) {
    imageUrl = new File([img], "image.jpg", {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
    console.log(imageUrl);
  } else {
    imageUrl = img;
  }

  return (
    <div>
      <Navbar headline="healthy paws" img="" />
      <Link
        to="/animal"
        state={{
          name: name,
          age: age,
          id: id,
          illnesses: illnesses,
          img: img,
        }}
      >
        <img src={imageUrl} className="animal-picture" alt="animal profile" />
      </Link>
      <div className="container-animal">
        <div className="row">
          <BackButton />
          <Headline headline={name} />
        </div>

        <div className="row font-link">
          <ul className="button-container mt-5">
            <li className="mb-5">
              <Link
                className="buttonToNewSite"
                to="/animalcheckups"
                state={{
                  id: id,
                  examinations: examinations,
                }}
              >
                <img
                  src="assets/checkup-icon.png"
                  className="icon-image"
                  alt="checkup icon"
                />
                Untersuchungen
              </Link>
            </li>
            <li className="mb-5">
              <Link
                className="buttonToNewSite"
                to="/animalbills"
                state={{
                  id: id,
                  bills: bills,
                }}
              >
                <img
                  src="assets/bill-icon.png"
                  className="icon-image"
                  alt="bill icon"
                />
                Rechnungen
              </Link>
            </li>
            <li className="mb-5">
              <Link
                className="buttonToNewSite"
                to="/animalnotes"
                state={{
                  id: id,
                  notes: notes,
                }}
              >
                <img
                  src="assets/notes-icon.png"
                  className="icon-image"
                  alt="notes icon"
                />
                Notizen
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
