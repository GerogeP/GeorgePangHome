import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/faces/pllL1.png";
import Person from "assets/data/Person.json";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CardHeader from "components/Card/CardHeader.js";

let InfoCardOn = Person.INFORMATION ? true : false;
let RemCardOn = Person.REMARKS ? true : false;
// let CharaCardOn = Person.CHARACTER?true:false;

const styles = {
    infoCard: {
        // border: "1px solid red",
        padding: "1px 5px",
        elevation: "8",
        boxshadow: "0 5px 4px 5px rgba(0, 0, 0, 0.8)",
        display: InfoCardOn ? "block" : "none"
    },
    remCard: {
        disolay: RemCardOn ? "block" : "none"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    },
    Grid: {
        padding: "3px"
    },
    personList: {

        aligncontent: "left",
        liststyletype: 'none'
    },
    personListItem: {
        width: "40%",
        margin: "0px",
        padding: "0px",
        border: "1px solid red"
    }
};

const useStyles = makeStyles(styles);

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        return (Math.random() * 16 | 0).toString(16);
    });
}
export default function SideDetail() {

    const classes = useStyles();


    return (

        <Card profile>
            <CardAvatar profile>
                <a href="#pll" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                </a>
            </CardAvatar>
            <CardBody >
                <h6 className={classes.cardCategory}>FULL STACK ENGINEER</h6>
                <h4 className={classes.cardTitle}>George Pang</h4>

                <Card className={classes.remCard}>
                    <CardHeader color="info">PROFESSIONAL REMARKS </CardHeader>
                    <CardBody>
                        <GridContainer container spacing={3} key={guid()}>
                            <GridItem key={guid()}> {Person.REMARKS.description}</GridItem>
                            {(Person.REMARKS.items).map((v, k, a) => {
                                return <GridItem sm={12} md={12} lg={12} key={guid()}>{v}</GridItem>
                            })}
                        </GridContainer>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    )
}