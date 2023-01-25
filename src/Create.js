import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
	const [title, setTitle] = useState("121");
	const [body, setBody] = useState("");
	const [author, setAuthor] = useState("yoshi");
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = {
			title,
			body,
			author,
		};
		console.log(blog);
		setIsLoading(true);
		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(blog),
		}).then(() => {
			console.log("new blog added");
			setIsLoading(false);
			// history.go(1);
			history.push("/");
		});
	};

	return (
		<div className="create">
			<h2>Add a new blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<label>Blog Body</label>
				<textarea
					type="text"
					required
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
				/>
				<label>Blog Author</label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>
				{!isLoading && <button>Add blog</button>}
				{isLoading && <button disabled>Loading...</button>}
				<p>{title}</p>
				<p>{body}</p>
				<p>{author}</p>
			</form>
		</div>
	);
};

export default Create;
