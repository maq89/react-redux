const projectReducer = (state = [], action) => {
	switch(action.type){
		case 'FETCH_PROJECT_FULFILLED':
			let fetchProjects = action.payload.data.result;
			let newfetchProjects = fetchProjects.map(project => {
				project.editing = false;
				return project;
			});
			state = newfetchProjects;
			break;
		case 'ADD_PROJECT_FULFILLED':
			let addProjects = action.payload.data.result;
			addProjects.editing = false;
			state = state.concat(addProjects);
			break;
		case 'DELETE_PROJECT_FULFILLED':
			let deleteProjects = [...state];
			let deleteIndex = deleteProjects.findIndex(x => x.id === action.payload);
			deleteProjects.splice(deleteIndex, 1);
			state = deleteProjects;
			break;
		case 'EDIT_PROJECT_FULFILLED':
			let editProjects = [...state];
			let editIndex = editProjects.findIndex(x => x.id === action.payload);
			editProjects[editIndex].editing = true;
			state = editProjects;
			break;	
		case 'UPDATE_PROJECT_FULFILLED':
			let updatedProject = action.payload.data.result;
			let updateProjects = [...state];
			let updateIndex = updateProjects.findIndex(x => x.id === updatedProject.id);
			updateProjects[updateIndex].title = updatedProject.title;
			updateProjects[updateIndex].category = updatedProject.category;
			updateProjects[updateIndex].editing = false;
			state = updateProjects;
			break;	
		default:
			break;	
	}
	
	return state;
};

export default projectReducer;