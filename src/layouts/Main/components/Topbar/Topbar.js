import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import "../../../../App.css";
import PropTypes from 'prop-types';

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
 const mouse = event => {
    var colorhex = ["#253056"];
    var el = document.getElementById("colorstext");
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
 const mouseout = event => {
    var white = "#6e7898";
    var el = document.getElementById("colorstext");
    el.style.color = white;
  };
  const mouse1 = event => {
    var colorhex = ["#253056"];
    var el = document.getElementById("colorstext1");
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout1 = event => {
    var white = "#6e7898";
    var el = document.getElementById("colorstext1");
    el.style.color = white;
  };

  const mouse2 = event => {
    var colorhex = ["#253056"];
    var el = document.getElementById("colorstext2");
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout2 = event => {
    var white = "#6e7898";
    var el = document.getElementById("colorstext2");
    el.style.color = white;
  };

  const mouse3 = event => {
    var colorhex = ["#253056"];
    var el = document.getElementById("colorstext3");
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const  mouseout3 = event => {
    var white = "#6e7898";
    var el = document.getElementById("colorstext3");
    el.style.color = white;
  };
  const classes = useStyles();

  

  return (
    <div className={classes.root} style={{backgroundColor:'white'}}>
      <Grid container xs={12} style={{backgroundColor:'white'}}>
        <AppBar
          position="static"
          style={{ background: "white", paddingBottom: "3vh" }}
        >
          <Toolbar>
            <Grid container xs={12}>
              <Grid item xs={2} style={{ marginTop: "4vh" }}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <RadioButtonUncheckedIcon
                    style={{ color: "black", fontSize: "35px" }}
                  />
                </IconButton>
              </Grid>
              <Grid item xs={4} />
              <Grid
                container
                xs={6}
                style={{ marginTop: "4vh" }}
                align="center"
                justify="space-between"
              >
                <IconButton>
                  <Typography
                    style={{
                      fontSize: "15px",
                      marginTop: "-2.4vh",
                      opactiy: "0.8",
                      color: "#6e7898"
                    }}
                    onMouseEnter={mouse}
                    onMouseLeave={mouseout}
                    id="colorstext"
                  >
                    {" "}
                    FAQs
                  </Typography>
                </IconButton>
                <IconButton>
                  <Typography
                    style={{
                      color: "rgb(110, 120, 152)",
                      fontSize: "15px",
                      marginTop: "-2.4vh",
                      opactiy: "0.8"
                    }}
                    onMouseEnter={mouse1}
                    onMouseLeave={mouseout1}
                    id="colorstext1"
                  >
                    {" "}
                    How It Works
                  </Typography>
                </IconButton>
                <IconButton>
                  <Typography
                    style={{
                      color: "rgb(110, 120, 152)",
                      fontSize: "15px",
                      marginTop: "-2.4vh",
                      opactiy: "0.8"
                    }}
                    onMouseEnter={mouse2}
                    onMouseLeave={mouseout2}
                    id="colorstext2"
                  >
                    Smart Wallet
                  </Typography>
                </IconButton>
                <IconButton>
                  <Typography
                    style={{
                      color: "rgb(37, 48, 86)",
                      fontSize: "15px",
                      marginTop: "-2.4vh"
                    }}
                    onMouseEnter={mouse3}
                    onMouseLeave={mouseout3}
                    id="colorstext3"
                  >
                    Contact
                  </Typography>
                </IconButton>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    borderRadius: "25px",
                    background:
                      "linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
                    width: "173px",
                    height: "40px",
                    fontSize: "12px",
                    fontWeight: "500",
                    paddingLeft: "20px",
                    paddingRight: "20px"
                  }}
                >
                  Get Started Online
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        </Grid>
        </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
