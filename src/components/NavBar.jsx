import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar" role="navigation">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
    </div>
  );
}