import React from "react";

const Map = () => {
  const handleStateClick = (state) => {
    console.log("Clicked:", state);
  };

  return (
    <div className="flex justify-center bg-white py-20">
      <svg
        viewBox="0 0 1000 1000"
        className="w-[500px]"
        fill="#6f9c76"
        stroke="#ffffff"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g id="features">
          {/* Telangana */}
          <path
            id="INTG"
            name="Telangana"
            d="M355.2 698.3l0.1-1.2 ..."
            className="cursor-pointer hover:fill-sky-500 transition-all"
            onClick={() => handleStateClick("Telangana")}
          />

          {/* Andaman & Nicobar */}
          <path
            id="INAN"
            name="Andaman and Nicobar"
            d="M802.5 941.1l-0.2 0.4 ..."
            className="cursor-pointer hover:fill-orange-500 transition-all"
            onClick={() => handleStateClick("Andaman & Nicobar")}
          />
        </g>
      </svg>
    </div>
  );
};

export default Map;
