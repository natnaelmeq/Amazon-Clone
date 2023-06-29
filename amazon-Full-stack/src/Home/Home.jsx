
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import Product from "../Product/Product";
import Notice from "../Footer/Notice/";

function Home() {
	const [products, setProducts] = useState([]);

	async function fetchProducts() {
		try {
			const response = await axios.get("./data.json");
			setProducts(response.data);
			console.log(response);
		} catch (error) {
			console.error("Error fetching products:", error);
		}
	}
	

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			<div className="home">
				<div className="home__container">
					<HomeCarousel />
					<div className="home__row">
						{products.slice(0, 2).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(2,5).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(5,6).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(6,10).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<div className="home__row">
						{products.slice(10,12).map((product) => (
							<Product
								key={product.id}
								id={product.id}
								title={product.title}
								price={product.price}
								rating={product.rating}
								image={product.image}
							/>
						))}
					</div>
					<br />
				</div>
				<Notice />
			</div>
		</>
	);
}

export default Home;