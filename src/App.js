import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import * as actions from './actions';

class App extends Component {
  addTodo = text => {
    this.props.addtodo(actions.addTodo(text));
  };
  onTodoClick = id => {
    this.props.toggletodo(actions.toggleTodo(id));
  };
  minusAll = () => {
    this.props.minusall(actions.minusAll());
  };

  addAll=()=>{
    this.props.addall(actions.addAll());
  }
  getRemain=()=>{
    this.props.getremain(actions.getActive());
  }
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <Filter minusAll={this.props.minusall} addAll={this.props.addall} />
        {/* <p>remaing: {this.props.getRemain}</p> */}
        <TodoList
          list={this.props.todos}
          onTodoClick={this.onTodoClick}
        />      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filter: state.filter,
  };
};

//use mapDispatchToProps
function mapDispatchToProps(dispatch) {
  return({
    addtodo: (text)=>dispatch(text),
    toggletodo: (id) => dispatch(id),
    addall: ()=>{dispatch( {type: 'ADD_ALL'})},
    minusall: ()=>{dispatch({type: 'MINUS_ALL'})},
    getActive:()=> {dispatch({type: 'GET_ACTIVE'})}

  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

