// let APIWeather = async () => {
//   const url = `https://api.weatherapi.com/v1/current.json?key=d6063723f4f84e4c9f911929231909&q=40.66337281164062,-73.99472263724527&aqi=no`;
//   let response = await fetch(url);
//   let weather = await response.json();
//   return weather;
// };

// function processJSON(data) {
//   if (data.error) {
//     console.error(data.error.msg);
//     if (data.error.code === 1006) {
//       setError("No location found matching parameter.");
//     } else {
//       setError("Error!");
//     }
//   }

//   if (data.current && data.location) {
//     const { condition, temp_f, humidity, wind_mph, vis_miles, location } =
//       data.current;
//     setCondition(condition ? condition.text : "");
//     setTemp(temp_f ? temp_f : "");
//     setHumidity(humidity ? humidity : "");
//     setWind(wind_mph ? wind_mph : "");
//     setVis(vis_miles ? vis_miles : "");
//     setCityName(location.name ? location.name : "");
//     setStateName(location.region ? location.region : "");
//     setLocalTime(location.localtime ? location.localtime : "");
//   }
// }

// function sentenceText1() {
//   const xyz =
//     "Date/Time: " +
//     (setLocalTime ? setLocalTime : "") +
//     " Location: " +
//     (setCityName ? setCityName : "") +
//     (setStateName ? ", " + setStateName : "");
//   return xyz;
// }

// const sentenceText2 =
//   "The temperature is " +
//   (setTemp ? setTemp + "°F" : "") +
//   (setCondition ? ". It's currently " + setCondition : "") +
//   (setWind ? " with wind at " + setWind + "mph" : "") +
//   (setHumidity ? ". Humidity is at " + setHumidity + "%" : "") +
//   (setVis ? " with visibility of around " + setVis + " miles." : "");

// export { APIWeather, sentenceText1, sentenceText2 };

// let APIWeather = async () => {
//   const url = `https://api.weatherapi.com/v1/current.json?key=d6063723f4f84e4c9f911929231909&q=40.66337281164062,-73.99472263724527&aqi=no`;
//   let response = await fetch(url);
//   let weather = await response.json();
//   return weather;
// };

// function processJSON(data) {
//   if (data.error) {
//     console.error(data.error.msg);
//     if (data.error.code === 1006) {
//       setError("No location found matching parameter.");
//     } else {
//       setError("Error!");
//     }
//   }

//   if (data.current && data.location) {
//     setCondition(data.current.conditon.text);
//     setTemp(data.current.temp_f);
//     setHumidity(data.current.humidity);
//     setWind(data.current.wind_mph);
//     setVis(data.current.vis_miles);
//     setCityName(data.location.name);
//     setStateName(data.location.region);
//     setLocalTime(data.location.localtime);
//   } else {
//     setCondition(data.current.conditon.text);
//     setTemp(data.current.temp_f);
//     setHumidity(data.current.humidity);
//     setWind(data.current.wind_mph);
//     setVis(data.current.vis_miles);
//     setCityName(data.location.name);
//     setStateName(data.location.region);
//     setLocalTime(data.location.localtime);
//   }
// }

// function sentenceText1() {
//   const xyz =
//     "Date/Time: " +
//     (setLocalTime ? setLocalTime : "") +
//     " Location: " +
//     (setCityName ? setCityName : "") +
//     (setStateName ? ", " + setStateName : "");
//   return xyz;
// }

// const sentenceText2 =
//   "The temperature is " +
//   (setTemp ? setTemp + "°F" : "") +
//   (setCondition ? ". It's currently " + setCondition : "") +
//   (setWind ? " with wind at " + setWind + "mph" : "") +
//   (setHumidity ? ". Humidity is at " + setHumidity + "%" : "") +
//   (setVis ? " with visibility of around " + setVis + " miles." : "");

// export { APIWeather, sentenceText1, sentenceText2 };

