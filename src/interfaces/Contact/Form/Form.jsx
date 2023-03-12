import { useForm } from "react-hook-form";
import "./Form.scss";
import FormInput from "./FormInput/FormInput";
import FormTextarea from "./FormTextarea/FormTextarea";
import SuccessModal from "./SuccessModal/SuccessModal";

function Form() {
	const { register, handleSubmit, formState, reset } = useForm();
	const { errors, isSubmitSuccessful } = formState;

	const onSubmit = (data) => {
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<div className="form-header">
				<h2 className="form-title">Contact us</h2>
				<p className="form-description">
					Ready to take it to the next level? Let's talk about your project or
					idea and find out how we can help your business grow. If you are
					looking for unique digital experiences that's relatable to your users,
					drop us a line.
				</p>
			</div>

			<div className="form-inputs">
				<FormInput
					register={register}
					errors={errors}
					name="name"
					placeholder="Name"
				/>
				<FormInput
					register={register}
					errors={errors}
					name="email"
					placeholder="Email address"
				/>
				<FormInput
					register={register}
					errors={errors}
					name="phone"
					placeholder="Phone"
				/>
				<FormTextarea
					register={register}
					errors={errors}
					name="message"
					placeholder="Your message"
				/>

				<button className="btn btn-submit" type="submit">
					submit
				</button>
			</div>
			{isSubmitSuccessful && <SuccessModal reset={reset} />}
		</form>
	);
}

export default Form;
