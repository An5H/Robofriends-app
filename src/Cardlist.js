import React from 'react';
import Card from './Card';
const Cardlist = ({robot}) => {
	const Cardcomponent = robot.map((user,i) => {
		return <Card 
		key = {i} 
		id = {robot[i].id} 
		name = {robot[i].name} 
		username = {robot[i].username} 
		email = {robot[i].email} />
	});
	return(
		<div>
	         {Cardcomponent};
	    </div>
	);
}
export default Cardlist;
