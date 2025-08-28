import mansClothings from "../assets/mansClothing.jpg";
import electronics from "../assets/electronics.jpg";
import CategoryItem from "../components/CategoryItem";
import womenClothing from "../assets/womensClothing.jpg";
import jewerly from "../assets/jewerly.jpg";
import { useNavigate } from "react-router-dom";

function Categories() {
  const categories = [
    { href: "/men's clothing", name: "men's clothing", img: mansClothings },
    { href: "/women's clothing", name: "women's clothing", img: womenClothing },
    { href: "/electronics", name: "electronics", img: electronics },
    { href: "/jewerly", name: "jewerly", img: jewerly },
  ];

  function handleCategory() {}

  return (
    <div className="relative min-h-screen text-white overflow-hidden bg-gray-700 pt-25">
      <div className="relative z-10 mx-auto max-w-7xl px-10">
        <h1 className="text-emerald-400 text-center text-5xl font-bold mb-4">
          Categories
        </h1>

        <p className="text-center text-xl text-gray-300 mb-12">
          Discover the latest trends
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
