import React from "react";

const Card = ({
  name,
  is_potentially_hazardous_asteroid,
  absolute_magnitude_h,
  is_sentry_object,
  estimated_diameter,
}) => {
  return (
    <div className="card">
      <div className="data-container">
        <h1>{name}</h1>
        <p>Hazardous: {is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
        <p>Absolute Magnitude: {absolute_magnitude_h}</p>
        <p>Sentry object: {is_sentry_object ? "Yes" : "No"}</p>
        <p>
          Estimated max diameter in meters:{" "}
          {estimated_diameter.meters.estimated_diameter_max} meters
        </p>
      </div>
    </div>
  );
};

export default Card;
