import "./ItemCard.css";

function ItemCard({props, onCardClick}) {
  return (
    <li className="card">
      <h2 className="card__name">{props.item.name}</h2>
      <img onCardClick={() => {
          onCardClick(props.item);
        }} 
        className="card__image" 
        src={props.item.link} 
        alt={props.item.name} />
    </li>
  );
}

export default ItemCard;
