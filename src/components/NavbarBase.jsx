import { Link } from "react-router-dom";

function NavbarBase() {
  return (
    <div className="flex items-center gap-4">
      <Link
        to={"/"}
        className="text-gray-200 transition-colors duration-200 hover:text-emerald-400
      "
      >
        Home
      </Link>
      <Link
        to={"/contact"}
        className="text-gray-200 transition-colors duration-200 hover:text-emerald-400"
      >
        Contact
      </Link>
    </div>
  );
}

export default NavbarBase;
