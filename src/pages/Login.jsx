import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Key } from "lucide-react";

function Login({ login, loginAsAdmin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function navigateToHome() {
    navigate(-1);
  }

  function loginUser(e) {
    e.preventDefault();
    if (formData.email == "admin@admin.com" && formData.password == "admin") {
      loginAsAdmin(formData);
    } else {
      login(formData);
    }
    console.log(formData);
    // Fetch al back para guardar los datos y crear el usuario
  }

  return (
    <div className="flex flex-col justify-center py-5 bg-gray-700 min-h-screen px-3">
      <div className="rounded-2xl bg-gray-900 w-full mx-auto p-10 max-w-md md:max-w-xl">
        <div>
          <h1 className="text-center text-2xl font-bold  text-emerald-400">
            Login
          </h1>
        </div>
        <form onSubmit={loginUser} className="flex flex-col w-full space-y-5">
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

export default Login;
