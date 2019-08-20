//import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props =>
	<React.Fragment>
		<nav className="navbar navbar-dark bg-dark fixed-bottom">
			<div className="row mx-auto">
				<div className="col-3 mx-auto">
					<Link className="nav-item nav-link text-white" to={'/'}>
						<i className="material-icons">home</i>
					</Link>
				</div>
				<div className="col-3 mx-auto">
					<Link className="nav-item nav-link text-white" to={'/charts'}>
						<i className="material-icons">insert_chart_outlined</i>
					</Link>
				</div>
				<div className="col-3 mx-auto">
					<Link className="nav-item nav-link text-white" to={'/log'}>
						<i className="material-icons">history</i>
					</Link>
				</div>
				<div className="col-3 mx-auto">
					<Link className="nav-item nav-link text-white" to={'/devices'}>
						<i className="material-icons">devices_other</i>
					</Link>
				</div>
			</div>
		</nav>
	</React.Fragment>;

export default Menu;
