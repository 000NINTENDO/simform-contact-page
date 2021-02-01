import React from "react";
import Calender from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InputSection_4 = ({ date, setDate }) => {
	return (
		<section className="form_input_section_4 ">
			<h4 className="form_input_section_4__heading form_input_section_1__title">
				4. Schedule a call with our tech expert. Get a detailed tech
				consultation for free!
			</h4>
			<div className="form_input_sectoion_4__content_and_calender">
				<div className="form_input_sectoion_4__content_and_calender__content">
					<div className="form_input_sectoion_4__content_and_calender__content__column_1">
						<div className="form_input_sectoion_4__content_and_calender__content__column_1__dot"></div>
						<div className="form_input_sectoion_4__content_and_calender__content__column_1__text">
							<span className="form_input_sectoion_4__content_and_calender__content__column_1__text_minute">
								60
							</span>
							<div className="form_input_sectoion_4__content_and_calender__content__column_1__text_meeting">
								Min <br />
								Meeting
							</div>
						</div>
					</div>
					<div className="form_input_sectoion_4__content_and_calender__content__column_2">
						Select Day
					</div>
				</div>
				<div className="form_input_sectoion_4__content_and_calender__calender">
					<Calender
						value={date}
						onChange={(value) => {
							setDate(value);
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default InputSection_4;