// let APIWeather = async () => {
//   const url = `https://api.weatherapi.com/v1/current.json?key=d6063723f4f84e4c9f911929231909&q=40.66337281164062,-73.99472263724527&aqi=no`;
//   let response = await fetch(url);
//   let weather = await response.json();

//   return weather;
// };

// function processJSON(data) {
//   if (data.error) {
//     console.error(data.error.msg);
//     if (data.error.code === 1006) {
//       setError("No location found matching parameter.");
//     } else {
//       setError("Error!");
//     }
//   }

//   if (data.current && data.location) {
//     setCondition(data.current.conditon.text);
//     setTemp(data.current.temp_f);
//     setHumidity(data.current.humidity);
//     setWind(data.current.wind_mph);
//     setVis(data.current.vis_miles);
//     setCityName(data.location.name);
//     setStateName(data.location.region);
//     setLocalTime(data.location.localtime);
//   } else {
//     setCondition(data.current.conditon.text);
//     setTemp(data.current.temp_f);
//     setHumidity(data.current.humidity);
//     setWind(data.current.wind_mph);
//     setVis(data.current.vis_miles);
//     setCityName(data.location.name);
//     setStateName(data.location.region);
//     setLocalTime(data.location.localtime);
//   }
// }

// function sentenceText1() {
//     xyz = ("Date/Time: " +
//     setLocalTime +
//     "Location: " +
//     setCityName +
//     ", " +
//     setStateName);
// }
// const sentenceText2 =
//   "The temperature is " +
//   setTemp +
//   "°F. It's currently " +
//   setCondition +
//   " with wind at " +
//   setWind +
//   "mph. Humidity is at " +
//   setHumidity +
//   "% with visibility of around " +
//   setVis +
//   " miles.";

// export default APIWeather;

//   let localWeather = [];
// APIWeather = localWeather;
// return (
//   <div>
//     <p>
//       Date/Time: {data.location.localtime}
//       <br />
//       City, State: {data.location.name}, {data.location.region}
//       <br />
//       Temperature: {data.current.temp_f}°F, {data.current.condition.text} with{" "}
//       {data.current.wind_mph} mph wind. Humidity is at {data.current.humidity}
//       % with visibility around {data.current.vis_miles} miles.
//     </p>
//   </div>
// );

// const options = {
//     method: "GET",
//     url: "https://weatherapi-com.p.rapidapi.com/current.json",
//     params: {
//       q: "40.66337281164062, -73.99472263724527"
//     },
//     headers: {
//       "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//     }
//   };

// try{
//         const response = await axios.request(options);
//         return response.data;
//       }catch(error){
//         console.log('error: ',error);
//         return {};

//   return (
//     <div>
//       <p>
//         Date/Time: {location.localtime}
//         <br />
//         City, State: {location.name}, {location.region}
//         <br />
//         Temperature: {current.temp_f}°F, {current.condition.text} with{" "}
//         {current.wind_mph} mph wind. Humidity is at {current.humidity}% with
//         visibility around {current.vis_miles} miles.
//       </p>
//     </div>
//   );
// }

// import axios from "axios";

// export default function APIWeather() {
//   const { index } = useParams();

//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     method: "GET",
//     url: "https://weatherapi-com.p.rapidapi.com/current.json",
//     params: {
//       q: "40.66337281164062, -73.99472263724527v"
//     },
//     headers: {
//       "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       method: "GET",
//       url: "https://weatherapi-com.p.rapidapi.com/current.json",
//       params: {
//         q: "40.66337281164062, -73.99472263724527"
//       },
//       headers: {
//         "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//         "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//       }
//   };
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// const baseURL = "http://api.weatherapi.com/v1";

