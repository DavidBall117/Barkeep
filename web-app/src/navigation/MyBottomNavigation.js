// props: pathMap = [ { path: "string", label: "string", icon: <MaterialUIIcon /> } ]

import React, { Component } from "react";
import {
	makeStyles,
	BottomNavigation,
	BottomNavigationAction,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

import "./MyBottomNavigation.css";

const useStyles = makeStyles((theme) => ({
	navBar: {
		backgroundColor: theme.palette.primary.main,
	},
	navButton: {
		minWidth: 0,
	},
}));

function Nav(props) {
	const classes = useStyles();
	return (
		<BottomNavigation
			showLabels
			value={props.pathIndex}
			onChange={props.onChange}
			className={classes.navBar}
		>
			{props.pathMap.map((x) => (
				<BottomNavigationAction
					key={x.path}
					label={x.label}
					icon={x.icon}
					component={Link}
					to={x.path}
					className={classes.navButton}
				/>
			))}
		</BottomNavigation>
	);
}

class MyBottomNavigation extends Component {
	constructor(props) {
		super(props);
		const path = props.location.pathname;
		const pathMap = props.pathMap;
		const pathIndex = pathMap.map((x) => x.path).indexOf(path);
		this.state = {
			pathMap,
			pathIndex,
		};
	}

	static getDerivedStateFromProps(props) {
		const path = props.location.pathname;
		const pathIndex = props.pathMap.map((x) => x.path).indexOf(path);
		return { pathIndex };
	}

	onChange = (event, pathIndex) => {
		this.setState({
			pathIndex,
		});
	};

	render() {
		const { pathMap, pathIndex } = this.state;
		return (
			<Nav pathMap={pathMap} pathIndex={pathIndex} onChange={this.onChange} />
		);
	}
}

export default withRouter(MyBottomNavigation);
