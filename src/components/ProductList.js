import React from "react";

import { Col } from "react-bootstrap";

import Product from "./Product";

class ProductList extends React.Component {
	render() {
		const products = Object.keys(this.props.products).map((key) => {
			const product = this.props.products[key];

			return (
				<Product key={key} product={product} style={{ margin: "25px 0" }} />
			);
		})	
		return (
			<Col md={12}>
				{ products }
			</Col>
		)
	}
}

export default ProductList;