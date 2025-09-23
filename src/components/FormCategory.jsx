import { useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { Image, PencilLine, CommandIcon } from "lucide-react";

function FormCategory() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    status: true,
    href: "",
  });

  const navigate = useNavigate();

  function navigateToHome() {
    navigate(-1);
  }

  async function saveProduct(e) {
    e.preventDefault();

    // Validación simple
    if (!formData.name || !formData.description || !formData.href) {
      alert("Faltan campos obligatorios");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        navigateToHome();
      } else {
        console.error("Error al crear producto");
      }
    } catch (err) {
      console.error("Error de conexión:", err);
    }
  }

  return (
    <div className="flex flex-col justify-center bg-gray-700 px-3">
      <div className="rounded-2xl bg-gray-900 w-full mx-auto p-10 max-w-md md:max-w-xl">
        <h1 className="text-center text-2xl font-bold text-emerald-400">
          Create Category
        </h1>

        <form onSubmit={saveProduct} className="flex flex-col w-full space-y-5">
          <FormInput
            icon={<PencilLine size={18} />}
            labelText={"Name"}
            inputType={"text"}
            placeholder={"Categoria"}
            value={formData.name}
            onChangeFn={(e) =>
              setFormData({ ...formData, name: e.target.value })
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

          <FormInput
            icon={<CommandIcon size={18} />}
            labelText={"href"}
            inputType={"text"}
            placeholder={"href de la categoria"}
            value={formData.href}
            onChangeFn={(e) =>
              setFormData({ ...formData, href: e.target.value })
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

export default FormCategory;
