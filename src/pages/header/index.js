import React, {useState, useEffect} from 'react'
import {NavLink, Link, Redirect} from 'react-router-dom'
import API from '../../config/api';


const Header = ()=> {

	var [usuario, setusuario] = useState({});

	var [state, setstate] = useState({status: 'normal'});

	useEffect(()=>{
		API.get('users/get').then((response)=>{
			setusuario(response.data);
		})

		
	},[]);

	function logout(){
		API.remove_token();
		setstate({status:'redirect', redirect: "/"});
	}
	

	return (
		
		<div className="container-fluid">
			{ (state.status==="redirect"?<Redirect to={state.redirect}></Redirect>:"") }
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-2">
							<h3 className="navbar-brand">
								<NavLink to="/app/home/home" className="nav-link link-light ">Technical-service</NavLink>
							</h3>
						</div>
						<div className="col-5">
							<div className="collapse navbar-collapse">
									<ul className="navbar-nav ms-5">
										<li className="nav-item">
											<NavLink to="/app/company/list" className="nav-link">Empresas</NavLink>
										</li>
										<li className="nav-item">
											<NavLink to="/app/product/list" className="nav-link">Productos</NavLink>
										</li>
										<li className="nav-item">
											<NavLink to="/app/contact/list" className="nav-link">Contactos</NavLink>
										</li>
										<li className="nav-item">
											<NavLink to="/app/action/list" className="nav-link">Acciones</NavLink>
										</li>
										<li className="nav-item">
											<NavLink to="/app/cases/list" className="nav-link">Incidencias</NavLink>
										</li>
									</ul>
							</div>
						</div>
						{/* <div className="col-3" >
									<ul className="navbar-nav">
										<li className="nav-item">
											<img src={"https://www.gravatar.com/avatar/"+ usuario.hash} height="80px" width="80px" alt=""/>	
										</li>				
										<li className="nav-item ms-2">
												<div className="small fw-bold" >{usuario.name}</div>
												<div className="small fw-bold" >{usuario.phone}</div>
												<div className="small fw-bold" >{usuario.email}</div>												
										</li>
									</ul>
						</div> */}
						<div className="col-1 ms-4">
							<img src={"https://www.gravatar.com/avatar/"+ usuario.hash} height="80px" width="80px" alt=""/>	
						</div>
						<div className="col-2">
							<div className="small fw-bold" >{usuario.name}</div>
							<div className="small fw-bold" >{usuario.phone}</div>
							<div className="small fw-bold" >{usuario.email}</div>
							<Link to="/app/profile/profile" className="text-white">
								Perfil</Link>
						</div>
						
						<div className="col-1 ms-4">
							<div className="small text-end">
								<button onClick={logout} className="small btn btn-info btn-sm" >Logout</button>
							</div>
						</div>
					</div>	
				</div>
			</nav>
			</div>
	)
}

export default Header;