import "./ItemModal.css";

function ItemModal({ activeModal, handleCloseModal, card, onRemoveItem }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
           <button
          onClick={onRemoveItem}
          type="button"
          className="delete__clothes-button">Delete item</button>
          <h2 className="modal__caption">{card.name} </h2>
          <p className="modal__weather">Weather: {card.weather}  </p>
        </div>
      </div>
    </div>
  );
}
/*
<button
  onClick={handleAddClick}
  type="button"
  className="header__add-clothes-button">
 */
export default ItemModal;
