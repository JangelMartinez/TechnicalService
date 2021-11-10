import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link, Redirect } from 'react-router-dom';
import ModalProduct from '../get';
import ModalDelProduct from '../delete';

const Products = ()=> {

	var [state, setState] = useState({
		status: 'normal',
		data_products:[],
		btnproduct: {status: false, data: {} , code:''},
	});
	
	const [term, setterm] = useState('');

	useEffect(()=>{ loadList() }, []);

	const loadList = () =>{
		API.get("products/get_list").then( (response) =>{
			setState({...state, 
						status:'normal',
						data_products: response.data,			 
						btnproduct:{status: false}, 
			});
		});
	}
	
	
	const get_product = (id)=>{
		API.get(("products/get/"+id)).then((response)=>{
			setState({
				...state,
				btnproduct: {
					status:true,
					data: response.data,
					code: 'show'
				}
			});
			
		});
	};
	const del_product = (id)=>{
		API.get(("products/get/"+id)).then((response)=>{
			setState({
				...state,
				btnproduct: {
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
			{ state.btnproduct.status && state.btnproduct.code==='show' ? (<ModalProduct btnv={state.btnproduct.data} HandleClick={loadList}/>) : (<div></div>) }
			{ state.btnproduct.status && state.btnproduct.code==='delete' ? (<ModalDelProduct btnv={state.btnproduct} HandleClick={loadList}/>) : (<div></div>) }

			<div className="row mt-4">
				
				<div className="col-2">
				<Link to="/app/product/add" className="h6 btn btn-outline-primary btn-small">Nuevo Producto</Link>
				</div>
				<div className="col-6">

				</div>
				<div className="col-3 ">
					<input type="text" name="buscar" id="buscar" onChange={e => setterm(e.target.value)} className="form-control" />
				</div>
				{/* <div className="col-1">
					<button className="btn btn-outline-primary btn-small">Buscar</button>
				</div> */}
				
			</div>
			<div className="row mt-3">
				<table className="table">
					<thead>
						<tr>
							<th className="col">ID</th>
							<th className="col">Código</th>
							<th className="col">Nombre</th>
							<th className="col">Descripción</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
					{state.data_products.filter((search)=>{
						if(term === ''){
							return search;
						}else if(search.code.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.name.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.description.toLowerCase().includes(term.toLowerCase())){
							return search;
						}
					}).map((Element, i)=>{
							return (<tr key={Element.ID}>
										<th className="text-primary">{Element.ID}</th>
										<td className="text-primary">{Element.code}</td>
										<td className="text-primary">{Element.name}</td>
										<td className="text-primary">{Element.description}</td>
										<td>
											<Link to={'/app/product/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
											<button className="btn btn-outline-danger" onClick={()=>{del_product(Element.ID)}}>B</button>
											<button className="btn btn-outline-info" onClick={()=>{get_product(Element.ID)}}>V</button>
										</td>
									</tr>);
						})}
						
					</tbody>
				</table>
			</div>
			
		</div>
	)
}

export default Products;