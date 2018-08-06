export function addProject(project){
	return {
		type: 'ADD_PROJECT',
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(project);
			}, 1000);
		})
	};
}

export function deleteProject(projectId){
	return {
		type: 'DELETE_PROJECT',
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(projectId);
			}, 1000);
		})
	};
}

export function editProject(projectId){
	return {
		type: 'EDIT_PROJECT',
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(projectId);
			}, 1000);
		})
	};
}

export function updateProject(project){
	return {
		type: 'UPDATE_PROJECT',
		payload: new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(project);
			}, 1000);
		})
	};
}