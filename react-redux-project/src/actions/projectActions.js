import axios from 'axios';

export function fetchProjects(){
	return {
		type: 'FETCH_PROJECT',
		payload: axios.get('http://localhost:8000')
	};
}

export function addProject(project){
	return {
		type: 'ADD_PROJECT',
		payload: axios.get('http://localhost:8000/?action=add&title='+project.title+'&category='+project.category)
		/*
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(project);
			}, 1000);
		})
		*/
	};
}

export function deleteProject(projectId){
	return {
		type: 'DELETE_PROJECT',
		payload: axios.get('http://localhost:8000/?action=delete&id='+projectId)
	};
}

export function editProject(projectId){
	return {
		type: 'EDIT_PROJECT',
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(projectId);
			}, 100);
		})
	};
}

export function updateProject(project){
	return {
		type: 'UPDATE_PROJECT',
		payload: axios.get('http://localhost:8000/?action=edit&title='+project.title+'&category='+project.category+'&id='+project.id)
	};
}