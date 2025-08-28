import AuthButtons from "./AuthButtons";
import CartButton from "./CartButton";
import DashboardButton from "./DashboardButton";
import NavbarBase from "./NavbarBase";
import Icon from "./Icon";
import { Menu, X } from "lucide-react"; // iconos menú

import { useState } from "react";

function Navbar({ isLogin, isAdmin, logOut, cartItem }) {
  //logo/nombre
  //navegacion
  //carrito

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-900 w-full flex items-center gap-4 px-4 fixed z-100">
      <div className="w-full flex items-center justify-start gap-4 p-3">
        <Icon />
      </div>
      <div className="flex md:hidden">
        <CartButton cartItem={cartItem} isLogin={isLogin} />
      </div>
      <button
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28}></X> : <Menu size={28} />}
      </button>

      <div
        className={`
    flex-col md:flex md:flex-row md:items-center 
    gap-4 absolute md:static top-16 left-0 w-full md:w-auto
    bg-gray-900 py-4
    transition-all duration-300 ease-in-out
    ${isOpen ? "flex items-center" : "hidden"} 
     z-50 
  `}
      >
        <NavbarBase />
        <div className="hidden md:flex">
          <CartButton cartItem={cartItem} isLogin={isLogin} />
        </div>
        <DashboardButton isAdmin={isAdmin} />
        <AuthButtons isLogin={isLogin} logOut={logOut} />
      </div>
    </div>
  );
}

export default Navbar;
