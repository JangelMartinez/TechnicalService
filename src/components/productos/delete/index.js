import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import API from '../../../config/api';

const ModalDelProduct = ({btnv, HandleClick}) => {

	const del_product = () =>{
		API.post(("products/delete/"+ btnv.data.ID)).then((response)=>{
			HandleClick();
		});
		
	};

	return (
		<>
			<Modal isOpen={btnv} size="lg" centered="true">
				<ModalHeader>
					<div className="row">
						<div className="col-6">	Producto </div>
						<div className="col-4"></div>
						<div className="col-2">
							<Button className="btn-close text-right" id="test" onClick={()=>{HandleClick()}}></Button>
						</div>
					</div>
				</ModalHeader>
				<ModalBody>
							<div className="row mt-4">
								<p>¿Desea eliminar el código <span className="fw-bold">{btnv.data.code}</span> permanentemente?</p>
								
							</div>
				</ModalBody>
				<ModalFooter>	
					<Button color="info" className="btn" id="test2" onClick={()=>{del_product()}}>Eliminar</Button>						
					<Button color="danger" className="btn" id="test2" onClick={()=>{HandleClick()}}>Cerrar</Button>		
				</ModalFooter>
			</Modal>
		</>
	)
}

export default ModalDelProduct;