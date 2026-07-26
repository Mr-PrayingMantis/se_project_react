import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTempertureUnitContext from "../../contexts/currentTempertureUnitContext";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTempertureUnit } = useContext(
    CurrentTempertureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__square"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${currentTempertureUnit === "F" ? "toggle-switch__text_color_white" : ""}`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${currentTempertureUnit === "C" ? "toggle-switch__text_color_white" : ""}`}
      >
        C
      </span>
    </label>
  );
}
