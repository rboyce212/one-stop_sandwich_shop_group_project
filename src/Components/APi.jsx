
import axios from 'axios';
import { useState, useEffect } from 'react';

const API_URL = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser';

const API_KEY = '1bf230826dmsh4f445e35b8cd314p13aae8jsn67230786dbbf';

const options = {
  method: 'GET',
  url: API_URL,
  params: {
    'nutrition-type': 'cooking',
    'category[0]': 'generic-foods',
    'health[0]': 'alcohol-free',
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com',
  },
};

function FoodData() {
  const [randomItem, setRandomItem] = useState(null);

  useEffect(() => {

    axios
      .request(options)
      .then((response) => {
        const apiData = response.data;
        if (apiData.hints && apiData.hints.length > 0) {
          const randomIndex = Math.floor(Math.random() * apiData.hints.length);
          const randomHint = apiData.hints[randomIndex];
          setRandomItem(randomHint.food);
        }
      })
      .catch((error) => {
        console.error(error);

      });
  }, []);

  return (
    <div>
      <h1>Calories information</h1>
      {randomItem ? (
        <div>
          <strong>Name:</strong> {randomItem.label} <br />
          <strong>Calories:</strong> {randomItem.nutrients.ENERC_KCAL || 'N/A'} kcal <br />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default FoodData;
