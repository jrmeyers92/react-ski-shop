import React from "react";
import NavCSS from "./Nav.module.css";
import Logo from "../../Logo.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { VerticalAlignBottom } from "@material-ui/icons";

const Nav = () => {
	const [tuneEl, setTuneEl] = React.useState(null);
	const [rentalEl, setRentalEl] = React.useState(null);

	const handleTuneClick = (event) => {
		setTuneEl(event.currentTarget);
	};

	const handleRentalClick = (event) => {
		setRentalEl(event.currentTarget);
	};

	const handleClose = () => {
		setTuneEl(null);
		setRentalEl(null);
	};

	return (
		<div>
			<nav className={NavCSS.nav}>
				<img src={Logo} alt='Carvers Logo' />
				<div className='nav__right'>
					<div className='nav__right-bottom'>
						<ul>
							<Button style={{ color: "white" }}>Home</Button>
							<Button
								style={{ color: "white" }}
								aria-controls='rentEquipment'
								aria-haspopup='true'
								onClick={handleRentalClick}>
								Rent Equipment <ExpandMoreIcon style={{ fontSize: 17 }} />
							</Button>
							<Button
								style={{ color: "white" }}
								aria-controls='tuneAndRepair'
								aria-haspopup='true'
								onClick={handleTuneClick}>
								Tuning and Repair <ExpandMoreIcon style={{ fontSize: 17 }} />
							</Button>
							<Button style={{ color: "white" }}>FAQ</Button>
							<Button style={{ color: "white" }}>Blog</Button>
							<Button style={{ color: "white" }}>About Us</Button>

							<Menu
								id='RentEquipment'
								anchorEl={rentalEl}
								keepMounted
								open={Boolean(rentalEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>Ski Rental</MenuItem>
								<MenuItem onClick={handleClose}>Snowboard Rental</MenuItem>
								<MenuItem onClick={handleClose}>Snowshoes / Clothing</MenuItem>
								<MenuItem onClick={handleClose}>Bike Rentals</MenuItem>
							</Menu>

							<Menu
								id='tuneAndRepair'
								anchorEl={tuneEl}
								keepMounted
								open={Boolean(tuneEl)}
								onClose={handleClose}>
								<MenuItem onClick={handleClose}>
									Bike Repair & Tuning Services
								</MenuItem>
							</Menu>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
