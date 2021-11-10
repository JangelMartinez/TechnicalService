import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Modal_company = ({btnv, HandleClick}) => {

	console.log("DATOS REALES", btnv);

	return (
		<>
			<Modal isOpen={btnv} size="lg" centered="true">
				<ModalHeader>
					<div className="row">
						<div className="col-6">	Empresa </div>
						<div className="col-4"></div>
						<div className="col-2">
							<Button className="btn-close text-right" id="test" onClick={()=>{HandleClick(false)}}></Button>
						</div>
					</div>
				</ModalHeader>
				<ModalBody>
							<div className="row mt-4">
								<div className="col-2 fw-bold">ID Empresa</div>
								<div className="col-2">
									<p className="text-primary">{btnv.ID}</p>
								</div>
								<div className="col-2 fw-bold">Nombre </div>
								<div className="col-5">
									<p className="text-primary">{btnv.name}</p>
								</div>
							</div>
	
							<div className="row mt-4">
							<div className="col-2 fw-bold">Teléfono </div>
								<div className="col-2">
									<p className="text-primary">{btnv.phone}</p>
								</div>
								<div className="col-2 fw-bold">Email </div>
								<div className="col-4">
									<p className="text-primary">{btnv.email}</p>
								</div>
								
							</div>
							<div className="row mt-4">
								<div className="col-2 fw-bold">Tipo </div>
								<div className="col-2">
									<p className="text-primary">{btnv.type}</p>
								</div>
								<div className="col-2 fw-bold">Delegación de </div>
								<div className="col-6">
									<p className="text-primary">{btnv.delegation_of}</p>
								</div>
							</div>
							<div className="row mt-4">
							<div className="col-2 fw-bold">Dirección </div>
								<div className="col-10">
									<p className="text-primary">{btnv.address}</p>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-2 fw-bold">Cod. Postal </div>
								<div className="col-2">
									<p className="text-primary">{btnv.postalcode}</p>
								</div>
								<div className="col-2 fw-bold">Localidad </div>
								<div className="col-2">
									<p className="text-primary">{btnv.locality}</p>
								</div>
								<div className="col-2 fw-bold">Provincia </div>
								<div className="col-2">
									<p className="text-primary">{btnv.province}</p>
								</div>
							</div>
							<div className="row mt-4">
								
								<div className="col-3 fw-bold">Notas </div>
								
							</div>
							
							<div className="row mt-4">
								
								<div className="col-10">
									<p className="text-primary">{btnv.notes}</p>
								</div>
								{/* <div className="col-2">
									<button className="btn btn-outline-primary">Más info</button>
								</div> */}
								
							</div>
				</ModalBody>
				<ModalFooter>	
					
					<Link to={"/app/company/edit/" + btnv.ID} className="btn btn-info"  >Editar</Link>				
					<Button color="danger" className="btn" id="test2" onClick={()=>{HandleClick()}}>Cerrar</Button>		
				</ModalFooter>
			</Modal>
		</>
	)
}

export default Modal_company;
