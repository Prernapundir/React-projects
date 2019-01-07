import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import products from './seed.js';


class ProductList extends React.Component {
    state = { products:[] };

  componentDidMount() {
     this.setState({ products: products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product ,{ votes: product.votes + 1 });
      } else {
        return product;
      }
    });
    this.setState({ products: nextProducts });

  }
  handleProductDownVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product ,{ votes: product.votes - 1 });
      } else {
        return product;
      }
    });
    this.setState({ products: nextProducts });

  }
  render() {

  
    const productComponents = products.map((product) => (
      <Product
        key={'product-' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submitterAvatarUrl={product.submitterAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        downVote={this.handleProductDownVote}
        / >
      ));
    return (
      <div className="ui unstackable items">
        { productComponents }
      </div>
    );
  }
};

ReactDOM.render(<ProductList />,document.querySelector("#root"));
