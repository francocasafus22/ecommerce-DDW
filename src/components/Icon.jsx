import { Store } from "lucide-react";
import { Link } from "react-router-dom";

function Icon() {
  return (
    <Link
      to="/"
      className="flex items-center  text-2xl font-extrabold  transition-transform transform hover:scale-105"
    >
      <div className="p-2 rounded-full flex items-center justify-center shadow-md">
        <Store size={32} className="text-emerald-500" />
      </div>
      <span className="bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
        Mi Tienda
      </span>
    </Link>
  );
}

export default Icon;
