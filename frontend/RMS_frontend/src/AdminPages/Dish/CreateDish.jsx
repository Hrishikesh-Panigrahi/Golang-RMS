import React, { useEffect, useState } from "react";
import axios from "axios";

const CreateDish = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [tag, setTag] = useState("");
  const [available, setAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const dish = {
      name: name,
      price: parseFloat(price),
      description: description,
      ingredients: ingredients,
      tag: tag,
      available: available,
    };
    console.log("Dish Data:", dish);
    try {
      const response = await axios.post("/dish/", dish, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        window.location.href = "/dish";
      } else {
        // TODO: Handle error in error page
        console.error("Dish failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during dish creation:", error);
    }
  };
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Dish</h1>

        <form onSubmit={submit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="10"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Software Engineer"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ingredients"
              className="block text-sm font-medium text-gray-700"
            >
              Ingredients
            </label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              placeholder="Morning"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              placeholder="Male"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="available"
              className="block text-sm font-medium text-gray-700"
            >
              Available
            </label>
            <input
              type="text"
              id="available"
              name="available"
              placeholder="Male"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDish;
