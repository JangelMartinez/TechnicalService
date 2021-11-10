import React, { useEffect, useState } from 'react';
import API from '../../../config/api';
import { Link, Redirect} from 'react-router-dom';
import ModalContact from '../get';
import ModalDelContact from '../delete';

const Lista_Cont = ()=> {

//	const info_cont = <Cont_Get></Cont_Get>;

var [state, setState] = useState({
	status: 'normal',
	data_contacts:[],
	btncontact: {status: false, data: {}, code:'' }
});

const [term, setterm] = useState('');

useEffect(()=>{ loadList(); }, []);

const loadList = () =>{
	API.get("contacts/get_list").then( (response) =>{
		//console.log("List",response.data);
		setState({...state, 
				status:'normal',
				data_contacts: response.data,
				btncontact:{status: false}
			});
	});
}


const get_contact = (id)=>{
	API.get(("contacts/get/"+id)).then((response)=>{
		//console.log("response get action", response.data);
		setState({
			...state,
			btncontact: {
				status:true,
				data: response.data,
				code: 'show'
			}
		});
		
	});
};

const del_contact = (id)=>{
	API.get(("contacts/get/"+id)).then((response)=>{
		//console.log("response get action", response.data);
		setState({
			...state,
			btncontact: {
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
			{ state.btncontact.status && state.btncontact.code==='show' ? (<ModalContact btnv={state.btncontact.data} HandleClick={loadList}/>) : '' }
			{ state.btncontact.status && state.btncontact.code==='delete' ? (<ModalDelContact btnv={state.btncontact.data} HandleClick={loadList}/>) : '' }
			<div className="row  mt-3">
				<div className="col-4 mt-3">
					<Link to="/app/contact/add" className="h6 btn btn-outline-primary btn-small">Nuevo Contacto</Link>
				</div>
				<div className="col-5">
					
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
						<tr >
							<th className="text-secondary">ID</th>
							<th className="text-secondary">Nombre</th>
							<th className="text-secondary">Teléfono</th>
							<th className="text-secondary">E-mail</th>
							<th className="text-secondary">Opciones</th>
						</tr>	
					</thead>
					<tbody>
					{state.data_contacts.filter((search)=>{
						if (term === ''){
							return search;
						}else if(search.name.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.phone.toLowerCase().includes(term.toLowerCase())){
							return search;
						}else if(search.mail.toLowerCase().includes(term.toLowerCase())){
							return search;
						}
					}).map((Element, i)=>{
							return (<tr key={Element.ID}>
										<th className="text-primary">{Element.ID}</th>
										<td className="text-primary">{Element.name}</td>
										<td className="text-primary">{Element.phone}</td>
										<td className="text-primary">{Element.mail}</td>
										<td>
											<Link to={'/app/contact/edit/'+Element.ID} className="btn btn-outline-secondary">E</Link>
											<button className="btn btn-outline-danger" onClick={()=>{del_contact(Element.ID)}}>B</button>
											<button className="btn btn-outline-info" onClick={()=>{get_contact(Element.ID)}}>V</button>
										</td>
									</tr>);
						})}
					</tbody>
				</table>
			</div>
		
		</div>

	
	)
}

export default Lista_Cont;