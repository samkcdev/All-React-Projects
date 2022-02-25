export default function Cards(props) {
  console.log(props);
  return (
    <div className="card-parent">
      <div className="card-img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="card-content">
        <span>
          <a href={props.link}>TMDB Link</a>
        </span>
        <h2>
          {props.title} ({props.year})
        </h2>
        <span className="genre">{props.genre}</span>
        <span className="rating">{props.rating}</span>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
