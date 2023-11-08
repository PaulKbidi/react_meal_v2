import React, { useState } from 'react'
import Card from './Card';

function App() {
    const [restaurants, setRestaurants] = useState([]);
    const api ="http://localhost:1337/api/restaurants?populate=*";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const request = await fetch(api);
        const data = await request.json();
        setRestaurants(data.data)
        console.log(data.data);
    };


  return (
    <div>
      <header>
        <h1>Restaurants</h1>
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Rechercher" />
        </form>
      </header>
      <main>
      {restaurants
        .map((restaurant, index) => {
          return <Card restaurant={restaurant} key={index} />;
        })}
      </main>
    </div>
  );
}

export default App