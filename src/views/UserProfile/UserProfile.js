import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Fade from '@material-ui/core/Fade';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import SideDetail from "./SideDetail";

import InfoRemark from "./InfoRemark";
import Resume from "./Resume";
import Projrcts from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

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
/* 
function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      return (Math.random() * 16 | 0).toString(16);
  });
}
 */

export default function UserProfile() {
  const classes = useStyles();


  return (
    <Fade in={true} timeout={{ appear: 1500, enter: 1300, exit: 1500, }}>
    <GridContainer   style={{margin:"0"}} >
      <GridItem   xs={12} sm={12} md={8}>
        <Card>
          
        <CardHeader color="primary" >
                <h4 className={classes.cardTitleWhite}>The personal page of George Pang</h4>
                <p className={classes.cardCategoryWhite}>A React App built with Material UI and more...</p>
            </CardHeader>
            <CardBody >
              <InfoRemark />
              <Resume />
              <Projrcts />
              <Education />
              <Contact />
            </CardBody>
        </Card>
      </GridItem>
      <GridItem   xs={12} sm={12} md={4}>
        <SideDetail   />
      </GridItem>
    </GridContainer></Fade>
  );
}
