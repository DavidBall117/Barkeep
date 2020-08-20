import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
	typography: {
		fontFamily:
			"Geneva, Lucida Sans, Lucida Grande, Lucida Sans Unicode, Verdana, sans-serif",
	},
	palette: {
		primary: {
			main: "#9C27B0",
			light: "#E1BEE7",
			dark: "#7B1FA2",
			contrastText: "#FFFFFF",
		},
		secondary: {
			main: "#9C27B0",
			light: "#E1BEE7",
			dark: "#7B1FA2",
			contrastText: "#FFFFFF",
		},
	},
	status: {
		danger: "#F44336",
	},
});

theme = responsiveFontSizes(theme);

export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
