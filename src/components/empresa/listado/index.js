import React, { useEffect, useState } from 'react'
import API from '../../../config/api';
import ModalCompany from '../get';
import ModalDelCompany from '../delete'
import { Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// 
const EmpresaListado = (props) => {

	var [state, setState] = useState({
		status: 'normal',
		type:"todos",
		data_companys:[],
		btncompany: {status: false, code: '', data: {} }
	});

	const [term, setterm] = useState('');
	
	
	useEffect(()=>{ loadList();	}, []);
	
	const loadList = () =>{

		API.get("company/get_list").then( (response) =>{
			//console.log("List",response.data);
			setState({...state, 
					status:'normal',
					data_companys: response.data,
					btncompany:{status: false}
			});
		});

	};
	
	
	const get_company = (id)=>{
		API.get(("company/get/"+id)).then((response)=>{
			//console.log("response get company", response.data);
			setState({
				...state,
				btncompany: {
					status:true,
					data: response.data,
					code: 'show'
				}
			});
			
		});
	};

	const del_company = (id)=>{
		API.get(("company/get/"+id)).then((response)=>{
			setState({
				...state,
				btncompany: {
					status:true,
					data: response.data,
					code: 'delete'
				}
			});
		});	
	}

	return(
		<React.Fragment>
			<div className="container">
				
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>: '') }
			{ state.btncompany.status && state.btncompany.code === 'show' ? (<ModalCompany btnv={state.btncompany.data} HandleClick={loadList}/>) : '' }
			{ (state.btncompany.status && state.btncompany.code === 'delete' ? (<ModalDelCompany btnv={state.btncompany} HandleClick={loadList}/>) : '') }
				<div className="row mt-4">
					
					<div className="col-1">
						<Link to="/app/company/add" className="btn btn-outline-primary btn-small">Nueva</Link>
					</div>
					<div className="col-7">

					</div>
					<div className="col-3 ">
						<input type="text" onChange={e=> setterm(e.target.value) } name="buscar" id="buscar" className="form-control" placeholder="Buscar" />
					</div>
					{/* <div className="col-1">
						<button className="btn btn-outline-primary btn-small">Buscar</button>
					</div> */}
					
				</div>
				<div className="row mt-3">
					<div className="navbar navbar-expand-lg">
						<p className="fw-bold nav-item mt-3">Empresas</p>
						<ul className="navbar-nav">
							<li className="navbar-item ms-3"><button onClick={()=>{setState({...state,type:"todos"})}}  className="nav-link btn">Todas </button></li>
							<li className="navbar-item ms-3"><button onClick={()=>{setState({...state,type:"cliente"})}} className="nav-link btn"> Clientes </button></li>
							<li className="navbar-item ms-3"><button onClick={()=>{setState({...state,type:"proveedor"})}} className="nav-link btn"> Proveedores </button></li>
						</ul>
					</div>	
					
				</div>
	
				<div className="row mt-3">
					<table className="table">
						<thead>
							<tr>
								<th className="col">ID</th>
								<th className="col">Nombre</th>
								<th className="col">Teléfono</th>
								<th className="col">E-mail</th>
								<th className="col">Opciones</th>
							</tr>
						</thead>
						<tbody>
						{state.data_companys.filter( (search) => {
							if(term === ''){
								return search;
							}else if(search.name.toLowerCase().includes(term.toLowerCase())){
								return search;
							}else if(search.phone.toLowerCase().includes(term.toLowerCase())){
								return search;
							}else if(search.email.toLowerCase().includes(term.toLowerCase())){
								return search;
							}
						}).map((Element, i) => {
							

							// Que se muestre todo
							// Que se muestre SOLO clientes
							// Que se muestre SOLO proveedores

							

							if( ( state.type==="todos"?true:(state.type===Element.type?true:false) ) ){
								return (<tr key={Element.ID}>
									<th className="text-primary">{Element.ID}</th>
									<td className="text-primary">{Element.name}</td>
									<td className="text-primary">{Element.phone}</td>
									<td className="text-primary">{Element.email}</td>
									<td>
										<Link to={'/app/company/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
										<button className="btn btn-outline-danger" onClick={()=>{del_company(Element.ID)}}>B</button>
										<button className="btn btn-outline-info" onClick={()=>{get_company(Element.ID)}}>V</button>
									</td>
								</tr>);
							}else{
								return ( <div></div>)
							}
						})}
						
						</tbody>
					</table>
				</div>
			</div>
		</React.Fragment>
	);

};

export default EmpresaListado;