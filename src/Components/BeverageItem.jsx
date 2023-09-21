import beverages from "../data/beverages.js";
import "../Styles/Menu.css";

export default function BeverageItem() {
  console.log(beverages);
  return (
    <div className="all-beverages">
      {beverages.map(({ name, price }, id) => {
        return (
          <div className="beverage-container" key={id}>
            <h4>
              {name} <span> - ${price} </span> <br />
              <button className="css-button-gradient--5">Add to Cart</button>
            </h4>
          </div>
        );
      })}
    </div>
  );
}
