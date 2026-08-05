import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

export default function Profile({ clothingItems, handleCardClick }) {
  return (
    <section className="profile">
      <Sidebar />
      <ClothesSection
        handleCardClick={handleCardClick}
        clothingItems={clothingItems}
      />
    </section>
  );
}
