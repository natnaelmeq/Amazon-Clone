import React from "react";
import "./Home.css";
import HomeCarousel from "./HomeCarousel";
import Product from "./Product";
import Notice from "./Notice";
function Home() {
	return (
		<>
			<div className="home  container-fluid">
				<div className="home__container">
					<HomeCarousel />
					<div className="home__row">
						<Product
							id="12321341"
							title="Fnatic React Gaming Headset for Esports with 53mm Drivers, Metal Frame, Precise Stereo Sound, Broadcaster Detachable Microphone, 3.5mm Jack [PC, PS4, PS5, Xbox ONE, Xbox Series X] [Playstation_4]"
							price={64.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/61m-qPp1iLL._AC_SX425_.jpg"
						/>
						<Product
							id="49538094"
							title="Tablet Android 2023 10 Inch Tablet, 2-In-1 Octa-Core Tablet with 128GB + 1TB Expansion + 4GB, Keyboard, 13+8MP Dual Camera, 5G WIFI, HD Touch Screen Tablet with Stylus, Mouse, Bluetooth, GPS, Case"
							price={159.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71PRmI5eCqL._AC_SX425_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="4903850"
							title="Vigosit Gaming Chair- Gaming Chair with Footrest, Mesh Gaming Chair for Heavy People, Ergonomic Reclining Gamer"
							price={159.91}
							rating={4}
							image="https://m.media-amazon.com/images/I/81+o-GdDeSL._AC_SX466_.jpg"
						/>
						<Product
							id="23445930"
							title="Espresso Machine & Cappuccino Maker with Milk Steamer- 7 pc All-In-One Barista Bundle Set w/Built-In Milk Frother (Inc: Coffee Bean Grinder, Milk Frothing Cup, Spoon/Tamper & 2 Cups), Silve"
							price={219.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71cKsOKSk+L._AC_SX466_.jpg"
						/>
						<Product
							id="3254354345"
							title="New Apple  MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver"
							price={2799.0}
							rating={5}
							image="https://m.media-amazon.com/images/I/81p5n9MO4QL._AC_SL1500_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="90829332"
							title="SAMSUNG 49 inch Gaming Monitor, Ultrawide Curved Monitor, 240hz 1ms, Quantum Mini LED, G-Sync, Monitor Adjustable Height, HDR 2000, Odyssey Neo G9, G95NA"
							price={1500.78}
							rating={5}
							image="https://m.media-amazon.com/images/I/810DQPbeGOL._AC_SX679_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="90829332"
							title="Apple Watch Series 5 (GPS, 44MM) - Space Gray Aluminum Case with Black Sport Band"
							price={199.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71qp5fCNp7L._AC_SX425_.jpg"
						/>
						<Product
							id="90829332"
							title="New Balance Women's Fresh Foam X 1080 V12 Running Shoe"
							price={155.95}
							rating={4}
							image="https://m.media-amazon.com/images/I/71D+jLWl8NL._AC_UX500_.jpg"
						/>

						<Product
							id="90829332"
							title="Nike Men's Sportwear Club Shorts"
							price={39.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/71Ew+yRfqWL._AC_UX522_.jpg"
						/>
						<Product
							id="90829333"
							title="Panasonic LUMIX S5 Full Frame Mirrorless Camera, 4K 60P Video Recording with S 20-60mm F3.5-5.6 Lens Kit (DC-S5KK) "
							price={2295.99}
							rating={5}
							image="https://m.media-amazon.com/images/I/81UqXhqEILL._AC_SX425_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="12321341"
							title="JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages"
							price={35.97}
							rating={5}
							image="https://m.media-amazon.com/images/I/51YB0gZp+aL._SX404_BO1,204,203,200_.jpg"
						/>
						<Product
							id="49538094"
							title="LimoStudio, 700W Output Lighting Series, LMS103, Soft Continuous Lighting Kit for White and Black Umbrella Reflector with Accessory and Carry Bag"
							price={39.25}
							rating={4}
							image="https://m.media-amazon.com/images/I/71JnCRvsr2L._AC_SX522_.jpg"
						/>
					</div>
					<br />
				</div>
				<Notice />
			</div>
		</>
	);
}

export default Home;
