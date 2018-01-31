import React from 'react';
import { Table, thead, tr, th, tbody, Button } from 'react-bootstrap';


class ListItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: true,
			items: []
		};
		this.getItems = this.getItems.bind(this)		
	}

	componentWillMount(){
		this.getItems()
	}
	
	getItems() {
		fetch(`/api/items`, {
			credentials: 'include',
			})
				.then(response => response.json())
				.then(data => {
					this.setState({items: data, isFetching: false})
					console.log('data',data, this.state)
				})
				.catch(err => console.log(err));
	};
		
	render() {
		if(this.state.isFetching)return <div>loading...</div>
		return (
			<div >
				<h2>Lista</h2>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Nombre</th>
							<th>Precio</th>
							<th>Precio Lista</th>
							<th>Marca</th>
							<th>id Categoria</th>
						</tr>
					</thead>
					<tbody>
					{this.state.items.map((item, i) =>
					<tr key={i}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.price}</td>
						<td>{item.list_price}</td>
						<td>{item.brand}</td>
						<td>{item.category_id}</td>
					</tr> 
					)}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default ListItems;