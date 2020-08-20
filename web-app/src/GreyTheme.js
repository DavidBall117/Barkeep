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
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		secondary: {
			main: "#546e7a",
			light: "#819ca9",
			dark: "#29434e",
			contrastText: "#ffffff",
		},
	},
});

theme = responsiveFontSizes(theme);

export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
