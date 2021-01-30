import React, { useRef, useEffect } from "react";
import "./InputSection_1.css";

const InputBox = ({
	handleChange,
	formDetails,
	input_field_placeHolder,
	name,
	type,
	required,
	error_message,
	invalid,
}) => {
	const input_field = useRef();
	const input_label = useRef();
	const error_Message = useRef();
	let isInvalid;
	if (required) {
		isInvalid = invalid;
	}

	useEffect(() => {
		const translateLabel = () => {
			if (input_label.current.style.transform === "") {
				input_label.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label.current.style.color = "#000";
				input_label.current.style.background = "#ecfbff";
				input_field.current.style.borderColor = "#6dd8ff";
			}
		};
		const replaceLabel = () => {
			if (input_field.current.value === "") {
				input_label.current.style.transform = "";
				input_field.current.style.borderColor = "";
				input_label.current.style.color = "";
				input_label.current.style.background = "";
			}
		};
		input_field.current.addEventListener("focus", translateLabel);
		input_field.current.addEventListener("blur", replaceLabel);
	}, [formDetails]);

	useEffect(() => {
		if (required && isInvalid) {
			error_Message.current.style.height = "auto";
			input_field.current.style.borderColor = "#ef5366";
			error_Message.current.style.opacity = "1";
		} else {
			error_Message.current.style.height = "0";
			input_field.current.style.borderColor = "";
			error_Message.current.style.opacity = "0";
		}
	});

	return (
		<div className="inputSectoin_1">
			<div className="form__content__input_container">
				<label
					ref={input_label}
					htmlFor={name}
					className="form_input_section_1__input_field_label"
				>
					{input_field_placeHolder}
				</label>
				<input
					onChange={handleChange}
					ref={input_field}
					className="form_input_section_1__input_field"
					name={name}
					type={type}
					value={formDetails[name]}
					required={required}
				/>
			</div>
			<div ref={error_Message} className="inputSectoin_1__error_message">
				{error_message}
			</div>
		</div>
	);
};

export default InputBox;
