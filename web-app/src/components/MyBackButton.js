import React from "react";
import { useHistory } from "react-router-dom";
import { Fab } from "@material-ui/core";
import { ArrowBack as Icon } from "@material-ui/icons";

export default function MyBackButton() {
	const history = useHistory();
	return (
		<Fab
			size="small"
			color="primary"
			aria-label="add"
			onClick={() => history.goBack()}
		>
			<Icon />
		</Fab>
	);
}
