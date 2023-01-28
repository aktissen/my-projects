import "./BackButton.css";
import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }
  return (
    <div>
      <button className="ms-3" onClick={handleClick}>
        <img src="assets/chevron-left.png" className="chevron" alt="go back" />
      </button>
    </div>
  );
}
