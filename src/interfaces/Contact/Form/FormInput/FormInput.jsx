import React from "react";

function FormInput({ register, errors, name, placeholder }) {
	return (
		<div
			className={`form-input-container ${errors?.[name] ? "error" : undefined}`}
		>
			<input
				type={name === "email" ? "email" : "text"}
				name={name}
				placeholder={placeholder}
				autoComplete="new-off"
				spellCheck={false}
				{...register(name, { required: true })}
			/>
		</div>
	);
}

export default FormInput;
