import React from "react";
// @material-ui/core components
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

// let InfoCardOn = Person.INFORMATION ? true : false;
// let RemCardOn = Person.REMARKS ? true : false;
// let CharaCardOn = Person.CHARACTER?true:false;

const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },TitleButton: {
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

    return (
        
<ExpansionPanel expanded={expanded==='info'} onChange={handleChange('info')}>
    <ExpansionPanelSummary 
        expandIcon={<ExpandMoreIcon />}
        aria-controls="info-content" 
        id="info-header"
    >
        <Typography>   
        EDUCATION
        </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <GridContainer container spacing={3}>
                {obj2arry(Person.EDUCATION).map((v, k, a) => {
                    return <GridItem key={k} sm={12} md={6} lg={4}>
                        <Card className={classes.ItemCard}>
                           {v[0]}  :  {v[1]}
                        </Card>
                    </GridItem>
                })}
        </GridContainer>
    </ExpansionPanelDetails>
</ExpansionPanel>
     /*    <Card >
        <CardHeader  color="info"> EDUCATION</CardHeader>
        <CardBody >
            <GridContainer container spacing={3}>
                {
                    obj2arry(Person.EDUCATION).map((v, k, a) => {
                        return <GridItem key={k}>
                            <Card className={classes.ItemCard}>
                                {v[0]}  :  {v[1]}
                            </Card>
                        </GridItem>
                    })
                }
            </GridContainer>
        </CardBody>
    </Card> */
    )
}