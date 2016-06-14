// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of the current state

function postComments(state = [], action) {
	switch(action.type) {
		case 'ADD_COMMENT':
			// return the new state with the new comment
			return [...state, {
				user: action.author,
				text: action.comment
			}]
		// return the updated state
		case 'REMOVE_COMMENT':
			// return the new state without the deleted comment
			return [
				...state.slice(0,action.i), // before the one we are updating
				...state.slice(action.i + 1) // after the one we are updating
			]
		default:
			return state;
	}
}

function comments(state = [], action) {
	if(typeof action.postId !== 'undefined') {
		return {
			// take the current state
			...state,
			// overwrite this post wit a new one
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state; 
}

export default comments;