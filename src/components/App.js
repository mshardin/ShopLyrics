import React from "react";
import { Grid } from "react-bootstrap";

const App = ({children}) => (
    <Grid bsClass="container-fluid"> 
    	{ children }
    </Grid>
)

export default App;
