import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, apiKey } from "../../utils/constants";
import currentTemperatureUnitContext from "../../contexts/currentTemperatureUnitContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import { Routes, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getItems, addItem } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setcurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setcurrentTemperatureUnit("C");
    } else {
      setcurrentTemperatureUnit("F");
    }
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onAddItem = (inputValues) => {
    const newCardData = {
      name: inputValues.name,
      imageUrl: inputValues.imageUrl,
      weather: inputValues.weather,
    };

    addItem(newCardData)
      .then((data) => {
        const reversed = [...data].reverse();
        setClothingItems(reversed);
        closeModal();
      })
      .catch(console.error);
  };
  //json-server --watch db.json --id _id --port 3001
  /*const reversed = [...data].reverse();
        setClothingItems(reversed); */
  const handleAddClick = () => {
    setActiveModal("add-garment");
  };
  const closeModal = () => {
    setActiveModal("");
  };
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);
  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);

    getItems()
      .then((data) => {
        const array = [
          "Beanie",
          "Boot",
          "Cap",
          "Coat",
          "Dress",
          "Hoodie",
          "Jacket",
          "Jeans",
          "Loafers",
          "Sandals",
          "Scarf",
          "Shorts",
          "Skirt",
          "Sneakers",
          "Sunglasses",
          "Sweatshirt",
          "T-Shirt",
          "Ace Spades",
          "Sinful Shell",
        ];
        const reversed = array.reverse();
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <currentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
        <AddItemModal
          activeModal={activeModal}
          handleCloseModal={closeModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          handleCloseModal={closeModal}
        />
      </div>
    </currentTemperatureUnitContext.Provider>
  );
}
export default App;
