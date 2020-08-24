// props: label, options, value, setValue, freeSolo, inputValue, setInputValue

import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

export default function MySearchBar(props) {
	return (
		<Autocomplete
			freeSolo={props.freeSolo ? true : false}
			options={props.options || []}
			renderInput={(params) => (
				<TextField
					{...params}
					label={props.label}
					margin="normal"
					variant="outlined"
				/>
			)}
			value={props.value}
			onChange={(event, newValue) => {
				props.setValue(newValue);
			}}
			inputValue={
				props.inputValue || props.inputValue === ""
					? props.inputValue
					: undefined
			}
			onInputChange={
				props.setInputValue
					? (event, newValue) => {
							props.setInputValue(newValue);
					  }
					: undefined
			}
		/>
	);
}
