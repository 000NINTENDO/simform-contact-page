import React, { useRef, useEffect, useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
	const [file, setFile] = useState();
	const file_input = useRef();
	const dropzone = useRef();
	const upload_button = useRef();
	const file_name = useRef();
	const remove_file = useRef();
	const input_label = useRef();

	// console.log(file_input.current.files);

	useEffect(() => {
		upload_button.current.addEventListener("click", (event) => {
			event.stopPropagation();
			file_input.current.click();
		});

		dropzone.current.addEventListener("dragenter", (event) => {
			event.preventDefault();
			dropzone.current.style.border = "1px solid rgb(109, 216, 255, 0.8)";
		});

		dropzone.current.addEventListener("dragleave", (event) => {
			event.preventDefault();
			dropzone.current.style.border = "";
		});

		dropzone.current.addEventListener("dragover", (event) => {
			event.preventDefault();
		});

		dropzone.current.addEventListener("drop", (event) => {
			event.preventDefault();
			const file = event.dataTransfer.files[0];
			console.log(event.dataTransfer.files[0]);
			setFile(file);
			input_label.current.style.height = "0";
			file_name.current.style.height = "auto";
			file_name.current.style.opacity = "1";
			remove_file.current.style.opacity = "1";
		});

		file_input.current.addEventListener("change", (event) => {
			event.preventDefault();
			if (file_input.current.files[0]) {
				const file = file_input.current.files[0];
				console.log(file_input.current.value);
				setFile(file);
				input_label.current.style.height = "0";
				file_name.current.style.height = "auto";
				file_name.current.style.opacity = "1";
				remove_file.current.style.opacity = "1";
			}
		});

		const removeFile = () => {
			input_label.current.style.height = "auto";
			file_name.current.style.height = "0";
			file_name.current.style.opacity = "0";
			remove_file.current.style.opacity = "0";
			// file_input.current.files[0] = undefined;
		};
		remove_file.current.addEventListener("click", removeFile);
	});

	console.log("file", file);

	return (
		<div ref={dropzone} className="fileupload">
			<div className="fileupload__uploadzone">
				<label
					ref={input_label}
					className="fileupload__uploadzone__file_input_label form_input_section_1__input_field_label"
					htmlFor="file"
				>
					Drag or browse your project brief
				</label>
				<input
					className="fileupload__uploadzone__file_input_field"
					ref={file_input}
					type="file"
				/>
				<div className="fileupload__uploadzone__logo_file_name">
					<div>
						<img
							src="https://www.simform.com/static/icon-download.svg"
							className="fileupload__uploadzone__logo"
						/>
					</div>
					<div
						ref={file_name}
						className="fileupload__uploadzone__file_name form_input_section_1__input_field_label"
					>
						{file && `${file.name}`}
					</div>
				</div>
				<div className="fileupload__uploadzone__upload_button__container">
					<span
						ref={remove_file}
						className="fileupload__uploadzone__cancel_button"
					>
						<span className="fileupload__uploadzone__cancel_button_line_1"></span>
						<span className="fileupload__uploadzone__cancel_button_line_2"></span>
					</span>
					<button
						ref={upload_button}
						className="fileupload__uploadzone__upload_button"
					>
						UPLOAD
					</button>
				</div>
			</div>
		</div>
	);
};

export default FileUpload;
