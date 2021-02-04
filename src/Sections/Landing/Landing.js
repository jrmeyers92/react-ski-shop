import { Button, Typography } from "@material-ui/core";
import React from "react";
import LandingCSS from "./Landing.module.css";

const Landing = () => {
	return (
		<div className={LandingCSS.landing}>
			<Typography variant='h2' component='h3' style={{ color: "white" }}>
				Experience the Great Outdoors
			</Typography>
			<Button
				size='large'
				variant='contained'
				style={{ color: "white" }}
				color='secondary'>
				Reserve Online
			</Button>
		</div>
	);
};

export default Landing;
