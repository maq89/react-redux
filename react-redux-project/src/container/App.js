import React, { Component } from 'react';
import { connect } from 'react-redux';
//import uuid from 'uuid';
import Projects from './../components/Projects';
import AddProject from './../components/AddProject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddProject />
		<Projects />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
	return {
		
	}	
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
