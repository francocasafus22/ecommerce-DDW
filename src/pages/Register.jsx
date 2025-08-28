import { useState } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { User, Mail, Key, Calendar, IdCard } from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
    password: "",
    confirmPassword: "",
    fechaNacimiento: "",
  });

  const navigate = useNavigate();
  function navigateToHome() {
    navigate(-1);
  }

  function registerUser(e) {
    e.preventDefault();
    console.log(formData);
    // Fetch al back para guardar los datos y crear el usuario
  }

  return (
    <div className="flex flex-col justify-center py-5 bg-gray-700 min-h-screen">
      <div className="rounded-2xl bg-gray-900 w-full mx-auto p-10 max-w-sm md:max-w-xl">
        <div>
          <h1 className="text-center text-2xl font-bold  text-emerald-400">
            Register
          </h1>
        </div>
        <form
          onSubmit={registerUser}
          className="flex flex-col w-full space-y-5"
        >
          <FormInput
            icon={<User />}
            labelText={"Nombre"}
            inputType={"text"}
            placeholder={"Juan"}
            value={formData.nombre}
            onChangeFn={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
          <FormInput
            icon={<User />}
            labelText={"Apellido"}
            inputType={"text"}
            placeholder={"Ramirez"}
            value={formData.apellido}
            onChangeFn={(e) =>
              setFormData({ ...formData, apellido: e.target.value })
            }
          />
          <FormInput
            icon={<Mail />}
            labelText={"Email"}
            inputType={"email"}
            placeholder={"juan@gmail.com"}
            value={formData.email}
            onChangeFn={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormInput
            icon={<Key />}
            labelText={"Contraseña"}
            inputType={"password"}
            placeholder={"123"}
            value={formData.password}
            onChangeFn={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <FormInput
            icon={<Key />}
            labelText={"Repetir Contraseña"}
            inputType={"password"}
            placeholder={"123"}
            value={formData.confirmPassword}
            onChangeFn={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <FormInput
            icon={<Calendar />}
            labelText={"Fecha Nacimiento"}
            inputType={"date"}
            placeholder={"11/11/2000"}
            value={formData.fechaNacimiento}
            onChangeFn={(e) =>
              setFormData({ ...formData, fechaNacimiento: e.target.value })
            }
          />
          <FormInput
            icon={<IdCard />}
            labelText={"DNI"}
            inputType={"text"}
            placeholder={"10110110"}
            value={formData.dni}
            onChangeFn={(e) =>
              setFormData({ ...formData, dni: e.target.value })
            }
          />
          <div className="flex flex-row justify-center gap-5 mt-2">
            <button
              onClick={navigateToHome}
              className="text-white bg-gray-700 py-2 px-5 w-full rounded-md shadow-2xl hover:bg-gray-800 transition-colors duration-200 cursor-pointer
"
            >
              Volver
            </button>
            <button
              type="submit"
              className="text-white  bg-emerald-700 py-2 px-5 w-full rounded-md shadow-2xl hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
            >
              Registarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
