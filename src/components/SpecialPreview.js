import React from "react";
import { Link } from "react-router";

import { Col, Row } from "react-bootstrap";

import specials from "../data/specials";

class SpecialPreview extends React.Component {
	render() {
		const specialsList = Object.keys(specials).map((key) => {
			const special = specials[key];

			return (
				<Col key={key} md={4} mdPush={2}>
					<div className="special">
						<Row>
		    				<Link to={`/special/${special.slug}`}>
		    					<img src={special.image} alt={special.name} className="img-responsive center-block" style={{ width: "100%", maxWidth: "200px"}} />
		    				</Link>
	    				
	    					<h4 className="text-center">{special.name}</h4>
	    					<h4 className="text-center" style={{ opacity: "0.5" }}>{special.artist}</h4>
	    					<h5 className="text-center">${special.price}</h5>
	    				</Row>
	    			</div>
				</Col>
			);
		});
		return (
			<Col md={12}>
				<h1 className="text-center" style={{padding:"100px 0 0 0", color:"#424242"}}>Season Specials</h1>
				{ specialsList }
			</Col>
		)
	}
}

export default SpecialPreview;