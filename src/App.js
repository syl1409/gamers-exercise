import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListOfUsers from './listOfUsers';
import AddUsers from './addUsers'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/



class App extends Component {
  
  state = {
  users:[
    {name:'camilo',
    lastname:'torres',
    username:'cato',
    playedgames: 4
    }
  ]
  }

addNewUser =(user)=>{
  user.playedgames= 0
 
  this.setState((oldUsers)=>({
  users:[...oldUsers.users, user],
  }))
  

}

  render() {
    
    const {users} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<div className="addUsers">
			<AddUsers addNewUser={this.addNewUser} users={users}/>
		</div>

		<div className="users">
    		<ListOfUsers users={users}/>
    	</div>    
    
    
      </div>
    );
  }
}

export default App;
