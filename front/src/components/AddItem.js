import React from 'react';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap';
import '../styles/addItem.css';

function FieldGroup({ id, label, help}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddItem extends React.Component {
	constructor(props) {
    	super(props);
			this.addItem = this.addItem.bind(this);
			this.saveItem = this.saveItem.bind(this);
			
			this.state = {
				name: '',
				price: '',
				list_price: '',
				brand: '',
				category_id: '',
			}
  	}

addItem(e) {
	e.preventDefault()
	
	let name = this.state.name
	let price = this.state.price
	let list_price = this.state.list_price
	let brand = this.state.brand
	let category_id = this.state.category_id
	
	console.log(name, price, list_price, brand, category_id)

	this.saveItem(name, price, list_price, brand, category_id)
	
	this.setState({
		name: '',
		price: '',
		list_price: '',
		brand: '',
		category_id: '',
	})
}

saveItem(name, price, list_price, brand, category_id){
	fetch(`/api/item`,
	{
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		credentials: 'include',
		body: JSON.stringify({name, price, list_price, brand, category_id})
		}).then(response => response.json())
			.then(data => console.log('data', data))
			.catch(err => console.log('err', err));
}


render() {
	return (
		<div className="container">
			<h1>Agregar Producto</h1>

			<form>
			<ControlLabel>Nombre</ControlLabel>
			<FormControl
				type="text"
				value={this.state.name}
				placeholder="Enter text"
				onChange={(e) => this.setState({ name: e.target.value })}
			/>
			<ControlLabel>Precio</ControlLabel>
			<FormControl
				label="Text"
				type="number"
				value={this.state.price}
				placeholder="Enter number"
				onChange={(e) => this.setState({ price: e.target.value })}
			/>
			<ControlLabel>Precio Lista</ControlLabel>
			<FormControl
				type="number"
				value={this.state.list_price}
				placeholder="Enter number"
				onChange={(e) => this.setState({ list_price: e.target.value })}
			/>
			<ControlLabel>Marca</ControlLabel>
			<FormControl
				type="text"
				value={this.state.brand}
				placeholder="Enter text"
				onChange={(e) => this.setState({ brand: e.target.value })}
			/>
			<ControlLabel>id de Categoria</ControlLabel>
			<FormControl
				type="number"
				value={this.state.category_id}
				placeholder="Enter text"
				onChange={(e) => this.setState({ category_id: e.target.value })}
			/>

    <Button type="submit" onClick={this.addItem}>Submit</Button>
  </form>

		</div>
	);
}
}

export default AddItem;