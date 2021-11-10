import React, {useState, useEffect} from 'react';
import API from '../../config/api';
import { useForm } from 'react-hook-form';

const Profile = () => {

	var [usuario, setusuario] = useState({});
	const {register, handleSubmit} = useForm({usuario});

	useEffect(()=>{
		API.get('users/get').then((response)=>{
			setusuario(response.data);
		})
	},[]);

	var modificar = () =>{
		document.getElementById('name').removeAttribute('disabled');
		document.getElementById('email').removeAttribute('disabled');
		document.getElementById('phone').removeAttribute('disabled');
		document.getElementById('modificar').setAttribute('hidden','');
		document.getElementById('guardar').removeAttribute('hidden');
	}

	var saveform = (datos) => {
		console.log("GUARDANDO.....", datos);
		API.post(('users/edit/' + usuario.ID), datos).then ((response) =>{
			console.log(response);
			document.getElementById('name').setAttribute('disabled','');
			document.getElementById('email').setAttribute('disabled','');
			document.getElementById('phone').setAttribute('disabled','');
			document.getElementById('guardar').setAttribute('hidden','');
			document.getElementById('modificar').removeAttribute('hidden');
			console.log("guardado correctamente",response.data );
			
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
		<React.Fragment>
			<div className="container">
				<div className="row mt-4">
					<div className="col-3">
						<img src={"https://www.gravatar.com/avatar/"+ usuario.hash + "?s=200"} alt='' height="200px" width="200px" />	
					</div>
					<div className="col-4">
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input id="id" name="id" className="form-control" defaultValue={usuario.ID} disabled/>
								<label for="id" className="ms-3 fw-bold">ID</label>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input {...register('email')}id="email" name="email" className="form-control" defaultValue={usuario.email} disabled />
								<label for="email" className="ms-3 fw-bold">E-mail</label>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input id="last" name="last" className="form-control" defaultValue={ponerfecha(usuario.last_connection)} disabled/>
								<label for="last" className="ms-3 fw-bold">Última conexión</label>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input {...register('name')} id="name" name="name" className="form-control" defaultValue={usuario.name} disabled/>
								<label for="name" className="ms-3 fw-bold">Nombre</label>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input {...register('phone')} id="phone" name="phone" className="form-control" defaultValue={usuario.phone} disabled/>
								<label for="phone" className="ms-3 fw-bold">Teléfono</label>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 form-floating">
								<input id="created" name="created" className="form-control" defaultValue={ponerfecha(usuario.created)} disabled/>
								<label for="created" className="ms-3 fw-bold">Creado</label>
							</div>
						</div>
						<div className="row mt-3">
							<div className="col-12 text-end ">
								<button id="modificar" onClick={modificar} className="btn btn-info">Modificar</button>
								<button id="guardar" onClick={handleSubmit(saveform)} className="btn btn-secondary" hidden>Guardar</button>
							</div>
						</div>
						
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-12 alert alert-secondary text-center">
						<h4 className="h4">Estadísticas</h4>
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-2">
						<p className="fw-bold text-end">Fecha Inicio :</p>
					</div>
					<div className="col-3">
						<input type="date" name="" id="" className="form-control" />
					</div>
					<div className="col-2">
						<p className="fw-bold text-end">Fecha Fin :</p>
					</div>
					<div className="col-3">
						<input type="date" name="" id="" className="form-control" />
					</div>
				</div>
				
				<div className="row mt-4 mb-4">
					<div className="col-1"></div>
					<div className="col-5">
						<div className="row mt-3">
							<h5>Incidencias</h5>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>Abiertas</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>En curso</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>Pendientes</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
					</div>
					<div className="col-1"></div>
					<div className="col-5">
						<div className="row mt-3">
							<h5>Acciones</h5>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>Abiertas</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>En curso</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
						<div className="row ms-3">
							<div className="col-3 fw-bold">
								<p>Pendientes</p>
							</div>
							<div className="col-9 text-primary">
								<p>432</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Profile