// export default function APIWeather() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "http://api.weatherapi.com/v1/current.json",
//         params: {
//           q: "40.66337281164062, -73.99472263724527"
//         },
//         headers: {
//           Key: "d6063723f4f84e4c9f911929231909"
//         }
//       };
//       try {
//         const response = await axios.request(options);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   let obj = response.data;
//   console.log(response.data);
//   return (
//     <div>
//       <p>
//         Date/Time: {data.localtime} City, State: {data.name}, {data.region}
//         Temperature: {data.temp_f}°F Condition: {data.text} with {data.wind_mph}{" "}
//         mph wind. Humidity is at {data.humidity}% and visibility is around{" "}
//         {data.vis_miles} miles.
//       </p>
//     </div>
//   );
// }

//       fetch(baseURL)
//         .then((response) => response.json())
//         .then((json) => getData(json));
//     };
//     useEffect(() => {
//       fetchData();
//     }, []);

//     axios.get(baseURL);
//     getData(response.data);
//   });

//   if (!data) return null;

//   return (
//     <div>
//       <h1>{data.title}</h1>
//       <p>
//         Date/Time: {data.location.localtime}
//         <br />
//         City, State: {data.location.name}, {data.location.region}
//         <br />
//         Temperature: {data.current.temp_f}°F, {data.current.condition.text} with{" "}
//         {data.current.wind_mph} mph wind. Humidity is at {data.current.humidity}
//         % with visibility around {data.current.vis_miles} miles.
//       </p>
//     </div>
//   );
// }

// export default function APIWeather() {
//   const [weatherData, setWeatherData] = useState([]);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://weatherapi-com.p.rapidapi.com/current.json",
//         params: {
//           q: "40.66337281164062, -73.99472263724527"
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//           "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
// <APIWeather />
// Date/Time: {location.localtime}
// City, State: {location.name}, {location.region}
// Temperature: {current.temp_f}°F Condition: {current.condition.text} with{" "}
// {current.wind_mph} mph wind. Humidity is at {current.humidity}% and
// visibility is around {current.vis_miles} miles.
//     </div>
//   );
// }

// d6063723f4f84e4c9f911929231909;

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function APIWeather() {
//   const [weatherData, setWeatherData] = useState(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://weatherapi-com.p.rapidapi.com/current.json",
//         params: {
//           q: "40.66337281164062, -73.99472263724527"
//         },
//         headers: {
//           "X-RapidAPI-Key":
//             "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//           "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setWeatherData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchWeatherData();
//   }, []);

//   if (!weatherData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <APIWeather />
//       {/* Date/Time: {location.localtime}
//       City, State: {location.name}, {location.region}
//       Temperature: {current.temp_f}°F Condition: {current.condition.text} with{" "}
//       {current.wind_mph} mph wind. Humidity is at {current.humidity}% and
//       visibility is around {current.vis_miles} miles. */}
//     </div>
//   );
// }

// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function APIWeather() {
//   useEffect(() => {
//   const getData = async () => {
//     try {
//       const response = await axios.get(
//         `https://weatherapi-com.p.rapidapi.com/current.json`
//       );
//       setData(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//       setData(null);
//     } finally {
//       setLoading(false);
//     }
//   };
//   getData();
// }, []);

//   console.log(response);
// }

// export default function APIWeather() {
//   const [data, getData] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const options = {
//     method: "GET",
//     url: "https://weatherapi-com.p.rapidapi.com/current.json",
//     params: { q: "40.66337281164062, -73.99472263724527" },
//     headers: {
//       "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//     }
//   };
// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

//   useEffect(() => {
//     fetch(`https://weatherapi-com.p.rapidapi.com/current.json`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `This is an HTTP error: The status is ${response.status}`
//           );
//         }
//         return response.json();
//       })
//       .then((actualData) => console.log(actualData))
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);

//   return <div className="APIWeather">APIWeather</div>;
// }

//   const options = {
//     method: "GET",
//     url: "https://weatherapi-com.p.rapidapi.com/current.json",
//     params: { q: "40.66337281164062, -73.99472263724527" },
//     headers: {
//       "X-RapidAPI-Key": "448b5bcad6mshbebed94fac183c5p1f1256jsnf44cbf2b0220",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
//     }
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }

// }
