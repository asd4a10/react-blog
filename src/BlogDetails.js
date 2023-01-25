import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();
	const history = useHistory();

	const {
		data: details,
		isLoading,
		error,
	} = useFetch(`http://localhost:8000/blogs/${id}`);

	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			console.log("deleting blog");
			history.push("/");
		});
	};

	return (
		<div className="blog-details">
			{isLoading && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{!isLoading && (
				<article>
					<h2>{details.title}</h2>
					<p>Author: {details.author}</p>
					<div className="blog-body">Description: {details.body}</div>
					<button onClick={handleDelete}>delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
