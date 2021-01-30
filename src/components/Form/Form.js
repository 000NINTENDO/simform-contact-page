import React, { useState } from "react";
import FormTitle from "./FormTitle";
import InputSection_1 from "./InputSection_1";
import "./Form.css";

const Form = () => {
	const [formDetails, setFormDetails] = useState({
		name: "",
		email: "",
		contactNumber: "",
		company_website: "",
		conmapanys_challange: "",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormDetails({
			...formDetails,
			[name]: value,
		});
		console.log(formDetails);
	};

	return (
		<section className="form">
			<div className="form__background_layer"></div>
			<section className="form__content">
				<FormTitle />
				<section className="form_input_section_1">
					<h4 className="form_input_section_1__title">
						1. Tell us about your company
					</h4>
					<InputSection_1
						handleChange={handleChange}
						formDetails={formDetails}
					/>
				</section>
				<section className="form_input_section_2">
					<h4 className="form_input_section_2__heading form_input_section_1">
						2. What are you looking to work on?
					</h4>
					<div className="form_input_section_2__details_container">
						<textarea className="form_input_section_2__details__input " />
					</div>
				</section>
			</section>
		</section>
	);
};

export default Form;
