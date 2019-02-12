import React, {Component} from 'react';
import Images from './Images';



class App2 extends Component {
   state = { Serverdata:[]}

   
componentDidMount() {

    const url ='https://jsonplaceholder.typicode.com/photos';
        fetch(url)
        .then((response) => {
            return response.json();
            console.log(response);
        })
        .then((data)=>{
            this.setState({
                Serverdata:data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    
}

    

    render() {
        console.log(this.state.Serverdata);
         const data = this.state.Serverdata.map((item)=>{
             return  <Images key={item.id} item={item} />
         });
        return (
            <div>{data}</div>
        )
            
        
    }

 };

export default App2;
