import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Contact_edit = (id)=> {

	var [state, setState] = useState({status: 'normal', datacontact:{}, datacompany:[]});

	const {register, handleSubmit} = useForm();

	useEffect(()=>{
		
		showdatos();

	}, []);

	// GUARDAMOS DATOS
	var saveform = (datos) => {
		//console.log("GUARDANDO.....", datos);
		API.post(('contacts/edit/' + id.id), datos).then ((response) =>{
			//console.log(response);
			if(response.status){
				window.location = "/app/contact/list";
				//console.log("guardado correctamente",response.data );
			}
		});

	
	}

	// DATOS A MOSTRAR

	const showdatos = () =>{

		API.get("others/datos").then( (response) =>{
			//console.log('ID :', id.id)
			var contact = response.data_contact.map(element =>{
				//console.log('id elemento :',element.ID);
				//console.log('id elemento numero :', Number(element.ID));
				if (Number(id.id) === element.ID){
					return element;
				}

			})

			//console.log('contacto: ', contact[0]);

			//console.log('empresas :', response.data_company);

			setState({...state, datacompany: response.data_company, datacontact: contact[0]});
		});	
			
			
		
	}
	

	return (

		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Contactos</h4>
								<h6 className="card-subtitle text-muted">Editar contacto - {state.datacontact.ID}</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('name')} id="name" type="text" name="name" className="form-control" defaultValue={state.datacontact.name}/>
												<label for="name" className="ms-3">Nombre</label>
												
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<select {...register('ID_company')} id="ID_Company" type="text" name="ID_company" className="form-control" >
													{state.datacompany.map((element)=>{
														//console.log("ID_COMPANY:", state.datacontact.ID_COMPANY);
														//console.log('ID :',element.ID);
														if (state.datacontact.ID_COMPANY === element.ID){
															return (<option key={element.ID} value={element.ID} selected>{element.name}</option>);
														}else{
															return (<option key={element.ID} value={element.ID}>{element.name}</option>);
														}
													})}
												</select>
												<label for="ID_Company" className="ms-3">Empresa</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('phone')} id="phone" type="text" name="phone" className="form-control" defaultValue={state.datacontact.phone}/>
												<label for="phone" className="ms-3">Teléfono</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('email')} id="email" type="text" name="email" className="form-control" defaultValue={state.datacontact.mail} />
												<label for="email" className="ms-3">E-mail</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-12 form-floating">
												<textarea {...register('notes')} id="notes" name="notes" className="form-control" defaultValue={state.datacontact.notes}/>
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

export default Contact_edit;
