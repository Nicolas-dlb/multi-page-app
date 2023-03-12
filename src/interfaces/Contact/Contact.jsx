import Countries from "components/Countries/Countries";
import React from "react";
import "./Contact.scss";
import Form from "./Form/Form";

function Contact() {
	return (
		<div className="contact">
			<Form />
			<Countries />
		</div>
	);
}

export default Contact;
