// props: checked, onChange, label, name

import React from "react";
import {
	makeStyles,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	label: {
		userSelect: "none",
	},
}));

export default function MyCheckbox(props) {
	const classes = useStyles();
	return (
		<FormGroup>
			<FormControlLabel
				className={`${classes.label} ${props.className}`}
				control={
					<Checkbox
						checked={props.checked}
						onChange={(event) => {
							props.setChecked(event.target.checked);
						}}
						name={props.label}
						color="primary"
					/>
				}
				label={props.label}
			/>
		</FormGroup>
	);
}
