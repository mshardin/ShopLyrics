import React from "react";

import { Col } from "react-bootstrap";

import Product from "./Product";

class ProductList extends React.Component {
	render() {
		const products = Object.keys(this.props.products).map((key) => {
			const product = this.props.products[key];

			if (product.type === this.props.style) {
				return (
					<Product key={key} product={product} />
				);
			}
		});
		return (
			<Col md={12}>
				{ products }
			</Col>
		)
	}
}

export default ProductList;