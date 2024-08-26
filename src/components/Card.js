import React from "react";

const Card = ({ data }) => {
  const { name, flag, abbr } = data;

  return (
    <div className="card">
      <img src={flag} alt={abbr} width={100} height={70} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
