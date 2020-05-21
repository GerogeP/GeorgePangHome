import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Hidden from "@material-ui/core/Hidden";
import Poppers from "@material-ui/core/Popper";
// @material-ui/icons
import Contacts from '@material-ui/icons/Contacts';
import Person from "@material-ui/icons/Person";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function HomeNavbarLinks() {
  const classes = useStyles();
  const [openProfile, setOpenProfile] = React.useState(null);
  const [openMail, setOpenMail] = React.useState(null);


  const handleClickProfile = event => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  const handleClickMail = event => {
    if (openMail && openMail.contains(event.target)) {
      setOpenMail(null);
    } else {
      setOpenMail(event.currentTarget);
    }
  };
  const handleCloseMail = () => {
    setOpenMail(null);
  };

  const testMail = () =>{
    alert("in site message is coming soon.");
  };


  return (
    <div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openProfile ? "profile-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickProfile}
          className={classes.buttonLink}
        >
          <Person className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Profile</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openProfile)}
          anchorEl={openProfile}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openProfile }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="profile-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseProfile}>
                  <MenuList role="menu">
                    <MenuItem
                      // onClick={handleUser}
                      className={classes.dropdownItem}
                    >
                      <Link to="/home/user/">
                      Profile
                      </Link>

                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
      <div className={classes.manager}>
        <Button
          color={window.innerWidth > 959 ? "transparent" : "white"}
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-owns={openMail ? "mail-menu-list-grow" : null}
          aria-haspopup="true"
          onClick={handleClickMail}
          className={classes.buttonLink}
        >
          <Contacts className={classes.icons} />
          <Hidden mdUp implementation="css">
            <p className={classes.linkText}>Mail</p>
          </Hidden>
        </Button>
        <Poppers
          open={Boolean(openMail)}
          anchorEl={openMail}
          transition
          disablePortal
          className={
            classNames({ [classes.popperClose]: !openMail }) +
            " " +
            classes.popperNav
          }
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="mail-menu-list-grow"
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleCloseMail}>
                  <MenuList role="menu"> <MenuItem
                      className={classes.dropdownItem}
                    >
                       <Link to="/home/contact/">
                     IMs</Link>
                    </MenuItem>
                    <MenuItem
                      onClick={testMail}
                      className={classes.dropdownItem}
                    > 
                    message
                    </MenuItem>
                    <MenuItem className={classes.dropdownItem}
                    >
                      <Link to="/home/contact/">
                      Send Mail
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
                    </Paper>
            </Grow>
          )}
        </Poppers>
      </div>
    </div>
  );
}
