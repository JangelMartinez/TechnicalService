import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Modal_case = ({btnv, HandleClick}) => {

	console.log("DATOS REALES", btnv);

	var ponerfecha = (fecha) =>{

		if(!fecha){
			return '';
		}else{
			const date = fecha.split('T');
			return date[0];
		}	
	}

	return (
		<>
			<Modal isOpen={btnv} size="lg" centered="true">
				<ModalHeader>
					<div className="row">
						<div className="col-6">	Incidencia </div>
						<div className="col-4"></div>
						<div className="col-2">
							<Button className="btn-close text-right" id="test" onClick={()=>{HandleClick(false)}}></Button>
						</div>
					</div>
				</ModalHeader>
				<ModalBody>
							<div className="row mt-4">
								<div className="col-2 fw-bold">ID incidencia</div>
								<div className="col-2">
									<p className="text-primary">{btnv.ID}</p>
								</div>
								<div className="col-2 fw-bold">Usuario </div>
								<div className="col-5">
									<p className="text-primary">{btnv.ID_USER} - {btnv.user}</p>
								</div>
							</div>
							<div className="row mt-4">
								
								<div className="col-2 fw-bold">Empresa </div>
								<div className="col-8">
									<p className="text-primary">{btnv.company}</p>
								</div>
							</div>
							<div className="row mt-4">
		
								<div className="col-2 fw-bold">Contacto </div>
								<div className="col-8">
									<p className="text-primary">{btnv.contact}</p>
								</div>
							</div>
	
							<div className="row mt-4">
								<div className="col-2 fw-bold">Albarán </div>
								<div className="col-2">
									<p className="text-primary">{btnv.purchase}</p>
								</div>
								<div className="col-2 fw-bold">Factura </div>
								<div className="col-2">
									<p className="text-primary">{btnv.invoice}</p>
								</div>
								<div className="col-2 fw-bold">Garantía</div>
								<div className="col-2">
									<p className="text-primary">{ponerfecha(btnv.warranty_date)}</p>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-2 fw-bold">Causa </div>
								<div className="col-2">
									<p className="text-primary">{btnv.cause}</p>
								</div>
								<div className="col-2 fw-bold">Estado </div>
								<div className="col-2">
									<p className="text-primary">{btnv.state}</p>
								</div>
								
							</div>
							<div className="row mt-4">
								
								<div className="col-3 fw-bold">Descripción acción </div>
								
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
					
					<Link to={"/app/cases/edit/" + btnv.ID} className="btn btn-info"  >Editar</Link>				
					<Button color="danger" className="btn" id="test2" onClick={()=>{HandleClick()}}>Cerrar</Button>		
				</ModalFooter>
			</Modal>
		</>
	)
}

export default Modal_case;
