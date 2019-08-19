//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

import Chart from 'react-google-charts';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			dash: [],
			graf: [],
			loading: true,
			error: null,
			data: []
		};
	}

	async componentDidMount() {
		let resp = await axios.get('http://www.quecompraste.website:3000/api/record', {
			headers: { 'Access-Control-Allow-Origin': '*' }
		});

		this.setState({
			records: resp.data.records
		});

		this.fetchRecords();
		this.fetchData();
	}

	fetchRecords = async () => {
		//no se sabe cuanto va atardar en trar los datos
		this.setState({
			loading: true,
			error: null
		});

		try {
			const response = await fetch('http://www.quecompraste.website:3000/api/record', {
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
				data: data
			});
		} catch (error) {
			this.setState({
				error: error
			});
		}
		this.setState({
			graf: this.dashData()
		});

		let a = this.dashInfo();
		this.setState({
			graf: a.concat(this.state.graf[0])
		});
	};

	dashInfo = () => [['Day', 'Temp. C°', 'Humedad %']]; //funcion para setar los encabezados el grafico, luego se concatena con la data
	dashData = () => [this.state.records.map((record, index) => [index + 1, record.num1, record.num2])];

	fetchData = async () => {
		//no se sabe cuanto va atardar en trar los datos
		this.setState({
			loading: true,
			error: null
		});

		try {
			const response = await fetch('http://www.quecompraste.website:3000/api/record/data', {
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
				dash: data
			});
		} catch (error) {
			this.setState({
				loading: false,
				error: error
			});
		}
		console.log('dash', this.state.dash.last);
	};

	render() {
		if (this.state.loading) {
			return (
				<React.Fragment>
					<img
						src="https://i.pinimg.com/originals/39/ee/de/39eede5b8818d7c02d2340a53a652961.gif"
						className="img-fluid mx-auto d-block "
						width="100%"
					/>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
                    <div className="mx-auto mb-5">
						<Chart
							height={300}
							chartType="Line"
							loader={<div>Loading Chart</div>}
							data={this.state.graf}
							options={{
								chart: {
									title: 'Estadisticas de ultimos registros',
									subtitle: 'Informacion de sensores de Temperatura y Humedad'
								}
							}}
						/><br></br>
					</div>
					<div className="card-deck">
						<div className="card mx-auto">
							<img
								className="img-fluid mx-auto d-block"
								src="https://image.flaticon.com/icons/svg/1113/1113779.svg"
								alt="Card image cap"
								width="25%"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Temperatura C°{' '}
									<span className="badge badge-danger">{this.state.dash.last.num1}</span>
								</h5>
								<p className="card-text">
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">{this.state.dash.last.date}</small>
							</div>
						</div>
						<div className="card">
							<img
								className="img-fluid mx-auto d-block"
								src="https://image.flaticon.com/icons/svg/1808/1808480.svg"
								alt="Card image cap"
								width="25%"
							/>
							<div className="card-body">
								<h5 className="card-title">
									Humedad <span className="badge badge-primary">{this.state.dash.last.num1} %</span>
								</h5>
								<p className="card-text">
								</p>
							</div>
							<div className="card-footer">
								<small className="text-muted">{this.state.dash.last.date}</small>
							</div>
						</div><br/><br/>
					</div>
					
				</React.Fragment>
			);
		}
	}
}

export default Dashboard;
