import React from "react";
// @material-ui/core components
import { Button, Container,  Grid} from "@material-ui/core";
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
);

function obj2arry(params) {
    let e = []; let i = 0;
    for (const k in params) {
        e[i] = [k, params[k]];
        i++;
    } return e;
}
export default function Resume(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    // const [show, setShow] = React.useState("drop");

    return (

        <ExpansionPanel expanded={expanded === 'resume'} onChange={handleChange('resume')}>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="resume-content"
                id="resume-header"
            >
                <Typography> RESUME</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails >

                <GridContainer container spacing={3}>
                    {Person.RESUME.map((v, k, a) => {
                        return <Container key={k} className={classes.TitleButton}>
                            <ExpansionPanel >
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls=" {v.company}-content"
                                    id=" {v.company}-header">
                                    <Button variant="contained">
                                        {v.company}
                                    </Button>
                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails >
                                    <Grid
                                        container
                                        direction="column"
                                        justify="center"
                                        alignItems="center"
                                        style={{ border: '1px solid red' }}
                                    >

                                        <GridContainer container spacing={3} >
                                            <GridItem sm={12} md={6} lg={4}>
                                                <Card className={classes.ItemCard}>
                                                    From : {v.from}   To : {v.to}
                                                </Card>
                                            </GridItem>
                                            <GridItem sm={12} md={6} lg={4}>
                                                <   Card className={classes.ItemCard}>
                                                    Position : {v.position}
                                                </Card>
                                            </GridItem>
                                            <GridItem sm={12} md={6} lg={4}>
                                                <Card className={classes.ItemCard}>
                                                    Position Description : {v.positionDescription}
                                                </Card>
                                            </GridItem>
                                        </GridContainer>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary>
                                                <Card className={classes.ItemCard}>
                                                    <Button variant="contained">
                                                        DUTY
                                                    </Button>
                                                </Card>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>

                                                <GridContainer>
                                                    {obj2arry(v.DUTY).map((v, k, a) => {
                                                        return <GridItem key={k} sm={12} md={12} lg={12}>
                                                            <Card className={classes.ItemCard}>
                                                                {v[1]}
                                                            </Card>
                                                        </GridItem>
                                                    })}
                                                </GridContainer>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary>
                                                <Card className={classes.ItemCard}>
                                                    <Button variant="contained">
                                                        PROJECTS
                                                    </Button>
                                                </Card>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails>

                                                <GridContainer>

                                                    {obj2arry(v.PROJECTS).map((v, k, a) => {
                                                        return <GridItem key={k} sm={12} md={12} lg={12}>
                                                            <Card className={classes.ItemCard}>
                                                                {v[1]}
                                                            </Card>
                                                        </GridItem>
                                                    })}
                                                </GridContainer>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Container>
                    })}
                </GridContainer>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

