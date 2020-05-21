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
import { Button } from "@material-ui/core";

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
    }
};

const useStyles = makeStyles(styles);

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        return (Math.random() * 16 | 0).toString(16);
    });
}
function obj2arry(params) {
    let e = []; let i = 0;
    for (const k in params) {
        e[i] = [k, params[k]];
        i++;
    } return e;
}

export default function ProfileDetail(props) {

    const classes = useStyles();

    // const [show, setShow] = React.useState("drop");
    
    return (

        <Card >
            <CardHeader color="primary" >
                <h4 className={classes.cardTitleWhite}>The personal page of George Pang</h4>
                <p className={classes.cardCategoryWhite}>A React App built with Material UI and more...</p>
            </CardHeader>
            <CardBody >
                <Card className={classes.infoCard} >
                    <CardHeader color="info" >
                        <Button>
                             PERSONAL INFORMATION
                        </Button>
                    </CardHeader>
                    <CardBody  id="info" >
                        <GridContainer  container spacing={3}>
                            {obj2arry(Person.INFORMATION).map((v, k, a) => {
                                return <GridItem key={k} sm={12} md={6} lg={4}>
                                    <Card className={classes.ItemCard}>
                                        {v[0]}  :  {v[1]}
                                    </Card>
                                </GridItem>
                            })}
                        </GridContainer>
                    </CardBody>
                </Card>
                <Card className={classes.remCard}>
                    <CardHeader  color="info">PROFESSIONAL REMARKS </CardHeader>
                    <CardBody >
                        <GridContainer container spacing={3}>
                            <GridItem key={guid()}> {Person.REMARKS.description}</GridItem>
                            {(Person.REMARKS.items).map((v, k, a) => {
                                return <GridItem  key={k} sm={12} md={6} lg={4}>
                                    <Card  className={classes.ItemCard}>{v}
                                    </Card>
                            </GridItem>
                            })}
                        </GridContainer>
                    </CardBody>
                </Card>
                <Card >
                    <CardHeader color="info"> PERSONAL CHARACTER</CardHeader>
                    <CardBody >
                        <GridContainer container spacing={3}>
                            {Person.CHARACTER.map((v, k, a) => {
                                return <GridItem  key={k} sm={12} md={6} lg={4}> 
                                <Card  className={classes.ItemCard}>{v}
                                </Card>
                            </GridItem>
                            })}
                        </GridContainer>
                    </CardBody>
                </Card >
                <Card >
                    <CardHeader  color="info"> RESUME</CardHeader>
                    <CardBody >
                        {Person.RESUME.map((v,k,a)=>{
                            return <GridContainer key={k} container spacing={3}>
                                    <Card className={classes.ItemCard}>
                                        <Button  type="button" variant="contained" color="primary">
                                            {v.company}
                                        </Button>
                                    </Card>
                                {/* </GridItem> */}
                                <GridItem sm={12} md={6} lg={4}>
                                    <Card  className={classes.ItemCard}>
                                        From : {v.from}   To : { v.to }
                                    </Card>
                                </GridItem>
                                <GridItem sm={12} md={6} lg={4}>
                                    <Card  className={classes.ItemCard}>
                                        Position : { v.position }
                                    </Card>
                                </GridItem>
                                <GridItem sm={12} md={6} lg={4}>
                                    <Card className={classes.ItemCard}>
                                        Position Description : { v.positionDescription }
                                    </Card>
                                </GridItem>
                                <Card  className={classes.ItemCard}>
                                    <Button  variant="contained">
                                           DUTY
                                    </Button>
                                </Card>
                                {obj2arry(v.DUTY).map((v,k,a)=>{
                                    return <GridItem key={k} sm={12} md={12} lg={12}>
                                        <Card className={classes.ItemCard}
                                        >{v[1]}
                                    </Card>
                                </GridItem>
                                })}

                                {/* <GridItem sm={12} md={12} lg={12} key={guid()}> */}
                                    <Card className={classes.ItemCard}>
                                        <Button variant="contained">
                                            PROJECTS
                                        </Button>
                                    </Card>
                                {/* </GridItem> */}
                                {obj2arry(v.PROJECTS).map((v,k,a)=>{
                                    return <GridItem key={k} sm={12} md={12} lg={12}>
                                        <Card className={classes.ItemCard}>
                                            {v[1]}
                                        </Card>
                                    </GridItem>
                                })}
                            </GridContainer>
                    })}
                    </CardBody>
                </Card>
                <Card >
                    <CardHeader  color="info"> PROJECTS</CardHeader>
                    <CardBody >
                        <GridContainer container spacing={3}>
                            {Person.PROJECTS.map((v, k, a) => {
                                return <>
                                <Card className={classes.ItemCard}>
                                <Button variant="contained">
                                    {v.projectName}
                                </Button>
                                </Card>
                                <GridItem sm={12} md={12} lg={12} key={guid()}>
                                    <Card  className={classes.ItemCard}>
                                        {v.projectDescription}
                                    </Card>
                                </GridItem>
                            </>
                            })
                            }
                        </GridContainer>
                    </CardBody>
                </Card>

                <Card >
                    <CardHeader  color="info"> EDUCATION</CardHeader>
                    <CardBody >
                        <GridContainer container spacing={3}>
                            {
                                obj2arry(Person.EDUCATION).map((v, k, a) => {
                                    return <GridItem key={guid()}>
                                        <Card className={classes.ItemCard}>
                                            {v[0]}  :  {v[1]}
                                        </Card>
                                    </GridItem>
                                })
                            }
                        </GridContainer>
                    </CardBody>
                </Card>

                <Card >
                    <CardHeader  color="info"> CONTACT</CardHeader>
                    <CardBody >
                        <GridContainer container spacing={3}>
                            {
                                obj2arry(Person.CONTACT).map((v, k, a) => {
                                    return <GridItem key={guid()}>
                                        <Card  className={classes.ItemCard}>
                                            {v[0]}  :  {v[1]}
                                        </Card>
                                    </GridItem>
                                })
                            }
                        </GridContainer>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>)
}