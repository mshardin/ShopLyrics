import React from "react";
import { Link } from "react-router";

import axios from "axios";

import { Grid, Row, Col, Button } from "react-bootstrap";

import Header from "./Header";

import specials from "../data/specials";

class SpecialDisplay extends React.Component {
	constructor() {
		super();
		const rgConfig = {
			headers: {"Authorization": "Bearer hQcZJlrC0Gf16HMVwNG4YOtDjxWG6qH_Y3-NHQDnew6L8q2KCZog3bO1RITFCQs7"}
		}
	}
	render() {
		const special = specials.find((special) => {
			return special.slug === this.props.params.slug;
		});
		return (
			<div>
				<Header pathname={this.props.location.pathname} />
				<Row>
					<Col md={12}>
						<Col xs={12} sm={12} md={8}>
							<div className="product-image--front--back" style={{padding:"40rem 0"}}>
								<div className="product-image--front">
									<img src={special.image} alt={special.name} className="img-responsive center-block" />
								</div>
								<br /><br /><br /><br /><br /><br />
								<div className="product-image--back">
									<img src={special.image} alt={special.name} className="img-responsive center-block" />
								</div>
							</div>
						</Col>
						<Col xs={12} sm={12} md={4}>
							<div className="product-description">
								<h2>{ special.name }</h2>
								<h3>{ special.artist }</h3>
								<h4 style={{ fontFamily: "ProximaNova-Light" }}>${ special.price }</h4>
								<p>{ special.description }</p>
								<Link 
									to="#"
									className="snipcart-add-item"
									data-item-id={special.id}
									data-item-price={special.price}
									data-item-image={special.image}
									data-item-name={special.name}
									data-item-description={special.name}
									data-item-url={special.url}
									data-item-custom1-options="Small|Medium|Large|XLarge|2XLarge|3XLarge"
									data-item-custom1-value="Medium"
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
		)
	}
}

export default SpecialDisplay;