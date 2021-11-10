import React from 'react'
import { Link } from 'react-router-dom';
//import reactDom from 'react-dom'

const Registro = (props) => {
	return (
		<React.Fragment>
			<nav className="navbar navbar-dark bg-primary">
				<h3 className="navbar-brand ms-5">Technical-service</h3>
			</nav>
			<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-4">
								<h4 className="card-title">Registro</h4>
								<h6 className="card-subtitle text-muted">Technical Service</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<form action="" method="post">
										<div className="row mt-3">
											<label className="form-label h6">Nombre</label>
											<input type="password" name="name" className="form-control" />
										</div>
										<div className="row">
											<label className="form-label h6">E-mail</label>
											<input type="text" name="email" className="form-control" />
										</div>
										<div className="row mt-3">
											<label className="form-label h6">Password</label>
											<input type="password" name="password" className="form-control" />
										</div>
										<div className="row mt-3">
											<label className="form-label h6">Repetir Password</label>
											<input type="password" name="password2" className="form-control" />
										</div>
										<button type="submit" className="btn btn-primary form-control mt-5">Registrarse</button>
									</form>
								</div>
								<div className="mt-3">
									<Link to="/" className="card-link h6">Iniciar sesión</Link>
								</div>
						</div>
				</div>
			</div>
		</React.Fragment>
	)
};

export default Registro;