import { useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  return <div className="text-9xl">detalle {id}</div>;
}

export default Detalle;
