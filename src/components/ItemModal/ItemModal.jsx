import "./ItemModal.css";

function ItemModal({ activeModal, handleCloseModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close"
        ></button>
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name} </h2>
          <p className="modal__weather">Weather: {card.weather}  </p>
        </div>
        <img src={card.link} alt="" className="modal__image" />
      </div>
    </div>
  );
}

export default ItemModal;
