import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

// Components
	//import Banner from './components/banner';
	//import Holamundo from './components/holamundo';
	import Panel from './pages/panel';
	import Login from './pages/login';
	import Registro from './pages/registro';
	//import Empresa_List from './components/home/home';

ReactDOM.render(
	<React.Fragment>
		<BrowserRouter>
			<Route exact path="/" component={Login} ></Route>
			<Route path="/app/:module?/:action?/:id?" component={Panel} ></Route>
			<Route path="/registro" component={Registro} ></Route>
		</BrowserRouter>
	</React.Fragment>,
  document.getElementById('container')
);
