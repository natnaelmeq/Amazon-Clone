import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";

function Product({ id, title, price, rating, image }) {
	function truncate(str, n) {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	}
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
				{/* onClick={addToBasket}????? */}
				<button>Add to Cart</button>
			</div>
		</>
	);
}

export default Product;
