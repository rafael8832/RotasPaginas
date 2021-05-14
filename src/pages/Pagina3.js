import React from "react";
import { Link } from "react-router-dom";

export default function Pagina3() {
  return (
    <div>
      <p>Essa é a página 3</p>
      <button>
        <Link to="/Pagina2">Anterior</Link>
      </button>
      <button>
        <Link to="/Pagina4">Próxima</Link>
      </button>
    </div>
  );
}
