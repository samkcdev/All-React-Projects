import Cards from "./Cards";
import moviedb from "./data";
import "./App.css";

function App() {
  let card = moviedb.map((d) => {
    return (
      <Cards
        img={d.imgurl}
        title={d.title}
        year={d.year}
        rating={d.rating}
        desc={d.description}
        genre={d.genre}
        link={d.link}
      />
    );
  });

  return (
    <div className="App">
      <h1>Movie Watched in 2022</h1>
      {card}
    </div>
  );
}

export default App;
