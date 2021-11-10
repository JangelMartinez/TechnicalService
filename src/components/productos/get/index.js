import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Modal_Product = ({btnv, HandleClick}) => {

	console.log("DATOS REALES", btnv);

	return (
		<>
			<Modal isOpen={btnv} size="lg" centered="true">
				<ModalHeader>
					<div className="row">
						<div className="col-6">	Producto </div>
						<div className="col-4"></div>
						<div className="col-2">
							<Button className="btn-close text-right" id="test" onClick={()=>{HandleClick(false)}}></Button>
						</div>
					</div>
				</ModalHeader>
				<ModalBody>
							<div className="row mt-4">
								<div className="col-2 fw-bold">ID Producto</div>
								<div className="col-2">
									<p className="text-primary">{btnv.ID}</p>
								</div>
								<div className="col-2 fw-bold">Código </div>
								<div className="col-5">
									<p className="text-primary">{btnv.code}</p>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-2 fw-bold">Nombre </div>
								<div className="col-7">
									<p className="text-primary">{btnv.name}</p>
								</div>
							</div>
							
							<div className="row mt-4">
								
								<div className="col-3 fw-bold">Descripción </div>
								
							</div>
							
							<div className="row mt-4">
								
								<div className="col-10">
									<p className="text-primary">{btnv.description}</p>
								</div>
								{/* <div className="col-2">
									<button className="btn btn-outline-primary">Más info</button>
								</div> */}
								
							</div>
				</ModalBody>
				<ModalFooter>	
					
					<Link to={"/app/product/edit/" + btnv.ID} className="btn btn-info"  >Editar</Link>				
					<Button color="danger" className="btn" id="test2" onClick={()=>{HandleClick()}}>Cerrar</Button>		
				</ModalFooter>
			</Modal>
		</>
	)
}

export default Modal_Product;
