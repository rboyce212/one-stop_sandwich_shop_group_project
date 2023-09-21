import signatureSandwiches from "../data/signatureSandwiches.js";
import "../Styles/Menu.css";
import Cart from "./Cart.jsx";

export default function SigSandwichItem() {
  console.log(SigSandwichItem);
  return (
    <div className="sandwiches-cart">
      <div className="all-sandwiches">
        {signatureSandwiches.map(({ name, price, description, image }, id) => {
          // const divStyle = {
          //   backgroundImage: `url(${image})`,
          //   backgroundSize: "auto",
          //   backgroundRepeat: "no-repeat",
          // };
          return (
            <div className="sandwich-container" key={id}>
              <img src={image} id="food-image" alt={name} />
              <h4>
                <p>
                  {name} <span> - ${price}</span> <br />
                </p>
              </h4>
              <button className="css-button-gradient--4">Add to Cart</button>
              <p>{description}</p>
              <br />
            </div>
          );
        })}
      </div>
      <Cart />
    </div>
  );
}

// const SigSandwichItem = ({ signatureSandwiches }) => {
//   console.log(SigSandwichItem);
//   return (
//     <div className="signature-sandwiches">
//       {signatureSandwiches.map((item) => (
//         <div className="sandwich-card">
//           <div>
//             <img
//               className="sandwich-image"
//               src={signatureSandwiches.image}
//               alt={signatureSandwiches.name}
//             />
//           </div>

//           <div>
//             <h4 className="sandwich.name">{signatureSandwiches.name}</h4>
//           </div>
//           <div className="sandwich-price"> ${signatureSandwiches.price}</div>

//           <div>
//             <button className="sandwich-add-button">Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SigSandwichItem;
