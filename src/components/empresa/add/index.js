import React from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from "react-hook-form";

const Company_add = ()=> {

	// REACT-HOOK-FORM
		const { register, handleSubmit} = useForm();


	// GUARDAMOS DATOS
		var saveform = (datos) => {
			//console.log("GUARDANDO.....", datos);
			API.post('company/add', datos).then ((response) =>{
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
								<h6 className="card-subtitle text-muted">Nueva empresa</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
								<div>
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<input {...register("name")} id="name" className="form-control" placeholder="Nombre"/>
												<label className="ms-3" for="name">Nombre Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("phone")} id="phone" className="form-control" placeholder="Teléfono" />
												<label className="ms-3" for="name">Teléfono</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("email")} type="email" name="email" className="form-control" placeholder="E-mail" />
												<label className="ms-3" for="name">E-mail</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<select {...register("type")} type="text" name="type" id="type" className="form-control" placeholder="Cliente, Proveedor, Delegación" >
													<option value='cliente'>Cliente</option>
													<option value='proveedor'>Proveedor</option>
													<option value='delegacion'>Delegación</option>
												</select>
												<label className="ms-3" for="type">Tipo de empresa</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("delegation_of")} type="text" id="delegation_of" name="delegation_of" className="form-control" placeholder="Delegación de..." />
												<label className="ms-3" for="delegation_of">Delegación de..</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("address")} type="text" id="address" name="address" className="form-control" placeholder="Dirección"/>
												<label className="ms-3" for="address">Dirección</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("postal_code")} type="text" id="postal" name="postal" className="form-control" placeholder="Cod. Postal" />
												<label className="ms-3" for="postal">Codigo Postal</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register("locality")} type="text" id="locality" name="locality" className="form-control" placeholder="Localidad"  />
												<label className="ms-3" for="locality">Localidad</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register("province")} type="text" id="province" name="province" className="form-control" placeholder="Provincia" />
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

export default Company_add;
