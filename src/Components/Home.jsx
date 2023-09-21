import "..//Styles/home.css";
import { Link } from "react-router-dom";
// import Calories from "./API.jsx";

const Home = () => {
  const logo = "/sandwich-shop.png";
  return (
    <>
      <div className="home-container">
        <div className="upper-container">
          <h1>One-Stop Sandwich Shop</h1>
        </div>
        <img id="logo" src={logo} alt="store logo" height={400} />
        <br />
        <br />
        <div className="lower-container">
          <Link to="/menu">
            <button
              className="menu-button"
              id="menu-button"
              type="submit"
              name="myButton"
            >
              Menu: Order Online
            </button>
          </Link>
          <br />
          <br />
          <h2>Address:</h2>
          <h3>647 4th Ave, </h3>
          <h3>Brooklyn, NY 11232</h3>
          <br />
          <h2>Phone:</h2>
          <h3>212-555-5555</h3>
          <br />
          <h2>Operation of Hours:</h2>
          <h3>9:00 am until 4:00 pm - 7 days a week!</h3>
          <br />

          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;
