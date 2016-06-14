import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
// import comments

const Single = React.createClass({
	render() {
		// index of the post
		const props = this.props;
		const { postId } = props.params;

		const i = props.posts.findIndex((post) => post.code === postId);
		const post = props.posts[i];	
		const postComments = props.comments[postId] || [];

		// get the post
		return (
			<div className="single-photo">
				<Photo i={i} post={post} {...this.props} />
				<Comments postComments={ postComments } {...this.props} />
			</div>
		)
	}
});

export default Single;