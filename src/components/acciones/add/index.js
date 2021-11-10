import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Actions_add = ()=> {

	var [state, setState] = useState({data:[], datacompany:[], datacontact:[]});

	// REACT-HOOK-FORM
		const { register, handleSubmit} = useForm();

	useEffect(()=>{
		datos();	

	},[]);

	// GUARDAMOS DATOS
		var saveform = (datos) => {
			//console.log("GUARDANDO.....", datos);
			API.post('actions/add', datos).then ((response) =>{
				//console.log(response);
				if(response.status){
					window.location = "/app/action/list";
					//console.log("guardado correctamente",response.data );
				}
			});
		}

	// DATOS A MOSTRAR

		const datos = () =>{
			
			API.get("others/datos").then( (response) =>{
				var company = response.data_company.map(element =>{
					return (<option value={element.ID}>{element.name}</option>);
				})
				
				var contact = response.data_contact.map(element =>{
					return (<option value={element.ID}>{element.name}</option>);
				})
				setState({...state, data:contact, datacompany: company, datacontact: contact});
			});
		}
		
		const showcontact = (id) =>{
			
			var show = state.data.filter((contactos) => {
				
				for(var i=0; i<state.data.length; i++){
					
					if(contactos.props.value === Number(id)){
						
						return contactos;
					}
				}
				
			}
			).map(element =>{
				console.log('elemente',element);
				return <option value={element.props.value}>{element.props.children}</option>;
			})

			setState({...state, datacontact: show});
			//console.log('contactos:',state.datacontact);
		}
		

	return (
		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Acciones</h4>
								<h6 className="card-subtitle text-muted">Añadir acción</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
								<div>
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<select className="form-control" id="company" {...register('ID_COMPANY') } onChangeCapture={()=>showcontact(document.getElementById("company").value)}>
													{state.datacompany}
												</select>
												<label for="company" className="ms-3">Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<select {...register('ID_CONTACT')} id="contacto" type="text" name="contacto" className="form-control">
												{state.datacontact}
												</select>
												<label for="contacto" className="ms-3">Contacto</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('ID_CASE')} id="case" type="text" name="case" className="form-control" />
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
												<textarea {...register('description')} id="description" type="text" name="description" className="form-control" />
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

export default Actions_add;
