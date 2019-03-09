import React from 'react';


class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id)
  };

  handleDownVote = () => {
    this.props.downVote(this.props.id)
  };

  render() {

    return (
      <div className='item'>
        <div className='image'>
         <img alt="" src={this.props.productImageUrl} />
        </div>
        <div className=" middle aligned content">
         <div className="header">
          <a onClick={this.handleUpVote} href={this.props.url}>
           <i className="large caret up icon" ></i>
          </a >
          <a onClick={this.handleDownVote} href={this.props.url}>
           <i className="large caret down icon" ></i>
          </a >
          {this.props.votes()}

         </div>
         <div className="description">
          <a href={this.props.url}>{this.props.title}</a>
          <p>{this.props.description}</p>
         </div>
         <div className="extra">
           <span>Submitted by:</span>
           <img alt="" className="ui avatar image" src={this.props.submitterAvatarUrl} />
         </div>
        </div>
      </div>
    );
  }
};

export default Product;