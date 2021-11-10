import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import API from '../../config/api';
//import reactDom from 'react-dom'

const Login = (props) => {

	var [state, setState] = useState({status:'normal'});

	const check_loguin = (e) => {
		const usuario = document.getElementById("usuario").value;
		const password = document.getElementById("password").value;

		//console.log(usuario, password);

		API.post("users/login", {
			email: usuario,
			password: password
		}).then(response => {
			if(response.status === true){
				API.save_token(response.data.token);

				//window.location = "/app/home/home";
				setState({status:'redirect', redirect: "/app/home/home"});

			}else{
				setState({status:'error'});
			}
		});
	}

	console.log("ME EJECUTO");

	return (

		<div>
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>:"") }

			<nav className="navbar navbar-dark bg-primary">
				<h3 className="navbar-brand ms-5">Technical-service</h3>
			</nav>
			<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-4">
							<h4 className="card-title">Login</h4>
							<h6 className="card-subtitle text-muted">Technical Service</h6>
							<div className="card-body">

								{
									(state.status==="error"?<div className="alert alert-danger mt-2 me-2">Usuario o Contraseña incorrectos.</div>:"")
								}
								

								<form action="" method="post">
									<div className="row">
										<label className="form-label h6">Usuario</label>
										<input type="text" name="usuario" className="form-control" id="usuario" />
									</div>
									<div className="row mt-3">
										<label className="form-label h6">Password</label>
										<input type="password" name="password" className="form-control" id="password" />
									</div>
									<button type="button" onClick={check_loguin} className="btn btn-primary form-control mt-5">Accede</button>
								</form>
							</div>
							<div className="mt-3">
								<Link to="/registro" className="card-link h6">Regitrarse</Link>
								<Link to="#" className="card-link h6">Ha olvidado el password?</Link>
							</div>
						</div>
					</div>
			</div>
		</div>
	)
};

export default Login;