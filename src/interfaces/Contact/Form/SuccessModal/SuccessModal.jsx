import React, { useEffect, useRef } from "react";
import "./SuccessModal.scss";
import disableScroll from "disable-scroll";
import { useClickOutside } from "utils/hooks/useClickOutside";

function SuccessModal({ reset }) {
	const modal = useRef(null);
	useClickOutside(modal, () => reset());

	useEffect(() => {
		disableScroll.on();

		return () => disableScroll.off();
	}, []);

	return (
		<div className="success-modal-wrapper">
			<div ref={modal} className="success-modal">
				<p>Thanks. Your message was successfully sent !</p>
				<button
					onClick={() => reset()}
					type="button"
					className="btn btn-return"
				>
					Return
				</button>
			</div>
		</div>
	);
}

export default SuccessModal;
