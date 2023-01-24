import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		console.log("use effect");
		setTimeout(() => {
			fetch("http://localhost:8000/blogs")
				.then((res) => {
					console.log(res);
					if (!res.ok) {
						throw Error("could not fetch data");
					}
					return res.json();
				})
				.then((data) => {
					console.log(data);
					setBlogs(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((e) => {
					setIsLoading(false);
					setError(e.message);
					console.log(e.message);
				});
		}, 100);
	}, []);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="all blogs" />}
			{/* {blogs && (
				<BlogList
					blogs={blogs.filter((e) => e.author === "rustem")}
					title="rustem's blogs"
					handleDeleteBlog={handleDeleteBlog}
				/>
			)} */}
		</div>
	);
};

export default Home;
