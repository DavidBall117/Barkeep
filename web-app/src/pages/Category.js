import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getDrinks } from "../MixologistService";
import MyPage from "../components/MyPage";
import MyList from "../components/MyList";

export default function Category() {
	const history = useHistory();
	const { category } = useParams();
	const [drinks, setDrinks] = useState([]);

	async function fetchData() {
		const response = await getDrinks(null, category);
		setDrinks(response.data);
	}

	const onSelect = (id) => {
		history.push(`/recipe/${id}`);
	};

	return (
		<MyPage title={`${category.toLocaleUpperCase()}`} fetchData={fetchData}>
			<MyList data={drinks} category={category} onSelect={onSelect} />
		</MyPage>
	);
}
