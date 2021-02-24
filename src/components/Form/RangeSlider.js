import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		display: "block",
		width: "80%",
		marginRight: "auto",
		marginLeft: "auto",
	},
});

const BudgetSlider = withStyles({
	root: {
		color: "rgb(109, 216, 255)",
		height: 3,
		padding: "13px 0",
	},
	thumb: {
		height: 27,
		width: 27,
		backgroundColor: "#fff",
		border: "5px solid currentColor",
		marginTop: -12,
		marginLeft: -13,
		boxShadow: "#ebebeb 0 2px 2px",
		"&:focus, &:hover, &$active": {
			boxShadow: "#ccc 0 2px 3px 1px",
		},
	},
	valueLabel: {
		left: "calc(-50% + 0px)",
		top: -25,
		fontSize: "13px",
		letterSpacing: "0.05em",
		// marginLeft: "-10px",
		"& *": {
			background: "transparent",
			color: "#000",
		},
	},
	track: {
		height: 4,
	},
})(Slider);

const ValueLableComponent = (props) => {
	return (
		<Tooltip
			className="tooltip"
			open={true}
			placement="top"
			title={props.value}
			arrow
		>
			{props.children}
		</Tooltip>
	);
};

const marks = [
	{
		value: 5000,
		label: `$5000`,
	},
	{
		value: 500000,
		label: "$500000",
	},
];

const RangeSlider = ({ budget, setBudget }) => {
	const classes = useStyles();
	const handleChange = (event, newValue) => {
		setBudget(newValue);
	};

	const valueText = (value) => {
		return `$${value}`;
	};

	return (
		<div className={classes.root}>
			<BudgetSlider
				min={5000}
				max={500000}
				onChange={handleChange}
				value={budget}
				valueLabelDisplay="on"
				marks={marks}
				getAriaValueText={valueText}
				valueLabelFormat={(value) => {
					return `$${value}`;
				}}
				ValueLabelComponent={ValueLableComponent}
			/>
		</div>
	);
};

export default RangeSlider;
