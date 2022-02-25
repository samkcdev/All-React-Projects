import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import cardData from "./cardData";

import "./App.css";

function App() {
  let cards = cardData.map((card) => {
    return (
      //thress ways to send data to component
      // <Cards
      //   img={card.img}
      //   rating={card.rating}
      //   count={card.count}
      //   country={card.location}
      //   title={card.title}
      //   price={card.price}
      //   openSpots={card.openSpots}
      // />

      <Cards data={card} />
      //<Cards {...card} />
    );
  });

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <div className="card-container padding-container">
        {cards}
        {/* <Cards
          img={cardimg}
          rating="5.0"
          count={6}
          title="Life lessons with Katie Zaferes"
          price={136}
          country="USA"
        /> */}
      </div>
    </div>
  );
}

export default App;
