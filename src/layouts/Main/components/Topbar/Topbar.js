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
  },
  FAQs: {
    fontSize: "15px",
    marginTop: "0vh",
    opactiy: "0.8",
    color: "#6e7898"
                    
  },
  GetStartedOnline: {
    borderRadius: "25px",
    background:"linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
    width: "173px",
    height: "40px",
    fontSize: "12px",
    fontWeight: "500",
    paddingLeft: "20px",
    paddingRight: "20px"              
  },
  SmartWallet: {
    color: "rgb(37, 48, 86)",
    fontSize: "15px",
    marginTop: "0vh"
                    
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
    <div className={classes.root} style={{backgroundColor:'white',zIndex:'30'}}>
      <Grid container sm={11} md={11} lg={11} style={{backgroundColor:'white',zIndex:'30'}}>
            <Grid container align="center" justify="space-between" sm={12} md={12} lg={12} style={{zIndex:'30'}}>
              <Grid item sm={2} md={2} lg={2} align='center' style={{ marginTop: "3vh",paddingRight:'5vh' }}>
                <img width='60' src={require('../../../../assets/logo.png')} />
              </Grid>
              <Grid
                container

                sm={8}
                lg={6}
                md={6}
                style={{ marginTop: "4vh",paddingLeft:'5vh' }}
                
              >
                <Grid item md={2} sm={2} lg={2}>
                <IconButton>
                  <Typography
                    className={classes.FAQs}
                    onMouseEnter={mouse}
                    onMouseLeave={mouseout}
                    id="colorstext"
                  >
                    {" "}
                    FAQs
                  </Typography>
                </IconButton>
                </Grid>
                <Grid item md={3} sm={3} lg={3}>
                <IconButton>
                  <Typography
                    className={classes.FAQs}
                    onMouseEnter={mouse1}
                    onMouseLeave={mouseout1}
                    id="colorstext1"
                  >
                    {" "}
                    How It Works
                  </Typography>
                </IconButton>
                </Grid>
                <Grid item md={3} sm={3} lg={3}>
                <IconButton>
                  <Typography
                    className={classes.FAQs}
                    onMouseEnter={mouse2}
                    onMouseLeave={mouseout2}
                    id="colorstext2"
                  >
                    Smart Wallet
                  </Typography>
                </IconButton>
                </Grid>
                <Grid item lg={2} sm={2} md={2}>
                <IconButton>
                  <Typography
                    className={classes.SmartWallet}
                    onMouseEnter={mouse3}
                    onMouseLeave={mouseout3}
                    id="colorstext3"
                  >
                    Contact
                  </Typography>
                </IconButton>
                </Grid>
                <Grid item md={2} sm={2} lg={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.GetStartedOnline}
                >
                  Get Started Online
                </Button>
                <Typography>
                  {"  "}
                </Typography>
                </Grid>
              </Grid>
            </Grid>
        </Grid>
        </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
