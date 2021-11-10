import React from 'react'

const Cont_acc = ()=> {
	return (
		<div className="container">
			<div className=" alert alert-primary mt-2 ms-3" >
				<div className="row">
					<div className="col-1 fw-bold text-end">
						<p>ID :</p>
					</div>
					<div className="col-2">
						<p className="text-primary">Nombre contacto</p>
					</div>
					<div className="col-2 fw-bold text-end">
						<p>Teléfono :</p>
					</div>
					<div className="col-2">
						<p className="text-primary">34255555</p>
					</div>
					<div className="col-1 fw-bold">
						<p>E-mail :</p>
					</div>
					<div className="col-3">
						<p className="text-primary">contacto@contacto.es</p>
					</div>
				</div>
			</div>
			<div className="row  mt-3">
				
				<div className="col-2 mt-3">	
						<button className="btn btn-outline-primary">Nueva Acción</button>					
				</div>
				<div className="col-5">
					<nav className="navbar navbar-expand-lg navbar-light mt-2">
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								<li className="nav-item ms-4">
									<a href="#" className="nav-link active">Acciones</a>
								</li>
								<li className="nav-item ms-4">
									<a href="#" className="nav-link">Incidencias</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="col-2 mt-3 ">
					<input type="text" name="buscar" id="buscar" className="form-control" />
				</div>
				<div className="col-1 mt-3">
					<button className="btn btn-outline-primary btn-small">Buscar</button>
				</div>
				
			</div>
			
			<div className="row mt-3">
				<table className="table">
					<thead>
						<tr>
							<th className="col">ID</th>
							<th className="col">Usuario</th>
							<th className="col">Contacto</th>
							<th className="col">Incidencia</th>
							<th className="col">Tipo</th>
							<th className="col">Estado</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-primary">1</th>
							<td className="text-primary">José Ángel</td>
							<td className="text-primary">Pepito</td>
							<td className="text-primary">-</td>
							<td className="text-primary">Llamada</td>
							<td className="text-primary">En curso</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info active">V</a>
							</td>
						</tr>
						<tr >
							<td colspan="7" className="bg-info bg-opacity-25">
								<div className="row mt-4 ms-2">
									<div className="col-1 fw-bold">Descripción: </div>
									<div className="col-8 ms-3">
										<p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla facilis quis quos assumenda aut deleniti pariatur adipisci accusamus eveniet! Excepturi earum iusto blanditiis amet suscipit nesciunt eos voluptates deleniti.
										Illum voluptatem eum ea unde placeat! Incidunt veniam quos, ipsa ab modi beatae necessitatibus quaerat consequatur provident labore commodi? Deleniti nihil quo illo adipisci illum, obcaecati eveniet asperiores qui libero.
										Minima officia reiciendis similique atque magni voluptatem ut numquam omnis vel. In, sed, error accusamus dicta iusto autem quo doloremque possimus atque quaerat quis sit similique perferendis tempore quia ipsa!
										Sunt, eius modi nam consequatur nulla quam nihil accusamus pariatur beatae iste non delectus optio vel. Adipisci quaerat porro culpa nobis, quos mollitia. Quam rem sed debitis dolores consequatur magnam?</p>
									</div> 
									<div className="col-2 text-end">
										<button className="btn btn-outline-primary ">Más info</button>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<th className="text-primary">2</th>
							<td className="text-primary">José Ángel</td>
							<td className="text-primary">Juanito</td>
							<td className="text-primary">234</td>
							<td className="text-primary">E-mail</td>
							<td className="text-primary">Pendiente</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info">V</a>
							</td>
						</tr>
						<tr>
							<th className="text-primary">3</th>
							<td className="text-primary">José Ángel</td>
							<td className="text-primary">Jaimito</td>
							<td className="text-primary">180</td>
							<td className="text-primary">Llamada</td>
							<td className="text-primary">Esp. material</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info">V</a>
							</td>
						</tr>
						<tr>
							<th className="text-primary">4</th>
							<td className="text-primary">José Ángel</td>
							<td className="text-primary">Pepito</td>
							<td className="text-primary">-</td>
							<td className="text-primary">Llamada</td>
							<td className="text-primary">En curso</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info">V</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</div>
	)
}

export default Cont_acc;