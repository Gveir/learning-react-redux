import React from "react";

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? "summer" : "winter";
  } else {
    return latitude < 0 ? "summer" : "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const icon = season === "winter" ? "snowflake" : "sun";
  return (
    <div>
      <i className={`icon ${icon}`} />
      <h1>
        {season === "summer" ? "Let's hit the beach!" : "Burr, it's chilly!"}
      </h1>
      <i className={`icon ${icon}`} />
    </div>
  );
};

export default SeasonDisplay;
