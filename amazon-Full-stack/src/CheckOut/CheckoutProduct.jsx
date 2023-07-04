import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import StarIcon from "@mui/icons-material/Star";
// import Product from "../Product/Product";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	image,
	quantity,
	hideButton,
}) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
		// console.log(item)
	};

	const DeleteItem = () => {
		dispatch({
			type: "DELETE",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
				quantity: 1,
			},
		});
		// console.log(item)
	};
	// const removeFromBasket = () => {
	// 	dispatch({
	// 		type: "REMOVE_FROM_BASKET",
	// 		id: id,
	// 	});
	// };
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} alt="product-img" />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{truncate(title, 100)}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<small>
								<StarIcon />
							</small>
						))}
				</div>
				{!hideButton && (<p>Qty= {quantity}</p>)}
				<br />

				{!hideButton && (
					<button onClick={addToBasket}>
						{" "}
						<strong>+</strong>
					</button>
				)}
				{!hideButton && (
					<button onClick={DeleteItem}>
						<strong>-</strong>
					</button>
				)}
				{/* {!hideButton && <button onClick={removeFromBasket}>Remove </button>} */}
				<br />
				<div className="underline"></div>
			</div>
		</div>
	);
}

export default CheckoutProduct;
