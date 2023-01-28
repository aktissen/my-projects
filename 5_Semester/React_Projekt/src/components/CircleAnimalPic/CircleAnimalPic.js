import "./CircleAnimalPic.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DatabaseContext } from "../../context/databaseContext.js";

export default function CircleAnimalPic(props) {
  const { userInfo } = useContext(DatabaseContext);
  const imgAnimal = userInfo[0].animals[props.id].img;

  console.log(imgAnimal);

  // circular image: https://www.webfx.com/blog/web-design/circular-images-css/
  return (
    <div>
      <Link
        to="/animal"
        state={{
          id: props.id,
          img: imgAnimal,
        }}
      >
        <div className="crop-image">
          <img src={imgAnimal} className="circle-pic" alt="animal profile" />{" "}
        </div>
      </Link>
    </div>
  );
}
