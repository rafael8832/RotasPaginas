import React from "react";
import { Link } from "react-router-dom";

export default function Pagina1() {
  return (
    <div>
      <p>Essa é a página 1</p>
      <button>
        <Link to="/Pagina2">Próxima</Link>
      </button>
    </div>
  );
}
