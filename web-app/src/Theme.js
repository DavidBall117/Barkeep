import React from "react";
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
	palette: {
		primary: {
			dark: "#7B1FA2",
			main: "#9C27B0",
			light: "#E1BEE7",
			contrastText: "#ffffff",
		},
	},
});

theme = responsiveFontSizes(theme);

export default function Theme(props) {
	return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
