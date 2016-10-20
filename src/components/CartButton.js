import React from "react";

class CartButton extends React.Component {
	render() {
		return (
			<div className="pull-right shopping-cart snipcart-checkout">
				<span className="snipcart-count">{ this.props.count } </span> 
			</div>
		);
	}
}

export default CartButton;