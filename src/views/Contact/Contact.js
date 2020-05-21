import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Image from "assets/img/laketree.JPG";
import EmailIcon from '@material-ui/icons/Email';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1080,
      width:  998,
      height: 580,
    },
    wrapper: {
      width:  'inherit',
      height: 'inherit',
    },
    cardroot: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

export default function Contact() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };


  const handleExpandClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setExpanded(!expanded);
  };


  return (
    <div className={classes.root} onClick={handleChange}>
      <div className={classes.wrapper}> 
      
    <Slide direction="left" in={checked} timeout={{ appear: 1500, enter: 1300, exit: 1500, }} mountOnEnter unmountOnExit>
    <Card className={classes.cardroot} onClick={(e) => {e.stopPropagation(); e.nativeEvent.stopImmediatePropagation();}} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleChange}>
            <CloseIcon />
          </IconButton>
        }
        title="Send Email"
        subheader="Send message to me"
      />
      <CardMedia
        className={classes.media}
        image={Image}
        title="Email"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          The Most convenient way to contact me is email.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          If you are outside China, please send to 
        </Typography>
        <a href='mailto:gepdgepang@gmail.com'>
        <IconButton ><EmailIcon /></IconButton>gepdgepang@gmail.com</a>
        <Typography variant="body2" color="textSecondary" component="p">
          If you are inside China, please send to 
        </Typography>
        <a href='mailto:panglilimcse@139.com'>
        <IconButton><EmailIcon /></IconButton>panglilimcse@139.com</a>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expanded, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
           More contact ways is coming...:</Typography>
          <Typography paragraph>
            Webchat frend
          </Typography>
          <Typography paragraph>
            Facebook frend
          </Typography>
          <Typography>
            LinkedIn frens
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Slide></div></div>
  );
}
