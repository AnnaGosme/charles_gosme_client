import { Link } from "react-router-dom";
import Rock from "./../assets/rock-concert.jpg";
import cello from "../assets/cello.png";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-page-container">
        {/* <img className="logo" src={cello} alt="return to home page" /> */}
        <Link to="/">
      <img className="rock-concert-img" src={Rock} alt="rock on" height="auto" width="100%" />
            </Link>
            </div>
    </div>
  );
}
