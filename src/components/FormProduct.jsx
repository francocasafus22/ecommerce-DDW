import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { DollarSign, Image, PencilLine } from "lucide-react";

const categories = ["electronics", "men's clothing"];

function FormProduct() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    description: "",
    id: "",
  });

  const navigate = useNavigate();

  function navigateToHome() {
    navigate(-1);
  }

  function saveProduct(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="flex flex-col justify-center bg-gray-700 px-3">
      <div className="rounded-2xl bg-gray-900 w-full mx-auto p-10 max-w-md md:max-w-xl">
        <div>
          <h1 className="text-center text-2xl font-bold  text-emerald-400">
            Create Product
          </h1>
        </div>
        <form onSubmit={saveProduct} className="flex flex-col w-full space-y-5">
          <FormInput
            icon={<PencilLine size={18} />}
            labelText={"Title"}
            inputType={"text"}
            placeholder={"Producto"}
            value={formData.title}
            onChangeFn={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <FormInput
            icon={<PencilLine size={18} />}
            labelText={"Description"}
            inputType={"text"}
            placeholder={"Descripción máxima de 100 carácteres"}
            value={formData.description}
            onChangeFn={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="bg-gray-700 text-white p-2 rounded-md mt-3"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          <FormInput
            icon={<DollarSign size={18} />}
            labelText={"Price"}
            inputType={"number"}
            placeholder={"99.99"}
            value={formData.price}
            onChangeFn={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
          />
          <FormInput
            icon={<Image size={18} />}
            labelText={"image"}
            inputType={"text"}
            placeholder={"Url de imágen del producto"}
            value={formData.image}
            onChangeFn={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />
          <FormInput
            icon={<PencilLine size={18} />}
            labelText={"Id"}
            inputType={"text"}
            placeholder={"1"}
            value={formData.id}
            onChangeFn={(e) => setFormData({ ...formData, id: e.target.value })}
          />

          <div className="flex flex-row justify-center gap-5 mt-2">
            <button
              onClick={navigateToHome}
              className="text-white bg-gray-700 w-full max-w-md py-2 px-5 rounded-md shadow-2xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer
"
            >
              Volver
            </button>
            <button
              type="submit"
              className="text-white  bg-emerald-700 w-full max-w-md py-2 px-5 rounded-md shadow-2xl hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduct;
