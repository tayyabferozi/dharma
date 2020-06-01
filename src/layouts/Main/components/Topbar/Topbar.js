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
    color: "#8a93ad",
    fontWeight:'600'
                    
  },
  GetStartedOnline: {
    borderRadius: "40px",
    background:"white",
    border:'2px solid #f3f4f9',
    color:'rgb(37, 48, 86)',
    width: "12vh",
    height: "40px",
    fontSize: "14px",
    fontWeight: "600",
    paddingLeft: "10px",
    paddingRight: "10px",
    textTransform:'none',
    boxShadow: "none",
    "&:hover": {
      backgroundColor: 'rgb(37, 48, 86)',
      color:'white'
    }       
  },
  SmartWallet: {
    color: "rgb(37, 48, 86)",
    fontSize: "15px",
    marginTop: "0vh",
    fontWeight:'600'
                    
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
    var white = "#253056";
    var el = document.getElementById("colorstext3");
    el.style.color = white;
  };
  const classes = useStyles();

  

  return (
    <div className={classes.root} style={{backgroundColor:'white',zIndex:'30'}}>
      <Grid container sm={12} md={12} lg={12} style={{backgroundColor:'white',zIndex:'30',paddingTop:'5vh'}}>
            <Grid container align="center" justify="space-between" sm={12} md={12} lg={12} style={{zIndex:'30'}}>
              <Grid item sm={2} md={2} lg={2} align='center' style={{ marginTop: "3vh",paddingRight:'10vh' }}>
                <img width='60' src={require('../../../../assets/Logo.png')} />
              </Grid>
              <Grid
                container
                sm={6}
                lg={4}
                md={5}
                style={{ marginTop: "4vh",paddingLeft:'5vh',paddingRight:'4rem' }}
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
                <Grid item md={4} sm={4} lg={4}>
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
                <Grid item md={4} sm={4} lg={4}>
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
                <Grid item md={2} sm={2} lg={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.GetStartedOnline}
                >
                  Log In
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
