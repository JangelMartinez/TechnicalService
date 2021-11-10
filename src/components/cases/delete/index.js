import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import API from '../../../config/api';

const ModalDelCases = ({btnv, HandleClick}) => {


	console.log(btnv);

	const del_case = () =>{
		API.post(("cases/delete/"+ btnv.data.ID)).then((response)=>{
			HandleClick();
		});
		
	};

	return (
		<>
			<Modal isOpen={btnv} size="lg" centered="true">
				<ModalHeader>
					<div className="row">
						<div className="col-10">Incidencia - {btnv.ID}  </div>
						<div className="col-2">
							<Button className="btn-close text-right" id="test" onClick={()=>{HandleClick()}}></Button>
						</div>
					</div>
				</ModalHeader>
				<ModalBody>
							<div className="row mt-4">
								<p>¿Desea eliminar la incidencia <span className="fw-bold">{btnv.ID}</span> permanentemente?</p>
								
							</div>
				</ModalBody>
				<ModalFooter>	
					<Button color="info" className="btn" id="test2" onClick={()=>{del_case()}}>Eliminar</Button>						
					<Button color="danger" className="btn" id="test2" onClick={()=>{HandleClick()}}>Cerrar</Button>		
				</ModalFooter>
			</Modal>
		</>
	)
}

export default ModalDelCases;