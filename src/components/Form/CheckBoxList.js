import React from "react";
import CustomCheckBox from "./CustomCheckBox";
import "./CheckBoxList.css";

const CheckBoxList = () => {
	return (
		<div className="checkbox_list_container">
			<CustomCheckBox
				className="checkbox_list_container__checkbox_card"
				name={"web_apps_development"}
				color={"rgb(242, 219, 203)"}
				label_line_1={"Web or Mobile Apps"}
				label_line_2={"Development"}
			/>
			<CustomCheckBox
				name={"hire_developer"}
				color={"rgb(194, 210, 245)"}
				label_line_1={"Hire Dedicated "}
				label_line_2={"Developers"}
			/>
			<CustomCheckBox
				name={"ai_mi_development"}
				color={"rgb(164, 234, 228)"}
				label_line_1={"AI/ML Development "}
				label_line_2={"Services"}
			/>
			<CustomCheckBox
				name={"custom_software"}
				color={"rgb(249, 218, 155)"}
				label_line_1={"Custom Software "}
				label_line_2={"Development"}
			/>
			<CustomCheckBox
				name={"testing_and_qa"}
				color={"rgb(236, 194, 229)"}
				label_line_1={"Software Testing "}
				label_line_2={"and QA"}
			/>
			<CustomCheckBox
				name={"api_developement"}
				color={"rgb(242, 219, 203)"}
				label_line_1={"API Development & "}
				label_line_2={"Integration"}
			/>
		</div>
	);
};

export default CheckBoxList;
