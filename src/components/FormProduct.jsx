import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { DollarSign, Image, PencilLine } from "lucide-react";
import useCategories from "../hooks/useCategories";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../api/product";

function FormProduct() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createProductMutate, isLoading: isSaving } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      // Refrescar la lista de productos automáticamente
      queryClient.invalidateQueries(["products"]);
      navigate("/");
    },
    onError: (error) => {
      console.log("Error creando producto: ", error);
    },
  });

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const { categories, isLoading, error } = useCategories();

  function navigateToHome() {
    navigate(-1);
  }

  async function saveProduct(e) {
    e.preventDefault();

    // Validación simple
    if (!formData.title || !formData.category || !formData.price) {
      alert("Faltan campos obligatorios");
      return;
    }

    createProductMutate(formData);
  }

  return (
    <div className="flex flex-col justify-center bg-gray-700 px-3">
      <div className="rounded-2xl bg-gray-900 w-full mx-auto p-10 max-w-md md:max-w-xl">
        <h1 className="text-center text-2xl font-bold text-emerald-400">
          Create Product
        </h1>

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
            {isLoading ? (
              <option disabled>Cargando categorías...</option>
            ) : error ? (
              <option disabled>Error al cargar categorías</option>
            ) : (
              categories.map((category) => (
                <option value={category.name} key={category._id}>
                  {category.name}
                </option>
              ))
            )}
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
            labelText={"Image"}
            inputType={"text"}
            placeholder={"URL de imagen del producto"}
            value={formData.image}
            onChangeFn={(e) =>
              setFormData({ ...formData, image: e.target.value })
            }
          />

          <div className="flex flex-row justify-center gap-5 mt-2">
            <button
              type="button"
              onClick={navigateToHome}
              className="text-white bg-gray-700 w-full max-w-md py-2 px-5 rounded-md shadow-2xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
            >
              Volver
            </button>

            <button
              type="submit"
              className="text-white bg-emerald-700 w-full max-w-md py-2 px-5 rounded-md shadow-2xl hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProduct;
