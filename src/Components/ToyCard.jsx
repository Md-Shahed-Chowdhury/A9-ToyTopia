import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router";

const ToyCard = (toy) => {
  const { pictureURL, toyName, rating, availableQuantity, price, toyId } = toy;
  const navigate = useNavigate();
  const handleViewMore = () => {
    navigate(`/toyDetails/${toyId}`);
  };

  return (
    <div className="bg-primary shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300  pb-3">
      <div className="relative group">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-300"></div>
      </div>

      <div className="p-4 flex flex-col justify-between h-48">
        <h3 className="text-xl font-semibold text-gray-800">{toyName}</h3>

        <div className="flex items-center text-yellow-500 mt-2">
          <FaStar className="mr-1" /> <span>{rating}</span>
        </div>

        <p className="text-gray-600 mt-1">Available: {availableQuantity}</p>
        <p className="text-lg font-bold text-blue-600 mt-1">${price}</p>

        <button
          onClick={handleViewMore}
          className="mt-4 bg-accent text-white font-medium py-2 rounded-lg hover:bg-secondary transition"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
