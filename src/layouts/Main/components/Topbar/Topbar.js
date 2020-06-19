<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import '../../../../App.css';
import PropTypes from 'prop-types';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
const useStyles = makeStyles(theme => ({
  root: {},
=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import "../../../../App.css";
import PropTypes from 'prop-types';
import ShareIcon from '@material-ui/icons/Share';
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "../../../../App.css";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    color:'rgb(134, 113, 95)',
    backgroundColor: theme.palette.background.paper
  },
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
<<<<<<< HEAD
  FAQs: {
    fontSize: '15px',
    marginTop: '0vh',
    opactiy: '0.8',
    color: '#8a93ad',
    fontWeight: '500'
  },
  GetStartedOnline: {
    borderRadius: '40px',
    background: 'white',
    border: '2px solid #f3f4f9',
    color: 'rgb(37, 48, 86)',
    width: '12vh',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    paddingLeft: '10px',
    paddingRight: '10px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(37, 48, 86)',
      color: 'white'
    }
  },
  GetStartedOnlineMobile: {
    borderRadius: '40px',
    background: 'white',
    border: '2px solid #f3f4f9',
    color: 'rgb(37, 48, 86)',
    width: '100%',
    height: '40px',
    fontSize: '14px',
    fontWeight: '600',
    paddingLeft: '10px',
    paddingRight: '10px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'rgb(37, 48, 86)',
      color: 'white'
    }
  },
  SmartWallet: {
    color: 'rgb(37, 48, 86)',
    fontSize: '15px',
    fontWeight: '600'
  }
=======
  Restaurant: {
    fontSize:'16px',
    fontFamily: 'Montserrat',
    fontWeight:'bolder !important',
    fontStyle:'normal',
    color: 'rgb(134, 113, 95)',
    letterSpacing: '2.3px',
  },
  
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
<<<<<<< HEAD
  const mouse = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext');
    el.style.color = white;
  };
  const mouse1 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext1');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout1 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext1');
    el.style.color = white;
  };

  const mouse2 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext2');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout2 = event => {
    var white = '#6e7898';
    var el = document.getElementById('colorstext2');
    el.style.color = white;
  };

  const mouse3 = event => {
    var colorhex = ['#253056'];
    var el = document.getElementById('colorstext3');
    el.style.color = colorhex[Math.floor(Math.random() * 1)];
  };
  const mouseout3 = event => {
    var white = '#253056';
    var el = document.getElementById('colorstext3');
    el.style.color = white;
  };
=======
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

<<<<<<< HEAD
  return (
    <div
      className={classes.root}
      style={{ backgroundColor: 'white', zIndex: '30' }}>
      <Grid
        container
        sm={12}
        md={12}
        lg={12}
        style={{ backgroundColor: 'white', zIndex: '30' }}>
        <div class="cssanimation sequence fadeInBottom" id="topbarAnim">
          <Grid
            container
            align="center"
            justify="space-between"
            id="desktop"
            sm={12}
            md={12}
            lg={12}
            style={{ zIndex: '30', paddingTop: '5vh' }}>
            <Grid
              item
              sm={2}
              md={2}
              lg={2}
              align="center"
              style={{ marginTop: '3vh', paddingRight: '10vh' }}>
              <img width="60" src={require('../../../../assets/Logo.png')} />
            </Grid>
            <Grid
              container
              sm={6}
              lg={4}
              md={5}
              style={{
                marginTop: '4vh',
                paddingRight: '8vh'
              }}>
              <Grid item md={2} sm={2} lg={2}>
                <IconButton>
                  <Typography
                    className={classes.FAQs}
                    onMouseEnter={mouse}
                    onMouseLeave={mouseout}
                    id="colorstext">
                    {' '}
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
                    id="colorstext1">
                    {' '}
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
                    id="colorstext2">
                    Smart Wallet
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item md={2} sm={2} lg={2}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.GetStartedOnline}>
                  Log In
                </Button>
                <Typography>{'  '}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Grid
          container
          align="center"
          justify="space-between"
          id="Mobile"
          sm={12}
          md={12}
          lg={12}
          style={{ zIndex: '30' }}>
          <Grid
            item
            xs={2}
            align="left"
            style={{
              marginTop: '3vh',
              marginBottom: '3vh',
              paddingLeft: '2vh'
            }}>
            <img width="60" src={require('../../../../assets/Logo.png')} />
          </Grid>
          <Grid
            container
            align="center"
            xs={6}
            justify="space-between"
            style={{ paddingTop: '4vh', paddingRight: '2vh' }}>
            <Grid item md={2} sm={2} lg={2} xs={5}>
              <IconButton>
                <Typography className={classes.FAQs}> FAQs</Typography>
              </IconButton>
            </Grid>
            <Grid item md={2} sm={2} lg={2} xs={7}>
              <Button
                variant="contained"
                className={classes.GetStartedOnlineMobile}>
                Log In
              </Button>
              <Typography>{'  '}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
=======
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container xs={12} align='center'>
      <AppBar style={{position:'static'}}>
        <toolbar>
      <Grid container xs={12} justify='space-between' style={{paddingTop:'4vh',background:'rgb(248, 243, 239)'}}>
        <Grid item xs={2}>
          <Typography style={{marginLeft:'-2vh',fontSize:'14px',color:'rgb(134, 113, 95)',fontFamily:'Montserrat'}}>
            ENG
          </Typography>
        </Grid>
        <Grid item xs={5} style={{}} align='left'>
          <Typography className={classes.Restaurant} style={{paddingLeft:'1vh'}}>
            RESTAURANT
          </Typography>
        </Grid>
        <Grid item xs={2} style={{marginTop:'-1.5vh',paddingLeft:'2vh'}} align='left'>
          <IconButton>
            <ShareIcon style={{fontSize:'20px',color:'rgb(134, 113, 95)',marginRight:'0vh'}}/>
          </IconButton>
        </Grid>
        <div className={classes.root} style={{marginTop:'4vh'}}>
        <toolbar position="static" style={{background:"rgb(248, 243, 239)",marginTop:'2vh'}} >
        <Tabs
        style={{background:'rgb(248, 243, 239)'}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          
          indicatorColor="rgb(134, 113, 95)"
          centered = "true"
          aria-label="scrollable force tabs example"
        >
          <Tab label="DRINKS" style={{width:'100px',paddingLeft:'1vh',paddingRight:'7vh'}} />
          <Tab label="PIZZA" style={{width:'100px',paddingRight:'4vh'}} />
          <Tab label="BURGER" style={{width:'100px'}} />
          <Tab label="DESSERT" style={{width:'100px',paddingRight:'6vh'}} />
          <Tab label="FISH" style={{width:'100px',paddingRight:'4vh'}} />
          <Tab label="STEAK" style={{width:'100px'}} />
        </Tabs>
      </toolbar>
      </div>
      </Grid>
      </toolbar>
      
      </AppBar>
    </Grid>
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
