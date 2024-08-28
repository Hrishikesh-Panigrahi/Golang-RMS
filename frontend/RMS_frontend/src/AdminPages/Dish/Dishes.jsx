import React, { useEffect, useState } from "react";
import axios from "axios";

const Dishes = () => {
  const [Dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/dish/")
      .then((response) => {
        setDishes(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false);
  }, []);

  return (
<div className="dishes bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Dish List</h1>
  {Dishes.length === 0 ? (
    <p className="text-center text-gray-500">No dishes available</p>
  ) : (
    <ul className="space-y-6">
      {Dishes.map((dish, index) => (
        <li
          key={index}
          className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <h2 className="text-2xl font-semibold text-gray-800">{dish.name}</h2>
          <p className="text-gray-600 mb-4">{dish.description}</p>
          <p className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Price:</span> ${dish.price.toFixed(2)}
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Ingredients:</span> {dish.ingredients}
          </p>
          <p className="text-lg text-gray-800 mb-2">
            <span className="font-bold">Tag:</span> {dish.tag}
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-bold">Available:</span>{" "}
            <span
              className={
                dish.available ? "text-green-500 font-semibold" : "text-red-500 font-semibold"
              }
            >
              {dish.available ? "Yes" : "No"}
            </span>
          </p>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default Dishes;
