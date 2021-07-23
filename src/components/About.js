import { Link } from "react-router-dom";
import cello from "../assets/cello.png";

export default function About() {
    return (
        <div className="about-page-container">
            <div className="transparency-box">
        <div className="about-page-top-container">
            <Link to="/">
            <img className="logo" src={cello} alt="return to home page" />
            </Link>
            <h1 className="charles-gosme-title charles-gosme-title-about-page">Charles Gosme</h1>
            </div>
                <div className="about-page-text-container">
            <p className="about-text">Charles Gosme is an indie-classical, dream-pop and electro-acoustic musician based in Paris. He is a composer, producer, singer and multi-instrumentalist who was nominated for an Independent Music Award in 2015. His latest release is the "Edge of Chaos" album which came out in 2019. When performing live, he sings while hiding alternately behind his electric cello, his piano or his guitar. He has performed in many European cities and festivals as a solo artist and as a member of orchestras and rock bands, including Paris, Berlin and Amsterdam. He has also composed and performed for theatre and film projects. His music, lyrics and videos share an introspective and nostalgic atmosphere. Some of them are inspired by work he carried out with refugees and migrants for over five years as a researcher, university lecturer and activist.
A new album has been in the works since the Summer of 2019 and will be released mid-2021.
</p> 
        </div>
        </div>
        </div>
    )
}
