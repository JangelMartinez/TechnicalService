import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Cases_add = ()=> {

	var [state, setState] = useState({data:[], datacompany:[], datacontact:[]});

	// REACT-HOOK-FORM
	const { register, handleSubmit} = useForm();

	useEffect(()=>{
		datos();	

	},[]);


	// GUARDAMOS DATOS
		var saveform = (datos) => {
			console.log("GUARDANDO.....", datos);
			API.post('cases/add', datos).then ((response) =>{
				console.log(response);
				if(response.status){
					window.location = "/app/cases/list";
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
								<h4 className="card-title">Incidencias</h4>
								<h6 className="card-subtitle text-muted">Añadir incidencia</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
								<div>
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<select {...register('ID_COMPANY')} id="ID_COMPANY" type="text" name="ID_COMPANY" className="form-control"  onChangeCapture={()=>showcontact(document.getElementById("ID_COMPANY").value)}>
													{state.datacompany}
												</select>
												<label for="ID_COMPANY" className="ms-3">Empresa</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<select {...register('ID_CONTACT')} id="ID_CONTACT" type="text" name="ID_CONTACT" className="form-control"  >
													{state.datacontact}
												</select>
												<label for="ID_CONTACT" className="ms-3">Contacto</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-5 form-floating">
												<input {...register('purchase')} id="purchase" type="text" name="purchase" className="form-control" />
												<label for="purchase" className="ms-3">Albarán</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('invoice')} id="invoice" type="text" name="invoice" className="form-control" />
												<label for="invoice" className="ms-3">Factura</label>
											</div>
										</div>
										<div className="row mb-3">
											<div className="col-4 form-floating">
												<input {...register('warranty_date')} id="warranty_date" type="date" name="warranty_date" className="form-control"  />
												<label for="warranty_date" className="ms-3">Fecha Garantia</label>
											</div>
											<div className="col-4 form-floating">
												<select {...register('cause')} id="cause" type="text" name="cause" className="form-control" >
													<option value="pedidos">Pedidos</option>
													<option value="comercial">Comercial</option>
													<option value="almacen" >Almacén</option>
													<option value="cliente" >Cliente</option>
													<option value="transporte" >Transporte</option>
													<option value="sat" >SAT</option>
													<option value="administracion">Administración</option>
													<option value="programacion" >Programación</option>
													<option value="proveedor">Proveedor</option>
												</select>
												<label for="cause" className="ms-3">Causa</label>
											</div>
											<div className="col-4 form-floating">
												<select {...register('state')} id="state" type="text" name="state" className="form-control" >
													<option value="esp. material">Esp. Material</option>
													<option value="esp. cliente">Esp. Cliente</option>
													<option value="esp. proveedor" >Esp. Proveedor</option>
													<option value="material recibido" >Material Recibido</option>
													<option value="cerrada" >Cerrada</option>
												</select>
												<label for="state" className="ms-3">Estado</label>
											</div>
											
										</div>
										<div className="row mb-3">
											<div className="col-12 form-floating">
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

export default Cases_add;
