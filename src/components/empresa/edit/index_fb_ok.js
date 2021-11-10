import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link, Redirect, Switch,Route } from 'react-router-dom';

const Company_edit = (id)=> {

	var [state, setState] = useState({});

	useEffect(()=>{
	
		API.get('company/get/' + id.id).then( (response) =>{
			
			console.log("company",response.data);
			setState(response.data);
		});
	}, []);

	var writeform = (input) => {
		const value = document.getElementById(input).value;
		console.log("KEY", input);
		console.log("VALUE", document.getElementById(input).value);

		setState( { ...state, [input]: value  } );

	}

	var saveform = () => {
		console.log("GUARDANDO.....", state);
	}

	return (
		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Empresa</h4>
								<h6 className="card-subtitle text-muted">Editar empresa - {state.ID}</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<div>
										<div className="row mt-3 mb-3">
											<div className="col-5">
												<input type="text" name="name" id="name" onChange={()=>{writeform("name")}} className="form-control" placeholder="Nombre" defaultValue={state.name}/>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<input type="text" name="phone" id="phone" onChange={()=>{writeform("phone")}} className="form-control" placeholder="Teléfono" defaultValue={state.phone}/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
												<input type="text" name="email" id="email" onChange={()=>{writeform("email")}}  className="form-control" placeholder="E-mail" defaultValue={state.email} />
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<input type="text" name="type" className="form-control" placeholder="Cliente, Proveedor, Delegación" defaultValue={state.type}/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
												<input type="text" name="delegation_of" className="form-control" placeholder="Delegación de..." defaultValue={state.delegation_of}/>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<input type="text" name="address" className="form-control" placeholder="Dirección" defaultValue={state.address}/>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
												<input type="text" name="postal" className="form-control" placeholder="Cod. Postal" defaultValue={state.postal_code}/>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<input type="text" name="locality" className="form-control" placeholder="Localidad" defaultValue={state.locality} />
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
												<input type="text" name="province" id="province" onChange={()=>{writeform("province")}}  className="form-control" placeholder="Provincia" defaultValue={state.province}/>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
											<button type="button" onClick={saveform} className="btn btn-primary form-control">Guardar</button>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<Link to={'/app/company/list'} className="btn btn-danger form-control">Volver</Link>
											</div>
										</div>
									</div>
								</div>
						</div>
				</div>
			</div>
		
	)
}

export default Company_edit;
