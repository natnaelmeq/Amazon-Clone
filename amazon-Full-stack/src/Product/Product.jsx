import React,{useState} from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, rating, image }) {
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
	const [{ basket }, dispatch] = useStateValue();
	// console.log('this what i want to buy',basket)
	

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

	return (
		<>
			<div className="product" key={id}>
				<div className="product__info">
					<p>{truncate(title, 100)}</p>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="product__rating">
						{Array(rating)
							.fill()
							.map(() => (
								<small className="star">
									<StarIcon />
								</small>
							))}
					</div>
				</div>
				<img src={image} alt="" />

				<button onClick={addToBasket}>Add to Cart</button>
			</div>
		</>
	);
}

export default Product;
