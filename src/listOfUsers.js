import React, {Component} from 'react';

class ListOfUsers extends Component {
  
  	state={
    	showGames: '',
    }

	changeState =(name)=>{
      const data = this.state.showGames !== name ? name : ''; 
    this.setState((oldState)=>({
    showGames: data,
    }))
      console.log(this.state.showGames)
    }
	render(){
     
    	const {users} = this.props;
		const {showGames} = this.state;
    	return(
        <ul>
          {users.map((user)=>(
        	<li key={user.username}>
          		<p><strong>Name:</strong>{`${user.name} ${user.lastname}`}</p>
          		<p><strong>User Name:</strong>{user.username}</p>
          		<button className="smallButton" onClick={()=>this.changeState(user.username)}>
					{showGames == user.username ? 'Hide games':'Show games'}
				</button>
          		{showGames == user.username && <p>{user.playedgames}</p>}
          </li>
        ))}  
        </ul>
        )
    }
}
export default ListOfUsers