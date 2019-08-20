//import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = props =>
	<React.Fragment>
		<nav class="navbar navbar-dark bg-dark">
			<a class="navbar-brand" >
				<img src="https://image.flaticon.com/icons/svg/2016/2016779.svg" width="50" />
				<span className="mx-auto text-white" > Internet Of Things</span>
			</a>
		</nav>
	</React.Fragment>;

export default Header;
