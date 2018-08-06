import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';
import { fetchProjects, deleteProject, editProject, updateProject } from './../actions/projectActions';

class Projects extends Component {	
	
	componentWillMount(){
		this.props.fetchProjects();
	}
	
	render() {
		let projectItems;
		if(this.props.project){
			projectItems = this.props.project.map(project => {
				return (
					<ProjectItem 
					onEditProject={(projectId) => this.props.editProject(projectId)} 
					onUpdateProject={(project) => this.props.updateProject(project)} 
					onDeleteProject={(projectId) => this.props.deleteProject(projectId)} 
					categories={this.props.category} 
					key={project.id} 
					project={project} />
				);
			});
		}
		return (
		  <div className="Projects">
			<ul>
				{projectItems}
			</ul>
		  </div>
		);
	}
}

// Type Checking of Prop
/*
Projects.propTypes = {
	projects: PropTypes.array.isRequired,
	onEdit: PropTypes.func.isRequired,
	onDelete: PropTypes.func.isRequired
}
*/

const mapStateToProps = (state) => {
	return {
		project:  state.projectReducer,
		category: state.categoryReducer,
	}	
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProjects: () => {
			dispatch(fetchProjects());
		},
		deleteProject: (projectId) => {
			dispatch(deleteProject(projectId));
		},
		editProject: (projectId) => {
			dispatch(editProject(projectId));
		},
		updateProject: (project) => {
			dispatch(updateProject(project));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

