import React from 'react'
import Meal from './Meal';

function Card({restaurant}) {
    let meals = [];
    restaurant.attributes.meals.data.forEach((meal) => {
      meals.push(meal.attributes.name);
    });
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
      <p className='city'>
        Ville : {restaurant.attributes.ville.data.attributes.name}
      </p>
      <p className="meals">
        <span>Nom des plats :</span>
        {meals.map((meal, index) => {
          return <Meal meal={meal} key={index} />;
        })}
      </p>
    </div>
  );
}

export default Card
