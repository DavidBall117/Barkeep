import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getDrinks } from "../RestService";
import MyPage from "../components/MyPage";
import MyList from "../components/MyList";

export default function Category() {
	const { category } = useParams();
	const [drinks, setDrinks] = useState([]);

	async function fetchData() {
		const response = await getDrinks(null, category);
		setDrinks(response.data);
	}

	return (
		<MyPage title={`${category.toLocaleUpperCase()}`} fetchData={fetchData}>
			<MyList data={drinks} />
		</MyPage>
	);
}
