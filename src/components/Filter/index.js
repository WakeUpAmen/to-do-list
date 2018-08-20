import React, {Component} from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" onClick={this.props.minusAll} /> 
        <button  onClick={this.props.addAll}>recall all todos</button>
      </div>

    );
  }
}

export default Filter;