import React from 'react'

const Cont_cases = ()=> {
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
						<button className="btn btn-outline-primary">Nueva incidencia</button>					
				</div>
				<div className="col-5">
					<nav className="navbar navbar-expand-lg navbar-light mt-2">
						<div className="collapse navbar-collapse">
							<ul className="navbar-nav">
								<li className="nav-item ms-4">
									<a href="#" className="nav-link">Acciones</a>
								</li>
								<li className="nav-item ms-4">
									<a href="#" className="nav-link active">Incidencias</a>
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
							<th className="col">Causa</th>
							<th className="col">Estado</th>
							<th className="col">Creado</th>
							<th className="col">Opciones</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-primary">120</th>
							<td className="text-primary">José Ángel</td>
							<td className="text-primary">Pepito</td>
							<td className="text-primary">Almacén</td>
							<td className="text-primary">Esp. material</td>
							<td className="text-primary">25/08/21</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info active">V</a>
							</td>
						</tr>
						<tr >
							<td colspan="7" className="bg-info bg-opacity-25">
								<div className="row mt-4 ms-2">
									<div className="col-2 fw-bold">
										<p>Albarán Compra :</p>
									</div>
									<div className="col-2">
										<p className="text-primary">3425</p>
									</div>
									<div className="col-2 fw-bold">
										<p>Factura compra :</p>
									</div>
									<div className="col-2">
										<p className="text-primary">3425</p>
									</div>
									<div className="col-2 fw-bold">
										<p>Fecha garantía :</p>
									</div>
									<div className="col-2">
										<p className="text-primary">15/09/21</p>
									</div>
								</div>
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
							<th className="text-primary">230</th>
							<td className="text-primary">David</td>
							<td className="text-primary">Carlitos</td>
							<td className="text-primary">Pedidos</td>
							<td className="text-primary">Rec. material</td>
							<td className="text-primary">09/09/21</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info">V</a>
							</td>
						</tr>
						<tr>
							<th className="text-primary">149</th>
							<td className="text-primary">Alex</td>
							<td className="text-primary">Manolito</td>
							<td className="text-primary">Comercial</td>
							<td className="text-primary">En curso</td>
							<td className="text-primary">04/09/21</td>
							<td>
								<a href="#" className="btn btn-outline-secondary">E</a>
								<a href="#" className="btn btn-outline-danger">B</a>
								<a href="#" className="btn btn-outline-info">V</a>
							</td>
						</tr>
						<tr>
							<th className="text-primary">211</th>
							<td className="text-primary">José Manuel</td>
							<td className="text-primary">Pepito</td>
							<td className="text-primary">Almacén</td>
							<td className="text-primary">Rec. material</td>
							<td className="text-primary">07/07/21</td>
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

export default Cont_cases;