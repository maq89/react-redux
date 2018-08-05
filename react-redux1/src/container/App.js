import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main } from '../components/Main';
import { User } from '../components/User';
import { setName } from '../actions/userActions';

class App extends Component {
  render() {
    return (
      <div className="container">
		<Main changeUserName={() => this.props.setName('Musaib New') } />
		<User username={this.props.user.name} />
	  </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.userReducer,
		math: state.mathReducer
	}	
};

const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
