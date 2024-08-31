import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowTables = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seats = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, 6],
  ];
  const availableSeats = ['D5', 'D6', 'E4', 'E5', 'E6', 'F4', 'F5', 'F6'];

  const isAvailable = (row, seat) => availableSeats.includes(`${row}${seat}`);
  return (
    <div className="flex flex-col items-center space-y-4">
    <div className="text-gray-600 text-lg">Rs. 1240 INSIGNIA</div>
    <div className="grid grid-cols-7 gap-4">
      {rows.map((row, rowIndex) => (
        <React.Fragment key={row}>
          <div className="flex items-center justify-center text-gray-700 font-semibold">{row}</div>
          {seats[rowIndex].map((seat) => (
            <div
              key={seat}
              className={`flex items-center justify-center w-10 h-10 border rounded-lg ${
                isAvailable(row, seat) ? 'border-green-500 text-green-500' : 'bg-gray-200 text-gray-400'
              }`}
            >
              {seat}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
    <div className="mt-8">
      <div className="w-48 h-6 bg-blue-100 rounded-full mx-auto"></div>
      <div className="text-center text-gray-600 mt-2">All eyes this way please!</div>
    </div>
  </div>
  );
};

export default ShowTables;
