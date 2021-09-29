import React, { Component } from 'react';

export default class AddPosts extends Component {
  state = {
      title :'',
      autor :'',
  }
  onChange = (event) =>{
    this.setState({
        [event.target.name]:event.target.value
    })
  }

  onSubmit =(event) =>{
      event.preventDefault();
      this.props.addPosts(this.state);
      this.setState({
          title :'',
          autor :'',
      });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input 
        type="text"
        name="title"
        placeholder="Add title"
        value ={this.state.title}
        onChange={this.onChange}
        />
        <input 
        type="text"
        name="autor"
        placeholder="Add body"
        value ={this.state.autor}
        onChange={this.onChange}
        />
        <input 
        type="submit"
        value="submit"
        />  
      </form>
      </div>
    );
  }
}
