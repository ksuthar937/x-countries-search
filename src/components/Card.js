import React from "react";

const Card = ({ data }) => {
  const { name, flags } = data;

  return (
    <div className="countryCard">
      <img src={flags.png} alt={name.official} width={100} height={70} />
      <p>{name.common}</p>
    </div>
  );
};

export default Card;
