import React from 'react';

const Bloglist = props => {
	return (
		<div style={styles.blogAll}>
			<h2 style={styles.blogTitle}>{props.title}</h2>
			<p style={styles.blogAuthor}>{props.author} - {props.date}</p>
			<p>{props.content}</p>
		</div>
	);
};

const styles = {
	blogTitle:{
		color: 'darkblue'
	},
	blogAuthor:{
		fontStyle: 'italic' 
	},
	blogAll:{
		justifyContent: 'center',
		backgroundColor: 'lightblue'
	}
}

export default Bloglist;