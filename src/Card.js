import React from 'react'

function Card({restaurant}) {
    var op = "";
    var color = "";
    if (restaurant.attributes.open === false) {
        op = "fermé";
        color = "red";
    } else {
        op = "ouvert";
        color = "green";
    }
  return (
    <div className="card">
        <h1>{restaurant.attributes.name} </h1>
        <p className={color}> {op} </p>
        <p>Nom du plat : {} </p>
        <p>Nom de la Ville : {restaurant.attributes.ville.data.attributes.name} </p>
    </div>
  );
}

export default Card
