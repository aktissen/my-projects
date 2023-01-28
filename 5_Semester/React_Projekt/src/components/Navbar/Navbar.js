import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ img, headline }) {
  return (
    <div>
      <Link className="link-home" to="/">
        <div className="font-link">
          <div className="container-nav">
            <img
              src="assets/healthy-paws-icon.png"
              className="app-icon"
              alt="app icon"
            />
            <h1 className="headline-nav">{headline}</h1>
          </div>
          <img
            src="assets/bg-navbar.png"
            className="bg-navbar"
            alt="background"
          />
        </div>
      </Link>
    </div>
  );
}
