import React from "react";
import { Link } from "react-router";

import { Row, Col } from "react-bootstrap";

class Product extends React.Component {
	render() {
		const { product } = this.props;
		return (
			<Col md={3} style={{ margin: "25px 0" }}> 
				<div className="product">
					<Row>
	    				<Link to={`/product/${product.slug}`}>
	    					<img src={product.image} alt={product.name} className="img-responsive center-block" style={{ width: "100%", maxWidth: "200px"}} />
	    				</Link>
    				
    					<h4 className="text-center">{product.name}</h4>
    					<h4 className="text-center" style={{ opacity: "0.5" }}>{product.artist}</h4>
    					<h5 className="text-center">${product.price}</h5>
    				</Row>
    			</div>
    		</Col>
		);
	}
}

export default Product;