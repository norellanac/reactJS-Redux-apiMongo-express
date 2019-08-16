//import React from 'react';
import React, { Component } from 'react';
import axios from 'axios';

class Record extends Component {
	constructor() {
		super();
		this.state = {
			records: []
		};
	}

	async componentDidMount() {
		let resp = await axios.get('http://localhost:3000/api/record', {
			headers: { 'Access-Control-Allow-Origin': '*' }
		});
		//let resp = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/');
		console.log(resp.data.records);
		this.setState({
			records: resp.data.records
		});
	}

	tableData = () => [
		this.state.records.map(record =>
			<tr key={record._id}>
				<td>
					{record.num1}
				</td>
				<td>
					{record.num2}
				</td>
				<td>
					{record.device}
				</td>
				<td>
					{record.user}
				</td>
			</tr>
		)
	];

	render() {
		return (
			<div className=" table-responsive">
				<table className="table">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Temp</th>
							<th scope="col">Humedad %</th>
							<th scope="col">ID Disp</th>
							<th scope="col">Cliente</th>
						</tr>
					</thead>
					<tbody>
						{this.tableData()}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Record;
