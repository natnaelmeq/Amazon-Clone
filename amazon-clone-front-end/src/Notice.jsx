import React from "react";
import "./Notice.css";

function Notice() {
	return (
		<div className="notice">
			<div className="notice__brdr">
				<div className="notice__recommend">
					<p>See personalized recommendations</p>
				</div>
				{/* to={!user && "/Login"}???? */}
				<div>
					<div className="notice__button">
						<button>Sign in</button>
					</div>
				</div>
				<div className="notice__newCustomer">
				
					<p className="newCustomer">
						New customer? &nbsp;
						<span to={"/Login"} className="header__clearlink">
							start here.
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Notice;
