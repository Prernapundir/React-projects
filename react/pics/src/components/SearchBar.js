import React from 'react';


class SearchBar extends React.Component {
  state = {term : ''};

  onFormSubmit = (event)=> {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
       <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
         <label><h1>Search Images</h1></label>
          <input
            type="text"
            placeholder="name"
            value={this.state.term}
            onChange={(e) => this.setState({term : e.target.value})}
           />
         </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
