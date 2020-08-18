import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Theme from "./Theme";
import MyMasterLayout from "./layouts/MyMasterLayout";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import NotFound from "./pages/NotFound";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Router>
				<Theme>
					<MyMasterLayout>
						<Switch>
							<Route path="/" exact>
								<Home />
							</Route>
							<Route path="/search">
								<Search />
							</Route>
							<Route path="/categories" exact>
								<Categories />
							</Route>
							<Route path="/categories/:category" exact>
								<Category />
							</Route>
							<Route path="/recipe/:id" exact>
								<Recipe />
							</Route>
							<Route path="*" exact>
								<NotFound />
							</Route>
						</Switch>
					</MyMasterLayout>
				</Theme>
			</Router>
		);
	}
}
