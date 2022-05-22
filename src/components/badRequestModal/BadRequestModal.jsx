import React, { useEffect } from "react";
import "./BadRequestModal.css";

function BadRequestModal({ badRequest, setBadRequest }) {
	useEffect(() => {
		const badRequestTimer = setTimeout(() => setBadRequest(false), 4000);
		return () => clearTimeout(badRequestTimer);
	}, [badRequest, setBadRequest]);

	return (
		<div
			tabIndex={-1}
			onClick={() => setBadRequest(false)}
			onKeyPress={(key) => key.key === "Enter" && setBadRequest(false)}
			role="button"
			className="badRequestModal"
		>
			<div className="modal">
				<p>
					On accepte que les liens Vimeo et Flickr. Désolé c&apos;est les
					consignes 😅
				</p>
			</div>
		</div>
	);
}

export default BadRequestModal;
