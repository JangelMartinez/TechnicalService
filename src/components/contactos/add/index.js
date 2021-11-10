import React, {useEffect, useState} from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from "react-hook-form";



const Contact_add = ()=> {

	var [state, setState] = useState({datacompany:[]});

	// REACT-HOOK-FORM
	const { register, handleSubmit} = useForm();

	useEffect(()=>{
		datos();	

	},[]);

	// DATOS A MOSTRAR

	const datos = () =>{
			
		API.get("company/get_list").then( (response) =>{
			var company = response.data.map(element =>{
				return (<option value={element.ID}>{element.name}</option>);
			})
			
			setState({...state, datacompany: company});
		});
	}

	// GUARDAMOS DATOS
		var saveform = (datos) => {
			//console.log("GUARDANDO.....", datos);
			API.post('contacts/add', datos).then ((response) =>{
				//console.log('response',response);
				if(response.status){
					window.location = "/app/contact/list";
					//console.log("guardado correctamente",response.data );
				}
			});
		}

	return (

		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Contactos</h4>
								<h6 className="card-subtitle text-muted">Añadir contacto</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
								<div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('name')} id="name" type="text" name="name" className="form-control" />
												<label for="name" className="ms-3">Nombre</label>
												
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<select {...register('ID_COMPANY')} id="ID_Company" type="text" name="ID_company" className="form-control" >
													{state.datacompany}
												</select>
												<label for="ID_Company" className="ms-3">Empresa</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('phone')} id="phone" type="text" name="phone" className="form-control" />
												<label for="phone" className="ms-3">Teléfono</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('email')} id="email" type="text" name="email" className="form-control" />
												<label for="email" className="ms-3">E-mail</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-12 form-floating">
												<textarea {...register('notes')} id="notes" name="notes" className="form-control" />
												<label for="notes" className="ms-3">Notas</label>
											</div>
										</div>
										
										<div className="row mb-3">
											<div className="col-5">
												<button onClick={handleSubmit(saveform)} className="btn btn-primary form-control" >Guardar</button>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<Link to={'/app/contact/list'} className="btn btn-danger form-control">Volver</Link>
											</div>
										</div>
									</div>
								</div>
						</div>
				</div>
		</div>
		
	)
}

export default Contact_add;
