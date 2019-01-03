import React, { Component } from 'react';
import robot from './robot';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component{
	constructor(){
		super()
		this.state = {
			robot: robot,
			searchfield: ''
		}
	}
	construtorDidMount(){
		fetch(`https://jsonplaceholder.typicode.com/users`)
		.then(response => response.json())
		.then(users => this.setState({robot: users}));
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}
	render(){
		const filteredRobots = this.state.robot.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
        return (
		<div className = "tc">
		   <h1>RoboFriends</h1>
		   <SearchBox searchChange = {this.onSearchChange} />
		   <Scroll>
		      <Cardlist robot = {filteredRobots} />
		   </Scroll>   
		</div>
		);
	}
	
}
export default App;