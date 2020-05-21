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
        margin: "0px 5px",
        padding: "1px 5px",
        elevation: "5",
        boxshadow: "5px 5px 5px 5px rgba(0, 0, 0, 0.8)",
    },
  }),
);

  /* 
function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        return (Math.random() * 16 | 0).toString(16);
    });
} */
function obj2arry(params) {
    let e = []; let i = 0;
    for (const k in params) {
        e[i] = [k, params[k]];
        i++;
    } return e;
}

export default function InfoRemark(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('info');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
<>
<ExpansionPanel expanded={expanded==='info'} onChange={handleChange('info')}>
    <ExpansionPanelSummary 
        expandIcon={<ExpandMoreIcon />}
        aria-controls="info-content" 
        id="info-header"
        color="info"
    >
        <Typography  >   
             PERSONAL INFORMATION 
        </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <GridContainer container spacing={3}>
                {obj2arry(Person.INFORMATION).map((v, k, a) => {
                    return <GridItem key={k} sm={12} md={6} lg={4}>
                        <Card className={classes.ItemCard}>
                           {v[0]}  :  {v[1]}
                        </Card>
                    </GridItem>
                })}
        </GridContainer>
    </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel expanded={expanded==='remark'} onChange={handleChange('remark')}>
    <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="remark-content"
        id="remark-header"
    >
        <Typography>  PROFESSIONAL REMARKS</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <GridContainer container spacing={3}>
             {Person.REMARKS.description}
            {(Person.REMARKS.items).map((v, k, a) => {
                        return <GridItem key={k} sm={12} md={6} lg={4}>
                            <Card className={classes.ItemCard}>{v}
                            </Card>
                        </GridItem>
                })}
        </GridContainer>
    </ExpansionPanelDetails>
</ExpansionPanel>
<ExpansionPanel expanded={expanded==='character'} onChange={handleChange('character')}>
    <ExpansionPanelSummary 
        expandIcon={<ExpandMoreIcon />}
        aria-controls="character-content" 
        id="character-header"
    >
        <Typography>  PERSONAL CHARACTER</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        <GridContainer container spacing={3}>
            {Person.CHARACTER.map((v, k, a) => {
                        return <GridItem key={k} sm={12} md={6} lg={4}>
                            <Card className={classes.ItemCard}>{v}
                            </Card>
                        </GridItem>
                    })}
        </GridContainer>
    </ExpansionPanelDetails>
</ExpansionPanel>
       </>
    )
}