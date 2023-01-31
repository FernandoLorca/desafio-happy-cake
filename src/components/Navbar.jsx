import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-500 p-3 text-white">
      <ul className="flex gap-5">
        <li>
          <NavLink to="/" className="hover:underline">
            🏡 Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:underline">
            📘 Contacto
          </NavLink>
        </li>
      </ul>
      <p>
        <b>Happy Cake 🍰</b>
      </p>
    </div>
  )
}
export default Navbar
