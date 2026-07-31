import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  name,
  activeModal,
  handleCloseModal,
  isOpen,
  onSubmit,
}) {
  //<div className={modal ${isOpen ? 'modal__open' : ''}}>
  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseModal}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
