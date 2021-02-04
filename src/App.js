import React from "react";
import AppCSS from "./App.module.css";
import Nav from "./Sections/Nav/Nav";
import Landing from "./Sections/Landing/Landing";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className={AppCSS.App}>
			<Nav />
			<Landing />

			<Switch>hello</Switch>
		</div>
	);
}

export default App;
