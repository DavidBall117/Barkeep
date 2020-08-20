import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Grid, Container } from "@material-ui/core";
import { getCategories } from "../MixologistService";
import MyCard from "../components/MyCard";
import MyLoadingIcon from "../components/MyLoadingIcon";
import MyToast from "../components/MyToast";
import { getIconSrc } from "../Utilities";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	item: {
		textAlign: "center",
		marginTop: "1rem",
		"&:last-child": {
			marginBottom: "1rem",
		},
	},
	icon: {
		marginTop: "1rem",
		width: 50,
		maxWidth: "100%",
	},
}));

function CategoriesMarkup(props) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Grid container className={classes.root}>
			{props.categories.map((value) => (
				<Grid
					item
					xs={12}
					md={6}
					lg={4}
					xl={3}
					key={value}
					className={classes.item}
				>
					<MyCard
						title={value}
						onClick={() => {
							history.push(`/categories/${value}`);
						}}
					>
						<img alt="" src={getIconSrc(value)} className={classes.icon} />
					</MyCard>
				</Grid>
			))}
		</Grid>
	);
}

export default class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			loading: false,
			toastOpen: false,
			toastText: "",
		};
	}

	async componentDidMount() {
		// show loading
		this.setState({
			loading: true,
		});
		try {
			const res = await getCategories();
			this.setState({ categories: res.data });
		} catch (err) {
			// log and display network error toast
			console.error(err);
			this.setState({
				toastOpen: true,
				toastText: "A network error occured.",
			});
		}
		// hide loading
		this.setState({
			loading: false,
		});
	}

	render() {
		const { categories, loading, toastText, toastOpen } = this.state;
		return (
			<React.Fragment>
				{loading ? (
					<MyLoadingIcon />
				) : (
					<Container>
						<CategoriesMarkup categories={categories} />
					</Container>
				)}

				<MyToast
					status="error"
					text={toastText}
					open={toastOpen}
					onClose={() => {
						this.setState({ toastText: "", toastOpen: false });
					}}
				/>
			</React.Fragment>
		);
	}
}
