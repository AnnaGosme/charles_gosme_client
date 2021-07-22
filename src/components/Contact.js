import { Link } from "react-router-dom";
import Rock from "./../assets/rock-concert.jpg";
import cello from "../assets/cello.png";

export default function Contact() {
  return (
    <div className="contact-page">
        <Link to="/">
      <img className="rock-concert-img" src={Rock} height="50%" width="100%" />
            </Link>
    </div>
  );
}
