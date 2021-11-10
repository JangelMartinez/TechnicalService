import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link, Redirect } from 'react-router-dom';
import ModalCase from '../get';
import ModalDelCase from '../delete';

const List_Cases = ()=> {

	var [state, setState] = useState({
		status: 'normal',
		data_cases:[],
		btncase: {status: false, data: {}, code:'' }
	});

	const [term, setterm] = useState('');

	useEffect(()=>{loadList();	}, []);

	const loadList = () =>{
		API.get("cases/get_list").then( (response) =>{
			//console.log("List",response.data);
			setState({...state, 
					status:'normal',
					data_cases: response.data,
					btncase: {status: false}
				});
		});
	}


	const get_case = (id)=>{
		API.get(("cases/get/"+id)).then((response)=>{
			//console.log("response get action", response.data);
			setState({
				...state,
				btncase: {
					status:true,
					data: response.data,
					code: 'show'
				}
			});
			
		});
	};

	const del_case = (id)=>{
		API.get(("cases/get/"+id)).then((response)=>{
			//console.log("response get action", response.data);
			setState({
				...state,
				btncase: {
					status:true,
					data: response.data,
					code: 'delete'
				}
			});
			
		});
	};

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
			<div className="row mt-4">
				
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>:"") }
			{ state.btncase.status && state.btncase.code === 'show' ? (<ModalCase btnv={state.btncase.data} HandleClick={loadList}/>) : '' }
			{ state.btncase.status && state.btncase.code === 'delete' ? (<ModalDelCase btnv={state.btncase.data} HandleClick={loadList}/>) : '' }
				<div className="col-2 mt-3">
					<Link to="/app/cases/add" className="h6 btn btn-outline-primary btn-small">Nueva</Link>
				</div>
				<div className="col-7">

				</div>
				<div className="col-2 mt-3 ">
					<input onChange={e => setterm(e.target.value)} type="text" name="buscar" id="buscar" className="form-control" />
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
							<th className="col">Causa</th>
							<th className="col">Estado</th>
							<th className="col">Creado</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
					{state.data_cases.filter((search)=>{
						if(term === ''){
							return search;
						}else if(search.company.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.contact.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.cause.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.state.toLowerCase().includes(term.toLowerCase())){
							return search;
						}
					}).map((Element, i)=>{
							return (<tr key={Element.ID}>
										<th className="text-primary">{Element.ID}</th>
										<td className="text-primary">{Element.company}</td>
										<td className="text-primary">{Element.contact}</td>
										<td className="text-primary">{Element.cause}</td>
										<td className="text-primary">{Element.state}</td>
										<td className="text-primary">{ponerfecha(Element.created)}</td>
										<td>
											<Link to={'/app/cases/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
											<button className="btn btn-outline-danger" onClick={()=>{del_case(Element.ID)}}>B</button>
											<button className="btn btn-outline-info" onClick={()=>{get_case(Element.ID)}}>V</button>
										</td>
									</tr>);
						})}
					</tbody>
				</table>
			</div>
			
		</div>
	)
}

export default List_Cases;
