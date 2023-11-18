import profilePhoto from "../assets/IMG_1769.png";
import "./Home.css";
export default function Home() {
  return (
    <div className="home-conatiner">
      <div className="main-content child">
        <span>
        <h1>I&apos;m Balaji Udayagiri,</h1>
        <p> A Software Engineer crafting innovative solutions. Explore my portfolio and discover the art of coding with purpose.</p>
        </span>
      </div>
      <div className="img-container child">
        <img src={profilePhoto} alt="Profile" />
      </div>
    </div>
  );
}
