import React from "react";
import { Link } from "react-router-dom";

export default function Pagina2() {
  return (
    <div>
      <p>Essa é a página 2</p>
      <button>
        <Link to="/">Anterior</Link>
      </button>
      <button>
        <Link to="/Pagina3">Próxima</Link>
      </button>
    </div>
  );
}
