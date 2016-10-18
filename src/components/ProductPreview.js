require("normalize.css/normalize.css");
require("styles/App.css");

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import React from "react";
import { Link } from "react-router";
import { Nav, NavItem, Grid, Row, Col, Button } from "react-bootstrap";

class ProductPreview extends React.Component {
	constructor() {
		super();
		this.state = {
			shirtHoverUrl: "../images/shirt.svg",
			crewneckHoverUrl: "../images/crewneck.svg",
			capHoverUrl: "../images/cap.svg"
		}
		this._onHoverShirtOver = this._onHoverShirtOver.bind(this);
		this._onHoverShirtOut = this._onHoverShirtOut.bind(this);

		this._onHoverCrewneckOver = this._onHoverCrewneckOver.bind(this);
		this._onHoverCrewneckOut = this._onHoverCrewneckOut.bind(this);

		this._onHoverCapOver = this._onHoverCapOver.bind(this);
		this._onHoverCapOut = this._onHoverCapOut.bind(this);
	}
	_onHoverShirtOver() {
		this.setState({shirtHoverUrl: "../images/shirt-hover.svg"});
	}
	_onHoverShirtOut() {
		this.setState({shirtHoverUrl: "../images/shirt.svg"});
	}
	_onHoverCrewneckOver() {
		this.setState({crewneckHoverUrl: "../images/crewneck-hover.svg"});
	}
	_onHoverCrewneckOut() {
		this.setState({crewneckHoverUrl: "../images/crewneck.svg"});
	}
	_onHoverCapOver() {
		this.setState({capHoverUrl: "../images/cap-hover.svg"});
	}
	_onHoverCapOut() {
		this.setState({capHoverUrl: "../images/cap.svg"});
	}
    render() {
	    return (
	    	<Row>
    			<Col md={4}>
    				<Link to="/products?style=shirt" className="no-text-decoration center-block text-center">
    					<img src={this.state.shirtHoverUrl} onMouseOver={ this._onHoverShirtOver } onMouseOut={ this._onHoverShirtOut } className="shirt productPreviewImg" style={{ cursor: "pointer" }} />
    					<h3 className="productPreviewText">T-Shirt</h3>
    				</Link>
    			</Col>
    			<Col md={4}>
    				<Link to="/products?style=crewneck" className="no-text-decoration center-block text-center">
    					<img src={this.state.crewneckHoverUrl} onMouseOver={ this._onHoverCrewneckOver } onMouseOut={ this._onHoverCrewneckOut } className="crewneck productPreviewImg" style={{ cursor: "pointer" }} />
    					<h3 className="productPreviewText">Crewneck</h3>
    				</Link>
    			</Col>
    			<Col md={4}>
    				<Link to="/products?style=cap" className="no-text-decoration center-block text-center">
    					<img src={this.state.capHoverUrl} onMouseOver={ this._onHoverCapOver } onMouseOut={ this._onHoverCapOut } className="cap productPreviewImg" style={{ cursor: "pointer" }} />
    					<h3 className="productPreviewText">Cap</h3>
    				</Link>
    			</Col>
	    	</Row>
	    );
    }
}

ProductPreview.defaultProps = {
};

export default ProductPreview;
