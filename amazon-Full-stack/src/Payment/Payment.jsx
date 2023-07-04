import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct from "../CheckOut/CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";

const Payment = () => {
	const [{ basket, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState("");

	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);
	const getQuantity = (basket) => {
		return basket?.reduce((qty, item) => qty + item.quantity, 0);
	};

	useEffect(() => {
		// generate the special stripe secret which allows us to charge a customer
		const getClientSecret = async () => {
			const response = await axios({
				method: "POST",
				// Stripe expects the total in a currencies subunits
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("THE SECRET CODE IS >>>", clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch({
					type: "EMPTY_BASKET",
				});

				navigate("/orders");
			});
	};
	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout{" "}
					<Link to="/checkout">
						({getQuantity(basket)}{" "}
						{getQuantity(basket) === 1 ? "item" : "items"}):{" "}
					</Link>
				</h1>

				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>Ejsingvej </p>
						<p>Søborg,Danmark</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
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
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method:</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<div className="custom-card-element">
								<CardElement
									onChange={handleChange}
									options={{
										style: {
											base: {
												fontSize: "16px",
												color: "#424770",
												"::placeholder": {
													color: "black",
												},
											},
											invalid: {
												color: "#9e2146",
											},
										},
									}}
								/>
							</div>
							{/* <CardElement onChange={handleChange} /> */}
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
