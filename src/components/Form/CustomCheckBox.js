import React, { useRef, useEffect } from "react";
import "./CustomCheckBox.css";

const CustomCheckBox = ({
	color,
	name,
	handleCheck,
	label_line_1,
	label_line_2,
}) => {
	const input_checkbox = useRef();
	const custom_checkbox = useRef();
	const check_mark = useRef();
	const card_container = useRef();

	const colors = {
		borderColor: `${color}`,
	};

	useEffect(() => {
		let time_out_1;
		let time_out_2;
		console.log(input_checkbox.current.checked);
		const toggleCheckBox = () => {
			if (input_checkbox.current.checked === false) {
				custom_checkbox.current.style.backgroundColor = color;
				check_mark.current.style.opacity = "1";
				card_container.current.style.boxShadow =
					"0px 5px 10px 1px rgba(0, 0, 0, 0.15)";
				time_out_1 = setTimeout(() => {
					check_mark.current.style.transform = "scale(1)";
				}, 150);
				clearInterval(time_out_2);
				input_checkbox.current.checked = true;
				console.log(input_checkbox.current.checked);
			} else {
				custom_checkbox.current.style.backgroundColor = "";
				time_out_2 = setTimeout(() => {
					check_mark.current.style.opacity = "0";
				}, 200);
				card_container.current.style.boxShadow = "";
				check_mark.current.style.transform = "scale(0)";
				input_checkbox.current.checked = false;
				clearInterval(time_out_1);
				console.log(input_checkbox.current.checked);
			}
		};
		card_container.current.addEventListener("click", toggleCheckBox);
	});

	return (
		<div ref={card_container} className="checkbox_card">
			<div className="checkbox_container">
				<div ref={custom_checkbox} style={colors} className="custom_checkbox">
					<span ref={check_mark} className="custom_checkbox__tick_sign">
						&#10004;
					</span>
					<div className="custom_checkbox__body"></div>
				</div>
			</div>
			<label htmlFor={name} className="checkbox__label">
				{label_line_1}
				<br />
				{label_line_2}
			</label>
			<input
				onChange={() => {
					console.log("im changed");
				}}
				ref={input_checkbox}
				className="checkbox_input"
				type="checkbox"
				name={name}
			/>
		</div>
	);
};

export default CustomCheckBox;
