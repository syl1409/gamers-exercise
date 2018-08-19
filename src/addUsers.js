import React, {Component} from 'react';
class AddUsers extends Component{
  
  state={
   alert:false,
   user:
    {name:'',
    lastname:'',
    username:'',
	}
  
  }

	handleform=(event)=>{
       this.setState((oldState)=>(
        {
        alert:false,
        }
      ))
     
    	const {name, value}=event.target;
      this.setState((oldState)=>({

      	user: {
        ...oldState.user,
        [name]: value,
      },
      }))
    };

checkUser=(username)=>{
  const data = this.props.users.filter(x => x.username == username);

  if(data.length > 0){
  return true
  }
  else{
  return false}
}
 

	addUser=(event)=>{
    event.preventDefault();
      
    if(!this.checkUser(this.state.user.username)) {
         this.setState((oldState)=>(
        {
        alert:false,
        }
      ))
     this.props.addNewUser(this.state.user)
    }
      else{
      this.setState((oldState)=>(
        {
        alert:true,
        }
      ))
      }
   
    }



	render(){
 
    	const {name, lastname,username} = this.state.user;
		const {alert} = this.state;

    	return(
          <div>
          
          <form onSubmit={this.addUser}>
        <input type='text' placeholder='Name' value={name} name="name" onChange={(event)=>this.handleform(event)}/>
        <input type='text' placeholder='Last Name' value={lastname} name="lastname" onChange={(event)=>this.handleform(event)}/>
        <input type='text' placeholder='User Name' value={username} name="username" onChange={(event)=>this.handleform(event)}/>
		<button disabled={name == '' || lastname == '' || username == ''}>Add User</button>
          
        </form>
{alert && <div className="alert">These user name alredy exist, please use other user name!</div>}
</div>
        
        )
    }

}
export default AddUsers