import React from "react";
// @material-ui/core components
import { Button } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";

import Person from "assets/data/Person.json";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '90%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        TitleButton: {
            clear: "both",
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
    }),
);/* 

function obj2arry(params) {
    let e = []; let i = 0;
    for (const k in params) {
        e[i] = [k, params[k]];
        i++;
    } return e;
}
 */
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        return (Math.random() * 16 | 0).toString(16);
    });
}

export default function Resume(props) {
    
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        
<ExpansionPanel expanded={expanded==='projects'} onChange={handleChange('projects')}>
    <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="projects-content"
        id="projects-header"
    >
        <Typography>PROJECTS</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <GridContainer container spacing={3}>
            
                {Person.PROJECTS.map((v, k, a) => {
                    return <GridContainer key={k} container spacing={3}>
                        <ExpansionPanel>
                            <ExpansionPanelSummary>
                                <Card className={classes.ItemCard}>
                                     <Button variant="contained">
                                        {v.projectName}
                                    </Button>
                                </Card>
                            </ExpansionPanelSummary>>
                            <ExpansionPanelDetails>
                                <GridItem sm={12} md={12} lg={12} key={guid()}>
                                    <Card className={classes.ItemCard}>
                                        {v.projectDescription}
                                    </Card>
                                </GridItem>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                    </GridContainer>
                })
                }
        </GridContainer>
    </ExpansionPanelDetails>
</ExpansionPanel>
      /*   <Card >
            <CardHeader color="info"> PROJECTS</CardHeader>
            <CardBody >
                {Person.PROJECTS.map((v, k, a) => {
                    return <GridContainer key={k} container spacing={3}>
                        <Card className={classes.ItemCard}>
                            <Button key={k} variant="contained">
                                {v.projectName}
                            </Button>
                        </Card>
                        <GridItem sm={12} md={12} lg={12} key={guid()}>
                            <Card className={classes.ItemCard}>
                                {v.projectDescription}
                            </Card>
                        </GridItem>
                    </GridContainer>
                })
                }
            </CardBody>
        </Card> */
    )
}