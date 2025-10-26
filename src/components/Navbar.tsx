import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-[#1C2541] mt-5 mb-15 mx-3 rounded-2xl flex flex-row shrink text-white gap-5 sm:gap-20 sm:text-lg justify-center py-3 px-5 text-sm">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/new-invoice"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        New Invoice
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        History
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Settings
      </NavLink>
    </nav>
  );
};

export default Navbar;
