import React from "react";
import "./Form.css";

function Form({ onChange, onClick }) {
	return (
		<div data-testid="form" className="form">
			<input
				id="input"
				aria-label="input"
				data-testid="input"
				onChange={(event) => onChange(event.target.value)}
				type="text"
				tabIndex={0}
				onKeyPress={(key) => {
					if (key.key === "Enter") {
						onClick();
						document.getElementById("input").value = "";
					}
				}}
			/>
			<button
				type="button"
				onClick={() => {
					onClick();
					document.getElementById("input").value = "";
				}}
			>
				Add
			</button>
		</div>
	);
}

export default Form;
