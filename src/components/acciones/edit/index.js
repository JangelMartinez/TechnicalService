import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Actions_edit = (id)=> {

	var [state, setState] = useState({status: 'normal', action:{}});

	const {register, handleSubmit} = useForm();

	useEffect(()=>{
	
		API.get('actions/get/' + id.id).then( (response) =>{
			
			console.log("action",response.data);
			setState({status:'normal',action: response.data});
		});

		//datos();
	}, []);

	// GUARDAMOS DATOS
	var saveform = (datos) => {
		console.log("GUARDANDO.....", datos);
		API.post(('actions/edit/' + id.id), datos).then ((response) =>{
			console.log(response);
			if(response.status){
				window.location = "/app/action/list";
				//console.log("guardado correctamente",response.data );
			}
		});
	}



	return (
		
		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Acciones</h4>
								<h6 className="card-subtitle text-muted">Editar acción - {state.action.ID}</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<div>
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<input {...register('ID_COMPANY')} id="company" type="text" className="form-control" defaultValue={state.action.company}/>
												
												<label for="company" className="ms-3">Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('ID_CONTACT')} id="contacto" type="text" name="contacto" className="form-control" defaultValue={state.action.contact} />
												<label for="contacto" className="ms-3">Contacto</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('ID_CASE')} id="case" type="text" name="case" className="form-control" defaultValue={state.action.ID_CASE} />
												<label for="case" className="ms-3">Incidencia</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
											<select {...register('type')} id="type" list="type2" type="text" name="state" className="form-control">
													<option value="llamada">Llamada</option>
													<option value="email">E-mail</option>
													<option value="conexion Remoto" >Conx. Remoto</option>
													<option value="accion comercial" >Acc. Comercial</option>
													<option value="resolucion" >Resolución</option>
													<option value="reparacion" >Reparación</option>
													<option value="devolucion">Devolución</option>
												</select>
												<label for="type" className="ms-3">Tipo</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
											<select {...register('state')} id="state" type="text" name="state" className="form-control" >
													<option value="en curso">En curso</option>
													<option value="pendiente">Pendiente</option>
													<option value="cancelada" >Cancelada</option>
													<option value="completada" >Completada</option>
												</select>
												<label for="state" className="ms-3">Estado</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('description')} id="description" type="text" name="description" className="form-control" defaultValue={state.action.description} />
												<label for="description" className="ms-3">Descripción</label>
											</div>
										</div>
										
										<div className="row mb-3">
											<div className="col-5">
											<button type="submit" onClick={handleSubmit(saveform)} className="btn btn-primary form-control">Guardar</button>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<Link to={'/app/action/list'} className="btn btn-danger form-control">Volver</Link>
											</div>
										</div>
									</div>
								</div>
						</div>
				</div>
		</div>
		
	)
}

export default Actions_edit;
