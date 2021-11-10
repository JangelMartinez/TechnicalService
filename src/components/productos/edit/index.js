import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const Contact_edit = (id)=> {

	var [state, setState] = useState({status: 'normal', product:{}});

	const {register, handleSubmit} = useForm();

	useEffect(()=>{
	
		API.get('products/get/' + id.id).then( (response) =>{
			
			console.log("product",response.data);
			setState({status:'normal',product: response.data});
		});
	}, []);

	// GUARDAMOS DATOS
	var saveform = (datos) => {
		//console.log("GUARDANDO.....", datos);
		API.post(('products/edit/' + id.id), datos).then ((response) =>{
			//console.log(response);
			if(response.status){
				window.location = "/app/product/list";
				//console.log("guardado correctamente",response.data );
			}
		});
	}

	return (

		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-9">
								<h4 className="card-title">Productos</h4>
								<h6 className="card-subtitle text-muted">Editar producto - {state.product.ID}</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<form action="" method="post">
										<div className="row mt-3 mb-3">
											<div className="col-5 form-floating">
												<input {...register('code')} id='code' type="text" name="code" className="form-control" defaultValue={state.product.code} />
												<label for='code' className='ms-3'>Código</label>
											</div>
											<div className="col-2"></div>
											<div className="col-5 form-floating">
												<input {...register('name')} id='name' type="text" name="name" className="form-control" defaultValue={state.product.name}/>
												<label for='name' className='ms-3'>Nombre</label>
											</div>
										</div>
										
										<div className="row mb-3">
											<div className="col-12 form-floating">
												<textarea {...register("description")} id='description' type="text" name="description" className="form-control" defaultValue={state.product.description}/>
												<label for='description' className='ms-3'>Descripción</label>
											</div>
			
										</div>
										
										<div className="row mb-3">
											<div className="col-5">
											<button type="submit" onClick={handleSubmit(saveform)} className="btn btn-primary form-control">Guardar</button>
											</div>
											<div className="col-2"></div>
											<div className="col-5">
												<Link to={'/app/product/list'} className="btn btn-danger form-control">Volver</Link>
											</div>
										</div>
									</form>
								</div>
						</div>
				</div>
		</div>
		
	)
}

export default Contact_edit;
