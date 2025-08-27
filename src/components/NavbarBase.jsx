import { Link } from "react-router-dom";
import LinkNavBar from "./LinkNavBar";

function NavbarBase() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <LinkNavBar route={"/"} name={"Home"} />
      <LinkNavBar route={"/category"} name={"Categories"} />
      <LinkNavBar route={"/contact"} name={"Contact"} />
    </div>
  );
}

export default NavbarBase;
