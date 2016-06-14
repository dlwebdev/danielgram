// increment links
// passes in the index of the post
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

// add comment
export function addComment(postId, author, comment) {
	return {
		type: "ADD_COMMENT",
		postId, 
		author, 
		comment
	}
}

// remove comment
// Passes the post id and index of which comment to remove
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	}
}