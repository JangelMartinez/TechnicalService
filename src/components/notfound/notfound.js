import React from 'react'
import Ops from './404.jpg';


const Notfound = () =>{
	return (
		<div className="container">
		<div className="row justify-content-center">
				<div className="card mt-5 col-4">
					<h4 className="card-title">Error 404</h4>
					<h6 className="card-subtitle text-muted">Está página no existe</h6>
					<div className="card-body">
						<img src={Ops} alt="" width="300" height="300"/>
					</div>
				</div>
			</div>
	</div>
	)
}

export default Notfound;
