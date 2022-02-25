// import star from "/images/Star-1.png";

export default function Cards(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card-status">
        {props.data.openSpots === 0 ? "Sold Out" : "Online"}
      </div>
      <div className="card-preview">
        <img src={props.data.img} alt="card-img" />
      </div>
      <div className="card-info">
        <span className="card-info-rating">
          <span>
            <img src="/images/Star-1.png" alt="star" />
          </span>
          {props.data.rating}
          <span className="card-info-rating--rating-hilighted">
            ({props.data.count})-{props.data.country}
          </span>
        </span>

        <p>{props.data.title}</p>
        <p>
          <b>From ${props.data.price}</b> / person
        </p>
      </div>
    </div>
  );
}
