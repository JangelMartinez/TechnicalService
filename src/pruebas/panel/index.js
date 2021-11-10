import React, { useEffect, useState } from "react";


const Panel = (props) => {

	// HOOK: Crea un estado
		var [estado, setEstado] = useState({ user: props.user || "Anónimo", token: null });

		console.log(estado);

	// HOOK: Renderiza si modifica el estado o la primera vez
		useEffect(()=>{ console.log("En el 1º renderizado"); }, []); // Si el esta cambia NO se ejecuta
		useEffect(()=>{ console.log("En todos se muestra"); }); // Se ejecuta siempre que se renderiza algo

	// Funciones normales dentro de una función flecha
		var loguear = () => {
			setEstado({...estado, user: "María"});
		}


	return(
		<div className="compPanel">
			<h1>Soy la home</h1>
			{estado.user}
			<br></br>
			<button onClick={loguear}>Logueame!</button>
		</div>
	)

};

export default Panel;