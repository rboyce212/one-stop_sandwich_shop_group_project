export default async function APIQuote() {
  const url = "https://motivation-quotes-api.p.rapidapi.com/api/quotes";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
      "X-RapidAPI-Host": "motivation-quotes-api.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  console.log(APIQuote);
}
console.log(APIQuote);
