import React from 'react';

class SignUp extends React.Component {

 state={
   people:[],
   fields:{
     name:'',
     branch:'',
     email:''
   }
 };

 onFormSubmit = (event) => {
   event.preventDefault();
   const people=[...this.state.people,this.state.fields];
   this.setState({
     people,
     fields:{
       name: '',
       branch:'',
       email:''
     },
  
   });

 };

 onInputChange = (event) => {
   const fields=this.state.fields;
   fields[event.target.name]= event.target.value;
   this.setState({fields});
 }
  render() {
    return (
      <div className="ui segment" style={{textAlign:"center"}}>
        <h1><b>Sign Up Sheet</b></h1>
        <form className="ui form" onSubmit={this.onFormSubmit} >
         <div >
           <input  placeholder="name" name="name" value={this.state.fields.name} onChange={this.onInputChange} />
           <br/>
           <input  placeholder="branch" name="branch" value={this.state.fields.branch} onChange={this.onInputChange} />
           <br/>
           <input  placeholder="email" name="email" value={this.state.fields.email} onChange={this.onInputChange} />
           <br/>
         </div>
          <button className="ui button" >Submit</button>
        </form>
        <div style={{textAlign:"center"}}>
           <h1>Names</h1>
           <ul>{this.state.people.map(({name,email,branch},i)=> <li key={i}>{name}({email})({branch})</li>)}</ul>
        </div>
      </div>
    );
  }
};

export default SignUp;
