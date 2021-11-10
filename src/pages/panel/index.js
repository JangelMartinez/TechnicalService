import ListCompany from '../../components/empresa/listado';
import NewCompany from "../../components/empresa/add";
import EditCompany from "../../components/empresa/edit"
import DelCompany from "../../components/empresa/delete"
import Home from '../../components/home/home';
import Profile from '../../components/perfil/profile'
import Notfound from '../../components/notfound/notfound';
import ListContact from '../../components/contactos/listado';
import EditContact from "../../components/contactos/edit";
import NewContact from "../../components/contactos/add";
import DelContact from "../../components/contactos/delete";
import ListAction from "../../components/acciones/listado";
import EditAction from "../../components/acciones/edit";
import NewAction from "../../components/acciones/add";
import DelAction from "../../components/acciones/delete";
import EditCases from "../../components/cases/edit";
import NewCases from "../../components/cases/add";
import DelCases from "../../components/cases/delete";
import ListCases from "../../components/cases/listado";
import ListProduct from "../../components/productos/listado"
import EditProduct from "../../components/productos/edit";
import NewProduct from "../../components/productos/add"
import DelProduct from "../../components/productos/delete"
import Header from "../header";
import Footer from "../footer";
//import { Route } from 'react-router';

const Panel = (props) => {

	var encabezado = <Header></Header>
	var pie_pagina = <Footer></Footer>
	//var contenido2 = <Edit_product></Edit_product>;

	const uri = props.match.params.module+"/"+props.match.params.action;
	
	if(uri==='company/add'){			var cnt = <NewCompany />;
	}else if(uri==='company/list'){		var cnt = <ListCompany />;
	}else if(uri==='company/edit'){		var cnt = <EditCompany id={props.match.params.id} />;
	}else if(uri==='company/delete'){	var cnt = <DelCompany id={props.match.params.id} />;
	}else if(uri==='action/list'){		var cnt = <ListAction />;
	}else if(uri==='action/edit'){		var cnt = <EditAction id={props.match.params.id} />;
	}else if(uri==='action/delete'){	var cnt = <DelAction id={props.match.params.id} />;
	}else if(uri==='action/add'){		var cnt = <NewAction />;
	}else if(uri==='cases/edit'){		var cnt = <EditCases id={props.match.params.id} />;
	}else if(uri==='cases/delete'){		var cnt = <DelCases id={props.match.params.id} />;
	}else if(uri==='cases/add'){		var cnt = <NewCases />;
	}else if(uri==='cases/list'){		var cnt = <ListCases />;
	}else if(uri==='contact/list'){		var cnt = <ListContact />;
	}else if(uri==='contact/edit'){		var cnt = <EditContact id={props.match.params.id}/>;
	}else if(uri==='contact/delete'){	var cnt = <DelContact id={props.match.params.id}/>;
	}else if(uri==='contact/add'){		var cnt = <NewContact />;
	}else if(uri==='home/home'){		var cnt = <Home />;
	}else if(uri==='product/list'){		var cnt = <ListProduct />;
	}else if(uri==='product/edit'){		var cnt = <EditProduct id={props.match.params.id} />;
	}else if(uri==='product/add'){		var cnt = <NewProduct />;
	}else if(uri==='product/delete'){	var cnt = <DelProduct id={props.match.params.id}/>;
	}else if(uri==='profile/profile'){	var cnt = <Profile />;	
	}else{								var cnt = <Notfound />;
	}

	return(
		<div>
			{encabezado}
			{cnt}
			{pie_pagina}
		</div>
	);

};

export default Panel;