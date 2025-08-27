import { Link } from "react-router-dom";
function LinkNavBar({ route, name }) {
  return (
    <Link
      to={route}
      className="text-gray-200 transition-colors duration-200 hover:text-emerald-400"
    >
      {name}
    </Link>
  );
}

export default LinkNavBar;
