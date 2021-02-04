import React from "react";
import AppCSS from "./App.module.css";
import Nav from "./Sections/Nav/Nav";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className={AppCSS.App}>
			<Nav />
			<Switch>hello</Switch>
		</div>
	);
}

export default App;
