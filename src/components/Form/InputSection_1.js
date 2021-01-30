import React, { useRef, useEffect } from "react";
import "./InputSection_1.css";

const InputBox = (handleChange, formDetails) => {
	const input_name = useRef();
	const input_email = useRef();
	const input_contactNumber = useRef();
	const input_company_website = useRef();
	const input_conmapanys_challange = useRef();
	const input_label_name = useRef();
	const input_label_email = useRef();
	const input_label_contactNumber = useRef();
	const input_label_website = useRef();
	const input_label_conmapanys_challange = useRef();
	const {
		name,
		email,
		contactNumber,
		company_website,
		conmapanys_challange,
	} = formDetails;

	useEffect(() => {
		const translateLabel = () => {
			if (input_label_name.current.style.transform === "") {
				input_label_name.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label_name.current.style.color = "#000";
				input_label_name.current.style.background = "#ecfbff";
				input_name.current.style.borderColor = "#6dd8ff";
			} else if (input_name.current.value === "") {
				input_label_name.current.style.transform = "";
				input_name.current.style.borderColor = "";
				input_label_name.current.style.color = "";
				input_label_name.current.style.background = "";
			}
		};
		input_name.current.addEventListener("focus", translateLabel);
		input_name.current.addEventListener("blur", translateLabel);
	});

	useEffect(() => {
		const translateLabel = () => {
			if (input_label_email.current.style.transform === "") {
				input_label_email.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label_email.current.style.color = "#000";
				input_label_email.current.style.background = "#ecfbff";
				input_email.current.style.borderColor = "#6dd8ff";
			} else if (input_email.current.value === "") {
				input_label_email.current.style.transform = "";
				input_email.current.style.borderColor = "";
				input_label_email.current.style.color = "";
				input_label_email.current.style.background = "";
			}
		};
		input_email.current.addEventListener("focus", translateLabel);
		input_email.current.addEventListener("blur", translateLabel);
	});

	useEffect(() => {
		const translateLabel = () => {
			if (input_label_contactNumber.current.style.transform === "") {
				input_label_contactNumber.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label_contactNumber.current.style.color = "#000";
				input_label_contactNumber.current.style.background = "#ecfbff";
				input_contactNumber.current.style.borderColor = "#6dd8ff";
			} else if (input_contactNumber.current.value === "") {
				input_label_contactNumber.current.style.transform = "";
				input_contactNumber.current.style.borderColor = "";
				input_label_contactNumber.current.style.color = "";
				input_label_contactNumber.current.style.background = "";
			}
		};
		input_contactNumber.current.addEventListener("focus", translateLabel);
		input_contactNumber.current.addEventListener("blur", translateLabel);
	});

	useEffect(() => {
		const translateLabel = () => {
			if (input_label_website.current.style.transform === "") {
				input_label_website.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label_website.current.style.color = "#000";
				input_label_website.current.style.background = "#ecfbff";
				input_company_website.current.style.borderColor = "#6dd8ff";
			} else if (input_company_website.current.value === "") {
				input_label_website.current.style.transform = "";
				input_company_website.current.style.borderColor = "";
				input_label_website.current.style.color = "";
				input_label_website.current.style.background = "";
			}
		};
		input_company_website.current.addEventListener("focus", translateLabel);
		input_company_website.current.addEventListener("blur", translateLabel);
	});

	useEffect(() => {
		const translateLabel = () => {
			if (input_label_conmapanys_challange.current.style.transform === "") {
				input_label_conmapanys_challange.current.style.transform =
					"translate(-15px, -26px) scale(0.8)";
				input_label_conmapanys_challange.current.style.color = "#000";
				input_label_conmapanys_challange.current.style.background = "#ecfbff";
				input_conmapanys_challange.current.style.borderColor = "#6dd8ff";
			} else if (input_conmapanys_challange.current.value === "") {
				input_label_conmapanys_challange.current.style.transform = "";
				input_conmapanys_challange.current.style.borderColor = "";
				input_label_conmapanys_challange.current.style.color = "";
				input_label_conmapanys_challange.current.style.background = "";
			}
		};
		input_conmapanys_challange.current.addEventListener(
			"focus",
			translateLabel
		);
		input_conmapanys_challange.current.addEventListener("blur", translateLabel);
	});

	return (
		<div>
			<div className="form_input_section_1">
				<div className="form__content__input_container">
					<label
						ref={input_label_name}
						htmlFor="name"
						className="form_input_section_1__input_name_label"
					>
						Your Name*
					</label>
					<input
						onChange={handleChange()}
						ref={input_name}
						className="form_input_section_1__input_name__input"
						name="name"
						type="text"
						value={name}
						required
					/>
				</div>

				<div className="form__content__email_phone_number">
					<div className="form__content__input_container">
						<label
							ref={input_label_email}
							htmlFor="email"
							className="form_input_section_1__input_name_label"
						>
							Your Email*
						</label>
						<input
							ref={input_email}
							className="form_input_section_1__input_name__input"
							name="email"
							type="email"
							value={email}
							required
						/>
					</div>

					<div className="form__content__input_container">
						<label
							ref={input_label_contactNumber}
							htmlFor="contactNumber"
							className="form_input_section_1__input_name_label"
						>
							Your Phone Number
						</label>
						<input
							ref={input_contactNumber}
							className="form_input_section_1__input_name__input"
							name="contactNumber"
							type="tel"
							value={contactNumber}
							required
						/>
					</div>
				</div>
				<div className="form__content__input_container">
					<label
						ref={input_label_website}
						htmlFor="company_website"
						className="form_input_section_1__input_name_label"
					>
						Company Website
					</label>
					<input
						ref={input_company_website}
						className="form_input_section_1__input_name__input"
						name="company_website"
						type="url"
						value={company_website}
					/>
				</div>
				<div className="form__content__input_container">
					<label
						ref={input_label_conmapanys_challange}
						htmlFor="conmapanys_challange"
						className="form_input_section_1__input_name_label"
					>
						What’s your company’s biggest challenge today?
					</label>
					<input
						ref={input_conmapanys_challange}
						className="form_input_section_1__input_name__input"
						name="conmapanys_challange"
						type="text"
						value={conmapanys_challange}
						required
					/>
				</div>
			</div>
		</div>
	);
};

export default InputBox;
