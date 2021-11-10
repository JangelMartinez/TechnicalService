import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link, Redirect } from 'react-router-dom';
import ModalAction from '../get';
import ModalDelAction from '../delete';

const List_Actions = () => {

	var [state, setState] = useState({
		status: 'normal',
		data_actions:[],
		btnaction: {status: false, data: {}, code:'' }
	});

	const [term, setterm]= useState('');

	useEffect(()=>{ loadList();	}, []);

	const loadList = () =>{
		API.get("actions/get_list").then( (response) =>{
			//console.log("List",response.data);
			setState({...state, 
					status:'normal',
					data_actions: response.data,
					btnaction: {status: false}
				});
		});
	}


	const get_action = (id)=>{
		API.get(("actions/get/"+id)).then((response)=>{
			console.log("response get action", response.data);
			setState({
				...state,
				btnaction: {
					status:true,
					data: response.data,
					code: 'show'
				}
			});
			
		});
	};

	const del_action = (id)=>{
		API.get(("actions/get/"+id)).then((response)=>{
			console.log("response get action", response.data);
			setState({
				...state,
				btnaction: {
					status:true,
					data: response.data,
					code: 'delete'
				}
			});
			
		});
	};


	
	return (
		<div className="container">
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>:"") }
			{ state.btnaction.status && state.btnaction.code === 'show' ? (<ModalAction btnv={state.btnaction.data} HandleClick={loadList}/>) : ''}
			{ state.btnaction.status && state.btnaction.code === 'delete' ? (<ModalDelAction btnv={state.btnaction.data} HandleClick={loadList}/>) : ''}

			<div className="row mt-4">
				
				<div className="col-2 mt-3">
					<Link to="/app/action/add" className="btn btn-outline-primary btn-small">Nueva</Link>
				</div>
				<div className="col-7">

				</div>
				<div className="col-2 mt-3 ">
					<input type="text" name="buscar" onChange={e => setterm(e.target.value)} id="buscar" className="form-control" />
				</div>
				{/* <div className="col-1 mt-3">
					<button className="btn btn-outline-primary btn-small">Buscar</button>
				</div> */}
				
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
						{state.data_actions.filter((search)=>{
						if(term === ''){
							return search;
						}else if(search.ID_CASE !== null && search.ID_CASE.toString().toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.company.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.contact.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.type.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.state.toLowerCase().includes(term.toLowerCase())){
							return search;
						}
					}).map((Element, i)=>{
								return (<tr key={Element.ID}>
											<th className="text-primary">{Element.ID}</th>
											<td className="text-primary">{Element.company}</td>
											<td className="text-primary">{Element.contact}</td>
											<td className="text-primary">{Element.ID_CASE}</td>
											<td className="text-primary">{Element.type}</td>
											<td className="text-primary">{Element.state}</td>
											<td>
												<Link to={'/app/action/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
												<button className="btn btn-outline-danger" onClick={()=>{del_action(Element.ID)}}>B</button>
												<button className="btn btn-outline-info" onClick={()=>{get_action(Element.ID)}}>V</button>
											</td>
										</tr>);
							})}
					</tbody>
				</table>
			</div>
			
		</div>
	)
}

export default List_Actions;