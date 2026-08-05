import "./Sidebar.css";
import avatar from "../../assets/avatar.png";
export default function Sidebar() {
  return (
    <aside className="sidebar">
    <div className="sidebar__user">
      <p className="sidebar__username">Zote</p>
      <img src={avatar} alt="Zote" className="sidebar__avatar" />{" "}
    </div>
    </aside>
  );
}
