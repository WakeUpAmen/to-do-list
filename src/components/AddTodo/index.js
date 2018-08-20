import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
  }
  handleInput = e => {
    this.setState({input: e.target.value});
  };

  submit = e => {
    
    if(e.keyCode === 13){
      this.props.addTodo(this.state.input);
      this.setState({input: ''});
    } 
  };

  render() {
    return (
      <div>
          <input value={this.state.input} onChange={this.handleInput} onKeyDown={this.submit}/>
      </div>
    );
  }
}

export default AddTodo;