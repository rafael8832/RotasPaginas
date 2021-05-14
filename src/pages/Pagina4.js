import React from "react";
import { Link } from "react-router-dom";

export default function Pagina4() {
  return (
    <div>
      <p>Essa é a página 4</p>
      <button>
        <Link to="/Pagina3">Anterior</Link>
      </button>
    </div>
  );
}
