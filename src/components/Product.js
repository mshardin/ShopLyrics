import React from "react";
import { Link } from "react-router";

import { Col } from "react-bootstrap";

class Product extends React.Component {
	render() {
		const { product } = this.props;
		return (
			<Col md={3} style={{ margin: "25px 0" }}> 
				<div className="product">
    				<Link to={`/product/${product.slug}`}>
    					<img src={product.image} alt={product.name} className="img-responsive center-block" style={{ width: "200px"}} />
    				</Link>
    				<h4 className="text-center">{product.name}</h4>
    				<h5 className="text-center">${product.price}</h5>
    			</div>
    		</Col>
		);
	}
}

export default Product;