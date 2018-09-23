import React from 'react';

const SearchBar = props => {
	return (
		<div style={styles.contentSearch}>
			<input style={styles.inputSearch}
			 type="Text"
			 placeholder="What are you looking for?.."
			 value={props.search}
			 onChange={props.onChangeSearch}
			/>
		</div>
	);
};

const styles = {
	inputSearch:{
		width: 500,
		height: 20
	},
	contentSearch:{
		backgroundColor: 'red',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex'
	}
}

export default SearchBar;