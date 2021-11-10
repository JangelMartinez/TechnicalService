import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Cases_edit = (id)=> {

	var [state, setState] = useState({status: 'normal', case:{}});

	const {register, handleSubmit} = useForm();

	useEffect(()=>{
	
		API.get('cases/get/' + id.id).then( (response) =>{
			
			console.log("cases",response.data);
			setState({status:'normal',case: response.data});
		});
	}, []);

	// GUARDAMOS DATOS
	var saveform = (datos) => {
		console.log("GUARDANDO.....", datos);
		API.post(('cases/edit/' + id.id), datos).then ((response) =>{
			console.log(response);
			if(response.status){
				window.location = "/app/cases/list";
				//console.log("guardado correctamente",response.data );
			}
		});
	}

	var ponerfecha = (fecha) =>{

		if(!fecha){
			return '';
		}else{
			const date = fecha.split('T');
			return date[0];
		}	
	}

	return (

		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Incidencias</h4>
								<h6 className="card-subtitle text-muted">Editar incidencia - {state.case.ID}</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<div>
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<input {...register('ID_COMPANY')} id="company" type="text" name="company" className="form-control" defaultValue={state.case.company} />
												<label for="company" className="ms-3">Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('ID_CONTACT')} id="contact" type="text" name="contacto" className="form-control" defaultValue={state.case.user} />
												<label for="contact" className="ms-3">Contacto</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('purchase')} id="purchase" type="text" name="purchase" className="form-control" defaultValue={state.case.purchase}/>
												<label for="purchase" className="ms-3">Albarán</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('invoice')} id="invoice" type="text" name="invoice" className="form-control" defaultValue={state.case.invoice} />
												<label for="invoice" className="ms-3">Factura</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-4 form-floating">
												<input {...register('warranty_date')} id="warranty" type="date" name="warranty" className="form-control" defaultValue={ponerfecha(state.case.warranty_date)} />
												<label for="warranty" className="ms-3">Fecha Garantia</label>
											</div>
											<div className="col-4 form-floating">
												<input {...register('cause')} id="cause" type="text" name="cause" className="form-control" defaultValue={state.case.cause}/>
												<label for="cause" className="ms-3">Causa</label>
											</div>
											<div className="col-4 form-floating">
												<input {...register('state')} id="state" type="text" name="state" className="form-control" defaultValue={state.case.state}/>
												<label for="state" className="ms-3">Estado</label>
											</div>
											
										</div>
										<div className="row mb-3">
											<div className="col-12 form-floating">
												<textarea {...register('description')} id="description" type="text" name="description" className="form-control" defaultValue={state.case.description} />
												<label for="description" className="ms-3">Descripción</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5">
											<button type="submit" onClick={handleSubmit(saveform)} className="btn btn-primary form-control">Guardar</button>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<Link to={'/app/cases/list'} className="btn btn-danger form-control">Volver</Link>
											</div>
										</div>
									</div>
								</div>
						</div>
				</div>
		</div>
		
	)
}

export default Cases_edit;
