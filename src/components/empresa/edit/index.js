import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

const Company_edit = (id)=> {

	var [state, setState] = useState({});

	// REACT-HOOK-FORM
		const { register, handleSubmit} = useForm();


	// RECUPERAMOS LOS DATOS A EDITAR
		useEffect(()=>{
		
			API.get('company/get/' + id.id).then( (response) =>{
				
				//console.log("company",response.data);
				setState(response.data);
			});
		}, []);

	// GUARDAMOS DATOS
		var saveform = (datos) => {
			//console.log("GUARDANDO.....", datos);
			API.post(('company/edit/' + id.id), datos).then ((response) =>{
				//console.log(response);
				if(response.status){
					window.location = "/app/company/list";
					//console.log("guardado correctamente",response.data );
				}
			});
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
											<div className="col-5 form-floating">
												<input {...register("name")} id="name" className="form-control" placeholder="Nombre" defaultValue={state.name}/>
												<label className="ms-3" for="name">Nombre Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("phone")} id="phone" className="form-control" placeholder="Teléfono" defaultValue={state.phone}/>
												<label className="ms-3" for="phone">Teléfono</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("email")} type="email" name="email" className="form-control" placeholder="E-mail" defaultValue={state.email} />
												<label className="ms-3" for="email">E-mail</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("type")} type="text" name="type" id="type" className="form-control" placeholder="Cliente, Proveedor, Delegación" defaultValue={state.type}/>
												<label className="ms-3" for="type">Tipo de empresa</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("delegation_of")} type="text" id="delegation_of" name="delegation_of" className="form-control" placeholder="Delegación de..." defaultValue={state.delegation_of}/>
												<label className="ms-3" for="delegation_of">Delegación de..</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("address")} type="text" id="address" name="address" className="form-control" placeholder="Dirección" defaultValue={state.address}/>
												<label className="ms-3" for="address">Dirección</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("postal_code")} type="text" id="postal" name="postal" className="form-control" placeholder="Cod. Postal" defaultValue={state.postal_code}/>
												<label className="ms-3" for="postal">Codigo Postal</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("locality")} type="text" id="locality" name="locality" className="form-control" placeholder="Localidad" defaultValue={state.locality} />
												<label className="ms-3" for="locality">Localidad</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("province")} type="text" id="province" name="province" className="form-control" placeholder="Provincia" defaultValue={state.province}/>
												<label className="ms-3" for="province">Provincia</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
											<button type="submit" onClick={handleSubmit(saveform)} className="btn btn-primary form-control">Guardar</button>
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
