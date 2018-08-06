import uuid from 'uuid';
const initialProjects = [
				{
					id: uuid.v4(),
					title : 'Project 1',
					category : 'Category 1',
					editing: false
				},
				{
					id: uuid.v4(),
					title : 'Project 2',
					category : 'Category 2',
					editing: false
				},
				{
					id: uuid.v4(),
					title : 'Project 3',
					category : 'Category 3',
					editing: false
				}
			];
const projectReducer = (state = initialProjects, action) => {
	
	switch(action.type){
		case 'ADD_PROJECT_FULFILLED':
			state = state.concat(action.payload);
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
			let updateProjects = [...state];
			let updateIndex = updateProjects.findIndex(x => x.id === action.payload.id);
			updateProjects[updateIndex].title = action.payload.title;
			updateProjects[updateIndex].category = action.payload.category;
			updateProjects[updateIndex].editing = false;
			state = updateProjects;
			break;		
	}
	
	return state;
};

export default projectReducer;