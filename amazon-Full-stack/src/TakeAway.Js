//In React, &nbsp; is not directly used or recognized as an HTML entity like it is in regular HTML. In regular HTML, &nbsp; represents a non-breaking space, which is a special character that prevents line breaks between words or elements.

//In React, you can achieve the same effect by using the {' '} expression inside JSX. The curly braces {} are used to embed JavaScript expressions within JSX. In this case, the expression {' '} represents a single space character.


//The fade, pause, and indicators are props that you can pass to the Carousel component in react-bootstrap to customize its behavior. Here's an explanation of each prop
// {fade:

// Type: Boolean
// Default: false
// Description: When set to true, the slides will transition with a fade effect instead of sliding horizontally.
// pause:

// Type: Boolean or "hover"
// Default: true
// Description: Controls whether the carousel should pause when the mouse cursor is over the carousel. By default, it pauses on mouse hover. If you set it to false, the carousel will not pause on mouse hover. If you set it to "hover", it will pause on mouse hover.
// indicators:

// Type: Boolean
// Default: true
// Description: Determines whether the carousel should display slide indicators (dots or bullets) at the bottom of the component. Setting it to false will hide the indicators.}



/*** 
 * use --force when no lettest verstion
 * npm install react-currency-format --force
 */









// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Home.css";
// import HomeCarousel from "./HomeCarousel";
// import Product from "./Product";
// import Notice from "./Notice";
// function Home() {
// 	const [products, setProducts] = useState([]);

// 	async function fetchProducts() {
// 		try {
// 			const response = await axios.get("../public/data.json");
// 			setProducts(response.data);
// 			console.log(response);
// 		} catch (error) {
// 			console.error("Error fetching products:i can not find", error);
// 		}
// 	}

// 	useEffect(() => {
// 		fetchProducts();
// 	}, []);

// 	console.log(products);

// 	return (
// 		<>
// 			<div className="home">
// 				<div className="home__container">
// 					<HomeCarousel />
// 					<div className="home__row">
// 						<Product
// 							id="12321341"
// 							title="Fnatic React Gaming Headset for Esports with 53mm Drivers, Metal Frame, Precise Stereo Sound, Broadcaster Detachable Microphone, 3.5mm Jack [PC, PS4, PS5, Xbox ONE, Xbox Series X] [Playstation_4]"
// 							price={64.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/61m-qPp1iLL._AC_SX425_.jpg"
// 						/>
// 						<Product
// 							id="49538094"
// 							title="Tablet Android 2023 10 Inch Tablet, 2-In-1 Octa-Core Tablet with 128GB + 1TB Expansion + 4GB, Keyboard, 13+8MP Dual Camera, 5G WIFI, HD Touch Screen Tablet with Stylus, Mouse, Bluetooth, GPS, Case"
// 							price={159.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/71PRmI5eCqL._AC_SX425_.jpg"
// 						/>
// 					</div>
// 					<div className="home__row">
// 						<Product
// 							id="4903850"
// 							title="Fresh Roasted Coffee, Organic Ethiopian Sidamo/FRC Light Roast Blend, Bundle, Whole Bean, 5 Pound Bags"
// 							price={98.01}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/6102ul-1saL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg"
// 						/>
// 						<Product
// 							id="23445930"
// 							title="Espresso Machine & Cappuccino Maker with Milk Steamer- 7 pc All-In-One Barista Bundle Set w/Built-In Milk Frother (Inc: Coffee Bean Grinder, Milk Frothing Cup, Spoon/Tamper & 2 Cups), Silve"
// 							price={219.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/71cKsOKSk+L._AC_SX466_.jpg"
// 						/>
// 						<Product
// 							id="3254354345"
// 							title="New Apple  MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
// 							price={2799.0}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"
// 						/>
// 					</div>
// 					<div className="home__row">
// 						<Product
// 							id="90829331"
// 							title="SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA"
// 							price={1500.78}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/810DQPbeGOL._AC_SX679_.jpg"
// 						/>
// 					</div>
// 					<div className="home__row">
// 						<Product
// 							id="90829332"
// 							title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band"
// 							price={199.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/71qp5fCNp7L._AC_SX425_.jpg"
// 						/>
// 						<Product
// 							id="90829333"
// 							title="New Balance Women's Fresh Foam X 1080 V12 Running Shoe"
// 							price={155.95}
// 							rating={4}
// 							image="https://m.media-amazon.com/images/I/71D+jLWl8NL._AC_UX500_.jpg"
// 						/>

// 						<Product
// 							id="90829334"
// 							title="Nike Men's Sportwear Club Shorts"
// 							price={39.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/71Ew+yRfqWL._AC_UX522_.jpg"
// 						/>
// 						<Product
// 							id="90829335"
// 							title="Panasonic LUMIX S5 Full Frame Mirrorless Camera, 4K 60P Video Recording with S 20-60mm F3.5-5.6 Lens Kit (DC-S5KK) "
// 							price={2295.99}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/81UqXhqEILL._AC_SX425_.jpg"
// 						/>
// 					</div>
// 					<div className="home__row">
// 						<Product
// 							id="12321342"
// 							title="JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages"
// 							price={35.97}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/51YB0gZp+aL._SX404_BO1,204,203,200_.jpg"
// 						/>
// 						<Product
// 							id="49538094"
// 							title="LucMatton Men's 2 Piece Outfit Long Sleeve Gold Print Traditional Tunic Shirt and Pants Set Ethnic Suit"
// 							price={69.25}
// 							rating={5}
// 							image="https://m.media-amazon.com/images/I/712L79vG6nL._AC_SX569._SX._UX._SY._UY_.jpg"
// 						/>
// 					</div>
// 					<br />
// 				</div>
// 				<Notice />
// 			</div>
// 		</>
// 	);
// }

// export default Home;
