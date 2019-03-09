import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {

   
     state = {
         news:[],
     }
    
    componentDidMount() {
        const url =`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=c12ff40452e945d38b697e7c2f2c6eb7`;
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({news:data.articles});
        })
        .catch((error)=>console.log(error));
    }

    

    render() {
        
        const news= this.state.news.map((item)=>(
            <NewSingle key={item.url} item={item } />
        ));
        return (
        <div className="row">
          {news}  
        </div>
        )
    }
};

export default News;