import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addProject } from '../actions/projectActions';

class AddProject extends Component {	

	handleSubmit(e){
		if(this.refs.title.value === ''){
			alert('Title is Required.');
		}
		else{
			this.props.addProject({
					id: uuid.v4(),
					title: this.refs.title.value,
					category: this.refs.category.value,
					editing: false
			});
		}
		e.preventDefault();
	}

	render() {
		let categoryOptions = this.props.category.map(category => {
			return (
				<option key={category} value={category}>{category}</option>
			)
		});
		return (
		  <div className="AddProject">
			<h3>Add Project</h3>
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div>
					<label>Title</label><br />
					<input type="text" ref="title" />
				</div>
				<div>
					<label>Category</label><br />
					<select ref="category">
						{categoryOptions}
					</select>
				</div>
				<input type="submit" value="Submit" />
			</form>
		  </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		category: state.categoryReducer,
	}	
};

const mapDispatchToProps = (dispatch) => {
	return {
		addProject: (project) => {
			dispatch(addProject(project));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
