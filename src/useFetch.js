import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					console.log(res);
					if (!res.ok) {
						throw Error("could not fetch data");
					}
					return res.json();
				})
				.then((data) => {
					console.log(data);
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch((e) => {
					setIsLoading(false);
					setError(e.message);
					console.log(e.message);
				});
		}, 100);
	}, [url]);

	return { data, isLoading, error };
};

export default useFetch;
