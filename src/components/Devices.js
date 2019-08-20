//import React from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Devices extends Component {
	constructor() {
		super();
		this.state = {
			loading: true,
			error: null,
			device: [],
			deviceId: 0,
		};
	}

	async componentDidMount() {
		//let resp = await axios.get('http://192.168.50.145:3000/api/record/device', {
		let resp = await axios.get('http://www.quecompraste.website:3000/api/record/device', {
			headers: { 'Access-Control-Allow-Origin': '*' }
		});

		this.setState({
			device: resp.data.records
		});
	}
	tableDevices = () => [
		this.state.device.map(device =>
			<button
				onClick={this.handleClick}
				className="btn btn-info btn-block"
				type="button"
				name="deviceId"
				value={device}
			>
				IOT device: {device}
			</button>
		)
	];

	handleClick = e => {
		let idDevice = e.target.value;
		this.fetchData(idDevice);
	};

	fetchData = async (idD) => {
		console.log('mierda', idD);
		
		//no se sabe cuanto va atardar en trar los datos
		this.setState({
			loading: true,
			error: null
		});
		try {
			const response = await fetch(`http://www.quecompraste.website:3000/api/record/device/${idD}`, {
			//const response = await fetch(`http://192.168.50.145:3000/api/record/device/${idD}`, {
				//importante revisar en api de laravel que este corectamente implementado laravel-cors y la url escrita EXACTAMENTE igual que en las rutas
				method: 'GET', // or 'PUT'
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					Accept: 'application/json'
				}
			});
			const data = await response.json();

			this.setState({
				loading: false,
				device: data,
				deviceId: idD
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
		console.log('device', this.state);
	};

	render() {
		if (this.state.loading) {
			return (
				<React.Fragment>
					<div className="mt-5 content-fluid">
						{this.tableDevices()}
					</div>
				</React.Fragment>
			);
		} else {
			if(this.state.deviceId){

			}
			return (
				
				<React.Fragment>
					<div class="col-md-4">
						<div class="card text-center card-warning">
							<div class="card-block">
								<h4 class="card-title">Estado de la bateria</h4>
								<h2>
									<img
										src="https://www.flaticon.com/premium-icon/icons/svg/2009/2009372.svg"
										width="30%"
									/>
								</h2>
							</div>
							<div class="row ">
								<div class="col-12">
									<div class="card card-block ">
										<h3>
										{(( this.state.device.records.num3 -3.6 ) * 100 /0.6).toFixed(2)  }%
										</h3>
										<span class="small text-uppercase">restante</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Link className="btn btn-block nav-item nav-link " to={'/'}>
						<i className="material-icons"> refresh</i>
											
					</Link>
				</React.Fragment>
			);
		}
	}
}

export default Devices;
