import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const AllItems = () => (
  <div>
  <h3>All Items</h3>
</div>
)

const NewItem = () => (
  <div>
  <h3>New Item</h3>
</div>
)

class Items extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.getItems = this.getItems.bind(this)
	}

	
	componentWillMount(){
		this.getItems()
	}
	
	getItems() {
		fetch(`./api/items`, {
			credentials: 'include',
			})
				.then(response => response.json())
				.then(data => console.log('data',data))
				.catch(err => console.log(err));
	};
		
	render() {
    console.log('props', this.props)
    let match = this.props.match;
		return (
			<div>
      <h2>Productos</h2>
      <div>
      <ul>
        <li><Link to={`${match.url}/`}> todos</Link></li>
        <li><Link to={`${match.url}/add`}>nuevo Producto</Link></li>
      </ul>

      <hr/>

      <Route exact path={`${match.url}/`} component={AllItems}/>
      <Route path={`${match.url}/add`} component={NewItem}/>
    </div>
    </div>
		);
	}
}


export default Items;