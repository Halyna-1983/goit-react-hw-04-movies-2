import React, { Component } from 'react';

class SearchForm extends Component {
    state = { 
        querry: '',
     }

     handleChange = e => {
         this.setState({ query: e.target.value.trim() });
     }

     handleSubmit = e => {
         e.preventDefault()
         this.props.onSubmit(this.state.query)
     }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.query} onChange={this.handleChange} />
                <button type="submit">Search</button>
            </form>
         );
    }
}
 
export default SearchForm;