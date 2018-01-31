import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import AddItem from './AddItem'
import ListItems from './ListItems'

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
		
	render() {
    console.log('props', this.props)
    let match = this.props.match;
		return (
			<div>
      <h2>Productos</h2>
      <div>
      <ul>
        <li><Link to={`${match.url}/`}> Ver Todos</Link></li>
        <li><Link to={`${match.url}/add`}>Nuevo Producto</Link></li>
      </ul>

      <hr/>

      <Route exact path={`${match.url}/`} component={ListItems}/>
      <Route path={`${match.url}/add`} component={AddItem}/>
    </div>
    </div>
		);
	}
}


export default Items;