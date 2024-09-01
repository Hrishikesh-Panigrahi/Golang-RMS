import React, { useEffect, useState } from "react";
import axios from "axios";

const CheckTable = () => {
  const [Date, setDate] = useState("");
  const [Time, setTime] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const table = {
      Date: Date,
      Time: Time,
    };

    console.log("table Data:", table);

    try {
      const response = await axios.post("/table/", table, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        window.location.href = "/book-table";
      } else {
        // TODO: Handle error in error page
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form
      onSubmit={submit}
      id="book-table-form"
      action="/book-table"
      method="POST"
      className="p-6 bg-gray-100 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Book a Table</h2>

      <div className="mb-4">
        <label for="name" className="block text-lg font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label for="phone" className="block text-lg font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label for="date" className="block text-lg font-medium text-gray-700">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label for="time" className="block text-lg font-medium text-gray-700">
          Time
        </label>
        <input
          type="time"
          id="time"
          name="time"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label for="guests" className="block text-lg font-medium text-gray-700">
          Number of Guests
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Check
        </button>
      </div>
    </form>
  );
};

export default CheckTable;
