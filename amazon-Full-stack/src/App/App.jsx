import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../CheckOut/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "../LogIN/LogIn";
import { useStateValue } from "../StateProvider";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import Product from "../Product/Product";


function App() {
	const [{ basket }, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);
	return (
		<Router>
			<div className="App">
				<Header />
			
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<LogIn />} />
				</Routes>

				<Footer />
			</div>
		</Router>
	);
}

export default App;
