import React, { useState, useRef, useEffect } from "react";
import FormTitle from "./FormTitle";
import InputSection_1 from "./InputSection_1";
import RangeSlider from "./RangeSlider";
import CheckBoxList from "./CheckBoxList";
import "./Form.css";

const Form = () => {
	const [formDetails, setFormDetails] = useState({
		name: "",
		email: "",
		contactNumber: "",
		company_website: "",
		conmapanys_challange: "",
		project_description: "",
	});
	const [budget, setBudget] = useState([100000, 300000]);
	const [invalid, setInvalid] = useState(false);
	const project_details_field = useRef();
	const project_details_label = useRef();
	const project_details_error_message = useRef();

	console.log(budget);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setFormDetails({
			...formDetails,
			[name]: value,
		});
		console.log(formDetails);
	};

	useEffect(() => {
		const translateLabel = () => {
			if (project_details_label.current.style.transform === "") {
				project_details_label.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				project_details_label.current.style.color = "#000";
				project_details_label.current.style.background = "#ecfbff";
				project_details_field.current.style.borderColor = "#6dd8ff";
			}
		};
		const replaceLabel = () => {
			if (project_details_field.current.value === "") {
				project_details_label.current.style.transform = "";
				project_details_field.current.style.borderColor = "";
				project_details_label.current.style.color = "";
				project_details_label.current.style.background = "";
			}
		};
		project_details_field.current.addEventListener("focus", translateLabel);
		project_details_field.current.addEventListener("blur", replaceLabel);
	});

	useEffect(() => {
		if (invalid) {
			project_details_error_message.current.style.height = "auto";
			project_details_field.current.style.borderColor = "#ef5366";
			project_details_error_message.current.style.opacity = "1";
		} else {
			project_details_error_message.current.style.height = "0";
			project_details_field.current.style.borderColor = "";
			project_details_error_message.current.style.opacity = "0";
		}
	});

	return (
		<section className="form">
			<div className="form__background_layer"></div>
			<section className="form__content">
				<FormTitle />
				<section className="form_input_section_1">
					<h4 className="form_input_section_1__title">
						1. Tell us about your company
					</h4>
					<section className="form_input_section_1__input_fields">
						<InputSection_1
							handleChange={handleChange}
							name={"name"}
							type={"text"}
							required={true}
							invalid={invalid}
							error_message={"Name is required"}
							input_field_placeHolder={"Your Name*"}
							formDetails={formDetails}
						/>
						<div className="form_input_section_1__input_fields__email_phone_number">
							<InputSection_1
								handleChange={handleChange}
								name={"email"}
								type={"email"}
								required={true}
								invalid={invalid}
								error_message={"Please enter a valid email address"}
								input_field_placeHolder={"Your Email*"}
								formDetails={formDetails}
							/>
							<InputSection_1
								handleChange={handleChange}
								name={"contactNumber"}
								type={"tel"}
								required={false}
								input_field_placeHolder={"Your Phone Number"}
								formDetails={formDetails}
							/>
						</div>
						<InputSection_1
							handleChange={handleChange}
							name={"company_website"}
							type={"url"}
							required={false}
							input_field_placeHolder={"Company Website"}
							formDetails={formDetails}
						/>
						<InputSection_1
							handleChange={handleChange}
							name={"conmapanys_challange"}
							type={"text"}
							required={false}
							input_field_placeHolder={
								"What’s your company’s biggest challenge today?"
							}
							formDetails={formDetails}
						/>
					</section>
				</section>
				<section className="form_input_section_2">
					<h4 className="form_input_section_2__heading form_input_section_1">
						2. What are you looking to work on?
					</h4>
					<div className="form_input_section_2__details_container">
						<section className="form_input_section_2__details_container__project_details">
							<label
								ref={project_details_label}
								className="form_input_section_2__details_container__project_details__input_label form_input_section_1__input_field_label"
								htmlFor="project_description"
							>
								Describe your project briefly *
							</label>
							<textarea
								onChange={handleChange}
								ref={project_details_field}
								className="form_input_section_2__details_container__project_details__input_field "
								name="project_description"
							/>
							<div
								ref={project_details_error_message}
								className="inputSectoin_1__error_message"
							>
								Project description is required
							</div>
						</section>
						<section className="form_input_section_2__details_container__range_picker">
							<div className="form_input_section_2__details_container__range_picker__title form_input_section_1__input_field_label">
								What’s your budget?
							</div>
							<div className="form_input_section_2__details_container__range_picker__range_field">
								<RangeSlider budget={budget} setBudget={setBudget} />
							</div>
						</section>
						<section className="form_input_sectoion_4">
							<div className="form_input_sectoion_4__checkbox_list">
								<CheckBoxList />
							</div>
						</section>
					</div>
				</section>
			</section>
		</section>
	);
};

export default Form;
