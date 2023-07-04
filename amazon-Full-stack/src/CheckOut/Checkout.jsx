import React, { useState } from "react";
import "./Checkout.css";
import Subtotal from "../SubTotal/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import SubTotalUnderCart from "../SubTotal/SubTotalUnderCart";
import Product from "../Product/Product";

function Checkout() {
	const [{ basket }, dispatch] = useStateValue();
	console.log(basket);
	//   basket.forEach((item) => {
	// 		if (item.quantity !== undefined) {
	// 			console.log(
	// 				`The quantity of product with ID ${item.id} is ${item.quantity}`
	// 			);
	// 		} else {
	// 			console.log(`Product with ID ${item.id} not found in the basket.`);
	// 		}
	// 	});

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt="checkout banner"
				/>
				<div>
					<h3>Hello </h3>
					<h2 className="checkout__title">Shopping Cart</h2>
					{basket.map((item) => (
						<CheckoutProduct
							key={item.id}
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
							quantity={item.quantity}
						/>
					))}
				</div>

				<div className="subTotal_checkOut">
					<br />
					<h2>
						<SubTotalUnderCart />
					</h2>
				</div>
			</div>
			<div className="checkout__right">
				<Subtotal/>
			</div>
		</div>
	);
}

export default Checkout;
