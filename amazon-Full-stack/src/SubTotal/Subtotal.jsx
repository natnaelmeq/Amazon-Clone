import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";


function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();
	 const navigate = useNavigate();
	// console.log(basket);
	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);
	const getQuantity = (basket) => {
		return basket?.reduce((qty, item) => qty + item.quantity, 0);
	};
	

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({getQuantity(basket)}{" "}
							{getQuantity(basket) === 1 ? "item" : "items"}):{" "}
							<strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate('/payment')}> Proceed to Checkout</button>
		
		</div>
	);
}

export default Subtotal;
