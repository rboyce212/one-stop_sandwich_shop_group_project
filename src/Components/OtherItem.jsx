import BYOOptions from "./BYOOptions.jsx";
import "./sandwichDetails.css";

function OtherItem() {
  return (
    <>
      <div>
        <br />
        <h2>Build Your Own Sandwich</h2>
        <p>
          Create your own sandwich by building it from the bread up to the
          toppings and dressings!
        </p>
        <br />
        <BYOOptions />
        <br />
      </div>
    </>
  );
}

export default OtherItem;
