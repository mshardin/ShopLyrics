import React from "react";
import { Link } from "react-router";

import { Row, Col, Button } from "react-bootstrap";

import Header from "./Header";

class Crewneck extends React.Component {
	render() {
		const { product, pathname } = this.props;
		return (
			<div>
				<Header pathname={pathname} />
				<Row>
					<Col md={12}>
						<Col xs={12} sm={12} md={8}>
							<div className="product-image--front--back" style={{padding:"40rem 0"}}>
								<div className="product-image--front">
									<img src={product.image} alt={product.name} className="img-responsive center-block" />
								</div>
								<br /><br /><br /><br /><br /><br />
								<div className="product-image--back">
									<img src={product.image} alt={product.name} className="img-responsive center-block" />
								</div>
							</div>
						</Col>
						<Col xs={12} sm={12} md={4}>
							<div className="product-description">
								<h2>{ product.name }</h2>
								<h3>{ product.artist }</h3>
								<h4 style={{ fontFamily: "ProximaNova-Light" }}>${ product.price }</h4>
								<p>{ product.description }</p>
								<Link 
									to="#"
									className="snipcart-add-item"
									data-item-id={product.id}
									data-item-price={product.price}
									data-item-image={product.image}
									data-item-name={product.name}
									data-item-description={product.name}
									data-item-url={product.url}
									data-item-custom1-options="Small|Medium|Large|XLarge|2XLarge[+2.00]|3XLarge[+2.00]"
									data-item-custom1-value="Medium"
									data-item-custom2-options="Black|Red|White|Blue|Orange"
									data-item-custom2-value="Black"
									style={{
										position: "absolute",
										bottom: "25px",
										display: "block",
										width: "100%",
										padding: "0 25px"
									}}
								>
									<Button bsStyle="default" bsSize="large" block className="yButton">Buy</Button>
								</Link>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Crewneck;