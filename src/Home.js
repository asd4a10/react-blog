import { useState } from "react";

const Home = () => {
	const [name, setName] = useState("rustem");
	const [count, setCount] = useState(0);

	const handleClick = (e) => {
		setName("Rustem");
	};

	const handleClickCount = (e) => {
		setCount(1 + count);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<p>
				{name}'s age is {count}
			</p>
			<button onClick={handleClick}>Click me</button>
			<button onClick={handleClickCount}>Click me</button>
		</div>
	);
};

export default Home;
