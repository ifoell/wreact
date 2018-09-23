import React from 'react';
import SearchBar from "../components/SearchBar";
import BlogList from "../components/BlogList";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends React.Component {

	constructor(props) {
	  super()
	
	  this.state = {
	  	loading: true, 
	  	blogs: [],
	  	blogsFiltered: []
	  };
	}

	componentDidMount() {
		this.handleGetBlog()
	}

	handleTypeSearch = event =>{
		const blogsFiltered = this.state.blogs.filter(
			blog => blog.title.toLowerCase().indexOf(event.target.value) > -1
		);
		this.setState({ blogsFiltered : blogsFiltered });
	};

	handleGetBlog = () => {
		return fetch(link)
		.then(res => res.json())
		.then(res => this.setState({ blogs: res, blogsFiltered: res }));
	};

	render() {

		if(this.state.loadig) {
			return (
				<h1>Loading...</h1>
			)
		}

		console.log(this.state.blogsFiltered)

		return (
			<div>
				<SearchBar
				 onChangeSearch={this.handleTypeSearch}
				/>

				{this.state.blogsFiltered.map((blog, index) => (
					<BlogList
					 key={index}
					 title={blog.title}
					 author={blog.author}
					 date={blog.created_at}
					 content={blog.content}
				/>
				))}
			</div>
		)
	}
}

export default App;