import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import Person from "assets/data/Person.json";

// let InfoCardOn = Person.INFORMATION ? true : false;
// let RemCardOn = Person.REMARKS ? true : false;
// let CharaCardOn = Person.CHARACTER?true:false;

const styles = {
    TitleButton: {
        clear: "both"
    },
    ItemCard: {
        // border: "1px solid red",
        margin: "0px 5px",
        // marginBottom: " 0px",
        // marginTop: "0px",
        padding: "1px 5px",
        elevation: "5",
        boxshadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.8)",
        // display: InfoCardOn ? "block" : "none"
    }
};
function obj2arry(params) {
    let e = []; let i = 0;
    for (const k in params) {
        e[i] = [k, params[k]];
        i++;
    } return e;
}

const useStyles = makeStyles(styles);


export default function Resume(props) {

    const classes = useStyles();

    // const [show, setShow] = React.useState("drop");

    return (      
    <Card >
        <CardHeader  color="info"> CONTACT</CardHeader>
        <CardBody >
            <GridContainer container spacing={3}>
                {
                    obj2arry(Person.CONTACT).map((v, k, a) => {
                        return <GridItem key={k}>
                            <Card  className={classes.ItemCard}>
                                {v[0]}  :  {v[1]}
                            </Card>
                        </GridItem>
                    })
                }
            </GridContainer>
        </CardBody>
    </Card>
    )
}