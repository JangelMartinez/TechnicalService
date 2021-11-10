import React from 'react'
import {NavLink} from 'react-router-dom'


const Footer = () => {
	return (
		<div className="container-fluid bg-primary">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-4">
						<h3 className="navbar-brand">
							<NavLink to="/app/home/home" className="nav-link link-light ">Technical-service</NavLink>
						</h3>
					</div>
					<div className="col-4">
					
					</div>
					<div className="col-4">
					<p className="text-white text-end mt-2">@Copyright: <a href="https://jangelmartinez.es" className="ms-4 text-white">jangelmartinez.es</a></p>
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default Footer;
