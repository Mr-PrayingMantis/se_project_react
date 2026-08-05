import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import currentTemperatureUnitContext from "../../contexts/currentTemperatureUnitContext";

const AddItemModal = ({ isOpen, onAddItem, handleCloseModal }) => {
  const defaultValues = {
      name: "",
      image: "",
      weather: "",
    };
  const {values, handleChange} = useForm(defaultValues);
  const handleSubmit = (evt) => {
  evt.preventDefault();
  onAddItem(values);
};
  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      handleCloseModal={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        NAME{" "}
        <input
          name="name"
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image Url"
          name="image"
          required
          value={values.image}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons" name="weather">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="hot"
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="warm"
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label
          htmlFor="cold"
          className="modal__label modal__label_type_radio"
          name="weather"
        >
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="weather"
            value="cold"
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
