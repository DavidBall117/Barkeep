import React, { useEffect } from "react";
import {
	List,
	ListItem,
	ListItemIcon,
	Checkbox,
	ListItemText,
} from "@material-ui/core";

export default function MyIngredientList(props) {
	const [checked, setChecked] = React.useState([]);

	const drinkId = `${props.drinkId}_Ingredients`;
	useEffect(() => {
		const data = JSON.parse(window.localStorage.getItem(drinkId)) || [];
		setChecked(data);
	}, [drinkId]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
		window.localStorage.setItem(drinkId, JSON.stringify(newChecked));
	};

	return (
		<List>
			{props.ingredients.map((i) => {
				return (
					<ListItem
						key={`Ingrdient_${JSON.stringify(i)}`}
						role={undefined}
						dense
						button
						onClick={handleToggle(JSON.stringify(i))}
					>
						<ListItemIcon>
							<Checkbox
								edge="start"
								tabIndex={-1}
								disableRipple
								inputProps={{ "aria-labelledby": JSON.stringify(i) }}
								checked={checked.indexOf(JSON.stringify(i)) !== -1}
							/>
						</ListItemIcon>
						<ListItemText
							id={JSON.stringify(i)}
							primary={`${i.amount} of ${i.name}`}
						/>
					</ListItem>
				);
			})}
		</List>
	);
}
