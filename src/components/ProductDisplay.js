import React from "react";
import { Link } from "react-router";

import axios from "axios";

import { Grid, Row, Col, Button } from "react-bootstrap";

import Header from "./Header";
import Tshirt from "./Tshirt";
import Crewneck from "./Crewneck";
import Cap from "./Cap";

import products from "../data/products";

class ProductDisplay extends React.Component {
	constructor() {
		super();
		const rgConfig = {
			headers: {"Authorization": "Bearer hQcZJlrC0Gf16HMVwNG4YOtDjxWG6qH_Y3-NHQDnew6L8q2KCZog3bO1RITFCQs7"}
		}
	}
	render() {
		const product = products.find((product) => {
			return product.slug === this.props.params.slug;
		});

		if (product.type === "shirt") {
			return (
				<Tshirt product={product} pathname={this.props.location.pathname} />
			);
		} else if (product.type === "crewneck") {
			return ( 
				<Crewneck product={product} pathname={this.props.location.pathname} />
			);
		} else {
			return (
				<Cap product={product} pathname={this.props.location.pathname} />
			);
		}
	}
}

export default ProductDisplay;