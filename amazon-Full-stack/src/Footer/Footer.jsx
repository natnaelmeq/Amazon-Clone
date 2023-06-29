import React from "react";
import "./Footer.css";
import LanguageIcon from "@mui/icons-material/Language";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import usFlag from "../assets/images/us-flag.jpg";

// import { Link } from "react-router-dom";
function Footer() {
     const footerData = [
				{
					title: "Get to Know Us",
					items: [
						{ text: "Careers", href: "#" },
						{ text: "Blog", href: "#" },
						{ text: "About Amazon", href: "#" },
						{ text: "Investor Relations", href: "#" },
						{ text: "Amazon Devices", href: "#" },
						{ text: "Amazon Science", href: "#" },
					],
				},
				{
					title: "Make Money with Us",
					items: [
						{ text: "Sell products on Amazon", href: "#" },
						{ text: "Sell on Amazon Business", href: "#" },
						{ text: "Sell apps on Amazon", href: "#" },
						{ text: "Become an Affiliate", href: "#" },
						{ text: "Advertise Your Products", href: "#" },
						{ text: "Self-Publish with Us", href: "#" },
						{ text: "Host an Amazon Hub", href: "#" },
						{ text: "See More Make Money with Us", href: "#" },
					],
				},
				{
					title: "Amazon Payment Products",
					items: [
						{ text: "Amazon Business Card", href: "#" },
						{ text: "Shop with Points", href: "#" },
						{ text: "Reload Your Balance", href: "#" },
						{ text: "Amazon Currency Converter", href: "#" },
					],
				},
				{
					title: "Let Us Help You",
					items: [
						{ text: "Amazon and COVID-19", href: "#" },
						{ text: "Your Account", href: "#" },
						{ text: "Your Orders", href: "#" },
						{ text: "Shipping Rates & Policies", href: "#" },
						{ text: "Amazon Prime", href: "#" },
						{ text: "Returns & Replacements", href: "#" },
						{ text: "Manage Your Content and Devices", href: "#" },
						{ text: "Amazon Assistant", href: "#" },
						{ text: "Help", href: "#" },
					],
				},
			];
	return (
		<div className="foot">
			<div className="backToTop" id="back">
				<span>
					<a href="#" className="header__clearlink">
						Back to top
					</a>
				</span>
			</div>
			<div className="footer ">
				{footerData.map((section, index) => (
					<ul key={index} className="">
						<h3>{section.title}</h3>
						{section.items.map((item, itemIndex) => (
							<li key={itemIndex}>
								<a href={item.href}>{item.text}</a>
							</li>
						))}
					</ul>
				))}
			</div>
			<div className="footer_logos_container">
				<div className="footer_logos_wrapper">
					<div className="header__clearlink">
						<div className="footer__logo">
							<img
								src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon-logo"
							/>
						</div>
					</div>
					<div className="ftr_wrapper_right">
						<div className="language ftr_wrapper_right_brdr">
							<LanguageIcon fontSize="small" /> &nbsp;&nbsp;<span>English</span>
							<UnfoldMoreIcon fontSize="small" />
						</div>
						<div className="us_dollar ftr_wrapper_right_brdr">
							<p>
								$ &nbsp;&nbsp;<span>USD-U.S.Dollar</span>
							</p>
						</div>
						<div className="us ftr_wrapper_right_brdr">
							<img src={usFlag} alt="us-flage" /> <span>United States</span>
						</div>
					</div>
				</div>
			</div>
			<div className="footer__credit">
				<h4>
					Built by:-
					<a href="https://natnael.dk/" target="_blank" rel="noreferrer">
						{" "}
						(Natnael M. Gashaw)
					</a>
				</h4>
			</div>
		</div>
	);
}

export default Footer;
