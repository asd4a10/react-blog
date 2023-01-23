import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: "1", body: "123", author: "mario", id: 1 },
		{ title: "2", body: "123", author: "licio", id: 2 },
		{ title: "3", body: "123", author: "rustem", id: 3 },
	]);

	const handleDeleteBlog = (id) => {
		console.log("in delete blog", id);
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	useEffect(() => {
		console.log("use effect");
	});

	return (
		<div className="home">
			<BlogList
				blogs={blogs}
				title="all blogs"
				handleDeleteBlog={handleDeleteBlog}
			/>
			<BlogList
				blogs={blogs.filter((e) => e.author === "rustem")}
				title="rustem's blogs"
				handleDeleteBlog={handleDeleteBlog}
			/>
		</div>
	);
};

export default Home;
