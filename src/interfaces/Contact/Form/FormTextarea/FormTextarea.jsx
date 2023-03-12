import React from "react";

function FormTextarea({ errors, name, register, ...props }) {
	return (
		<div
			className={`form-input-container ${errors?.[name] ? "error" : undefined}`}
		>
			<textarea
				type={name === "email" ? "email" : "text"}
				name={name}
				autoComplete="new-off"
				spellCheck={false}
				{...register(name, { required: true })}
				{...props}
			/>
		</div>
	);
}

export default FormTextarea;
