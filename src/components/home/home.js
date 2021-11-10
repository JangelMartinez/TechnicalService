import React, { useEffect, useState } from 'react';
import API from '../../config/api';
import { Link, Redirect } from 'react-router-dom';
import ModalAction from '../acciones/get';
import ModalCase from '../cases/get';



 const Home = ()=> {

	var [state, setState] = useState({
		status: 'normal',
		data_actions:[],
		data_cases:[],
		btnaction: {status: false, data: {} },
		btncase: {status: false, data: {} }
	});


	useEffect(()=>{

		if(API.get_token === false){
			setState({status:'redirect', redirect: "/login"});
		}

		API.get("others/home").then( (response) =>{
			console.log(response.data_actions);
			console.log(response.data_cases);
			setState({...state, status:'normal',data_actions: response.data_actions, data_cases: response.data_cases});
		});
	}, []);


	const cerrarPopup = (type_popup) =>{ 

		setState({
			...state,
			btnaction: { status:false },
			btncase: { status:false }
		});
			
	}

	const get_action = (id)=>{
		API.get(("actions/get/"+id)).then((response)=>{
			//console.log("response get action", response.data);
			setState({
				...state,
				btnaction: {
					status:true,
					data: response.data
				}
			});
			
		});
	};

	const get_case = (id)=>{
		
		API.get(("cases/get/"+id)).then((response)=>{
			console.log("response get case", response.data);
			setState({
				...state,
				btncase: {
					status:true,
					data: response.data
				}
			});
			
		});

	}

	return (
		<React.Fragment>
		<div className="container">
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>:"") }
			{ state.btnaction.status ? (<ModalAction btnv={state.btnaction.data} HandleClick={cerrarPopup}/>) : (<div></div>)}
			{ state.btncase.status ? (<ModalCase btnv={state.btncase.data} HandleClick={cerrarPopup}/>) : (<div></div>) }

			<div className="row mt-4">
				<div className="col-11 ">
					<div className="h6">Últimas acciones <span className="h6">(mias sin cerrar)</span></div>
				</div>
				<div className="col-1">
					<Link to="/app/action/add" className="btn btn-outline-primary btn-small">Nueva</Link>
				</div>
				
			</div>
			<div className="row mt-3">
				<table className="table">
					<thead>
						<tr>
							<th className="col">ID</th>
							<th className="col">Empresa</th>
							<th className="col">Contacto</th>
							<th className="col">Incidencia</th>
							<th className="col">Tipo</th>
							<th className="col">Estado</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						{state.data_actions.map((Element, i)=>{
							return (<tr>
										<th className="text-primary">{Element.ID}</th>
										<td className="text-primary">{Element.company}</td>
										<td className="text-primary">{Element.contact}</td>
										<td className="text-primary">{Element.ID_CASE}</td>
										<td className="text-primary">{Element.type}</td>
										<td className="text-primary">{Element.state}</td>
										<td>
											<Link to={'/app/action/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
											<Link to={'/app/action/delete/'+Element.ID} className="btn btn-outline-danger">B</Link>
											<button className="btn btn-outline-info" onClick={()=>{get_action(Element.ID)}}>V</button>
										</td>
									</tr>);
						})}
						
					</tbody>
				</table>
			</div>

			<div className="row mt-4">
				<div className="col-11 ">
					<div className="h6">Últimas inciencias <span className="h6">(mias sin cerrar)</span></div>
				</div>
				<div className="col-1">
					<Link to="/app/cases/add" className="h6 btn btn-outline-primary btn-small">Nueva</Link>
				</div>
				
			</div>
			<div className="row mt-3">
				<table className="table">
					<thead>
						<tr>
							<th className="col">ID</th>
							<th className="col">Empresa</th>
							<th className="col">Contacto</th>
							<th className="col">Causa</th>
							<th className="col">Estado</th>
							<th className="col">Creado</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						{state.data_cases.map((Element, i)=>{
							return (<tr>
										<th className="text-primary">{Element.ID}</th>
										<td className="text-primary">{Element.company}</td>
										<td className="text-primary">{Element.contact}</td>
										<td className="text-primary">{Element.cause}</td>
										<td className="text-primary">{Element.state}</td>
										<td className="text-primary">{Element.created}</td>
										<td>
											<Link to={'/app/cases/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
											<Link to={'/app/cases/delete/'+Element.ID} className="btn btn-outline-danger">B</Link>
											<button className="btn btn-outline-info" onClick={()=>{get_case(Element.ID)}}>V</button>
										</td>
									</tr>);
						})}
						
					</tbody>
				</table>
			</div>
		</div>
		</React.Fragment>
	)
}

export default Home;