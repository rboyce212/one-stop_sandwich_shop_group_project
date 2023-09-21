import SigSandwichItem from "./SigSandwichItem.jsx";
import ChipsItem from "./ChipsItem.jsx";
import BeverageItem from "./BeverageItem.jsx";
import FoodData from "./APi.jsx";
import "../Styles/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  const drinksImage = "/beverage-bottles.png";
  const chipsBag = "/Potato-Chips-Menu.png";

  const sigSandwichStyles = {
    textDecoration: "underline",
    marginLeft: "20px"
  };
  // <Cart />;

  const byoButtonStyles = {
    textDecoration: "underline",
    textAlign: "center",
    color: "#000080",
    backgroundColor: "transparent"
  };
  return (
    <>
      <div className="menu-container">
        <div id="menu-title">
          <h1>Our Menu:</h1>
        </div>
        <h2 className="h2-button">
          <Link to="/byo-item">
            <button id="byo-button" type="submit" style={byoButtonStyles}>
              <h3>Build Your Own Sandwich</h3>
            </button>
          </Link>

          <p>
            Create your own sandwich by building it from the bread up to the
            toppings and dressings!
          </p>
        </h2>
        <br />
        <h2 style={sigSandwichStyles}>Signature Sandwiches</h2>
        <div>
          <SigSandwichItem />
        </div>
        <br />
        <br />
        <div className="lower-menu-container">
          <div className="chips-div">
            <img id="chips" src={chipsBag} alt="potato-chips" height={138} />
            <h2
              className="category-name"
              style={{ textDecoration: "underline" }}
            >
              Chips
            </h2>
            <br />
            <ChipsItem />
          </div>
          <br />
          <div className="beverages-div">
            <img
              id="beverages"
              src={drinksImage}
              alt="bottled-beverages"
              height={138}
            />
            <h2
              className="category-name"
              style={{ textDecoration: "underline" }}
            >
              Beverages
            </h2>
            <br />
            <BeverageItem />
          </div>
        </div>
      </div>
      <FoodData />
      <br />
      <br />
    </>
  );
}

export default Menu;

{
  /* <button onClick={() => handleRedirect(index)} type="submit">Build Your Own Sandwich</button></a> */
}
