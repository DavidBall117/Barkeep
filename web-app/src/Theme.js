import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
	typography: {
		fontFamily:
			"Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial, sans-serif",
	},
	palette: {
		primary: {
			main: "#8d6e63",
			light: "#efdcd5",
			dark: "#8c7b75",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#8d6e63",
			light: "#efdcd5",
			dark: "#8c7b75",
			contrastText: "#ffffff",
		},
	},
});

theme = responsiveFontSizes(theme);

export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
