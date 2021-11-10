import React from 'react';
import API from '../../../config/api';
import { Link} from 'react-router-dom';
import { useForm } from "react-hook-form";


const Product_add = ()=> {

	// REACT-HOOK-FORM
	const { register, handleSubmit} = useForm();


	// GUARDAMOS DATOS
		var saveform = (datos) => {
			console.log("GUARDANDO.....", datos);
			API.post('products/add', datos).then ((response) =>{
				console.log(response);
				if(response.status){
					window.location = "/app/product/list";
					//console.log("guardado correctamente",response.data );
				}
			});
		}

	return (

		<div className="container">
				<div className="row justify-content-center">
						<div className="card mt-5 col-4">
								<h4 className="card-title">Productos</h4>
								<h6 className="card-subtitle text-muted">Nuevo producto</h6>
								<img src="holder.js/100x180/" alt="" />
								<div className="card-body">
									<div>
										<div className="row mt-3 mb-3 form-floating">
											<input {...register('code')} id="code" type="text" name="code" className="form-control" />	
											<label for="code" className="ms-3">Código</label>
										</div>
										<div className="row mb-3 form-floating">
											<input {...register('name')} id="name" type="text" name="name" className="form-control" />
											<label for='name' className='ms-3'>Nombre</label>
										</div>
										<div className="row mb-3 form-floating">
											<input {...register('description')} id="description" type="text" name="description" className="form-control" />
											<label for="description" className="ms-3">Descripción</label>
										</div>
										
										<div className="row mb-3 form-floating">
											<button type="submit" onClick={handleSubmit(saveform)} className="btn btn-primary form-control">Guardar</button>
										</div>
										<div className="row form-floating">
											<Link to={'/app/product/list'} className="btn btn-danger form-control">Volver</Link>
										</div>
									</div>
								</div>
						</div>
				</div>
		</div>
		
	)
}

export default Product_add;
