import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MobileCarousel from "./MobileCarousel";
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AppleIcon from '@material-ui/icons/Apple';
import MoneyIcon from '@material-ui/icons/Money';
import "../../../../../src/App.css"
import PaymentIcon from '@material-ui/icons/Payment';
import Icon from '@material-ui/core/Icon';
import { FaPercent,FaGooglePlay } from 'react-icons/fa';
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import {GrAtm} from 'react-icons/gr'
import {AiOutlineGlobal} from 'react-icons/ai'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {MdLockOutline} from 'react-icons/md'
import Button from '@material-ui/core/Button';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import 'antd/dist/antd.css';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Carousel, Radio } from 'antd';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Bubbles from "./Bubbles";
import ButtonApple from "./ButtonApple";
import ButtonGoogle from "./ButtonGoogle";
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  countMobile: {
    zIndex:'32',
    marginTop:'15vh',
    border:'2px solid white',
    borderRadius:'25px',
    fontSize:'22px',
    padding:'4px',
    color:'white',
    paddingTop:'20px',
    paddingBottom:'20px'
  },
  transparencyBox: {
    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.8), rgba(255,255,255,1))",
    zIndex:'4',
    boxShadow: "0px 0px 15px 15px white",
    borderRadius:'25px',
  },
  CountUp: {
    fontSize:'50px',
    color:'white',
    paddingTop:'5vh',
    display:'inline',
    zIndex:'32'
  },
  SendAndReceive: {
    color:'rgb(37, 48, 86)',
    fontSize:'46px',
    fontWeight:'600'
  },
  spacing: {
    margin: theme.spacing(4),
  },
  VideoButton: {
    "&:hover": {
      backgroundColor: "white"
    },

    color: 'rgb(37,48,86)',
    fontSize:'14px',
    fontWeight:'500',
    lineHeight: 1.5,
    background:'white',
    marginLeft:'14px',
    paddingLeft:'2vh'
  }

}));

const Landingpage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
const mouse10 = event => {
  var colorhex = ["#253056"];
  var el = document.getElementById("colorstext10");
  el.style.color = colorhex[Math.floor(Math.random() * 1)];
};
const mouseout10 = event => {
  var white = "#6e7898";
  var el = document.getElementById("colorstext10");
  el.style.color = white;
};
const mouse11 = event => {
  var colorhex = ["#253056"];
  var el = document.getElementById("colorstext11");
  el.style.color = colorhex[Math.floor(Math.random() * 1)];
};
const mouseout11 = event => {
  var white = "#6e7898";
  var el = document.getElementById("colorstext11");
  el.style.color = white;
};

const mouse12 = event => {
  var colorhex = ["#253056"];
  var el = document.getElementById("colorstext12");
  el.style.color = colorhex[Math.floor(Math.random() * 1)];
};
const mouseout12 = event => {
  var white = "#6e7898";
  var el = document.getElementById("colorstext12");
  el.style.color = white;
};

const mouse13 = event => {
  var colorhex = ["#253056"];
  var el = document.getElementById("colorstext13");
  el.style.color = colorhex[Math.floor(Math.random() * 1)];
};
const  mouseout13 = event => {
  var white = "#6e7898";
  var el = document.getElementById("colorstext13");
  el.style.color = white;
};
const mouse14 = event => {
  var colorhex = ["#253056"];
  var el = document.getElementById("colorstext14");
  el.style.color = colorhex[Math.floor(Math.random() * 1)];
};

const  mouseout14 = event => {
  var white = "#6e7898";
  var el = document.getElementById("colorstext14");
  el.style.color = white;
};


  return (
    <Grid container md={12} lg={12} align="center" class='MainContainer' style={{background:'white'}}>
      <Grid container xs={12}>
        <Grid item md={1} lg={1} style={{marginLeft:'15vh'}}/>
          <Grid item md={8} align='center' lg={8} className={classes.transparencyBox}> 
          <Grid item md={1} lg={3} style={{marginLeft:"2vh"}}/>
          <Grid item md={11} lg={9} style={{zIndex:'4'}}>
            <Typography class='SendMoneyTo' style={{lineHeight:'86px',margin:'0'}}>
              Send money to
            </Typography>
          </Grid>
          
          <Grid container md={12} lg={12} align='center'>
            <Grid item md={12} lg={12} style={{zIndex:'4'}}>
              <Typography class='anyone' style={{lineHeight:'86px',margin:'0'}}>
                anyone.
              </Typography>
              <Typography class='EarnInterest' style={{lineHeight:'86px',margin:'0'}}>
                {" "}
                Earn interest
              </Typography>
              </Grid>
            <Grid container xs={12} style={{marginTop:'0vh'}}>
              <Grid item xs={3}/>
              <Grid item xs={12} style={{zIndex:'4'}}>
                <Typography class='From' style={{lineHeight:'86px',margin:'0'}}>
                  {"from "}
                </Typography> 
                <Typography class='anywhere' style={{lineHeight:'86px',margin:'0'}}>
                  anywhere.
                </Typography>  
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </Grid>
      <Grid container xs={12} style={{marginTop:'2vh'}}>
        <Grid item xs={1} style={{marginLeft:'8vh'}}/>
        <Grid item xs={9} className={classes.transparencyBox}>
          <Typography class='DharmaIsLimitless' style={{color: "rgb(110, 120, 152)"}}>
            Dharma is a limitless,borderless way to send and receive USD -
            all while
          </Typography>
          <Typography class='APR' style={{fontWeight:'600'}}>
            {" earning 0.7% APR"}
          </Typography>  
          <Typography class='bankAccount'>
            <br/>
            You don’t need a bank account to use it,
            and it’s 100% free to use.
            </Typography>
        </Grid>
      </Grid>
  <Grid container  xs={12} style={{marginTop:'10vh'}}>
    <Grid item direction="column" xs={6} justify='right' align='right' style={{paddingRight:'4vh'}} >  
      <Grid item xs={12}>
        <ButtonApple />
      </Grid>
    </Grid>
    <Grid item direction="column" xs={6} justify='left' align='left' style={{paddingLeft:'4vh'}}>  
      <Grid item xs={12}>
        <ButtonGoogle />
      </Grid>
    </Grid> 
    <Grid item direction="column" sm={6} md={6} lg={6} justify='right' align='right' style={{paddingRight:'4vh'}} > 
      <Grid id="CarouselDesktop" item xs={12} style={{paddingTop:'15vh'}}>
        <img  src={require('../../../../assets/carouselphone.png')}  style={{zIndex:'20',width:'500px',height:'550px'}}></img>    
      </Grid>
    </Grid>
    <Grid item direction="column" sm={6} md={6} lg={6} justify='left' align='left' style={{paddingLeft:'4vh'}} >
      <Grid id="CountDesktop" item xs={12} style={{paddingTop:'15vh'}}>
        <img src={require('../../../../assets/countmobile.png')}  style={{zIndex:'20',width:'500px',height:'550px'}}></img>    
      </Grid>
    </Grid>
    <Grid item direction="column" sm={12} md={12} lg={12} justify='center' align='center'> 
      <Grid id="CarouselMobile" item xs={12} style={{paddingTop:'15vh'}}>
        <img  src={require('../../../../assets/carouselphone.png')}  style={{zIndex:'20',width:'500px',height:'550px'}}></img>    
      </Grid>
      <Grid id="CountMobile" align='center' item xs={12} style={{paddingTop:'15vh'}}>
        <img src={require('../../../../assets/countmobile.png')}  style={{zIndex:'20',width:'500px',height:'550px'}}></img>    
      </Grid>
    </Grid>
      
      {/* <Grid container xs={12}>
      <Grid item xs={12} align='center'>
        <Typography className={classes.SendAndReceive}>Earn & Save</Typography>              
      </Grid>
      </Grid>
      <Grid item xs={12} style={{paddingTop:'8vh',paddingRight:'18vh'}} align='center'>
      <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',fontSize:'20px'}}>
        Every dollar in your Dharma account is earning 0.7% APR —<br/> and you can withdraw it anytime; 24/7/365.
      </Typography> 
      </Grid> */}
    
  </Grid>
  <Grid container xs={12}style={{marginTop:'5vh', zIndex:'10'}}>
    {/* <Grid container xs={12} align='center' justify='space-evenly'>
      <Grid container xs={5} align='center' style={{zIndex:'20',paddingRight:'17vh',marginTop:'-20vh'}}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Typography className='countMobile'>
          Earning 0.7% APR
        </Typography>  
        <CountUp
          className={classes.CountUp} 
          start={500.0100000} 
          decimals={6} 
          end={500.999999} 
          duration={1000000} 
        />
      </Grid>
    </Grid> */}
  </Grid>
  <Grid container align='center' xs={12} style={{marginTop:'5vh'}}>
    <Grid item direction="column" xs={6} align="right" style={{paddingRight:'15vh'}}>
      <Typography className={classes.SendAndReceive}>
        Send & Receive
      </Typography>
    </Grid>
    <Grid item xs={6} direction="column" align='left' style={{paddingLeft:'20vh'}}>
      <Typography className={classes.SendAndReceive}>
        Earn & Save  
      </Typography>
    </Grid>
  </Grid>
  <Grid container align='center' xs={12}>
    <Grid item direction="column" xs={6} align="right" style={{paddingLeft:'18vh',paddingTop:'5vh'}}>
        <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',textAlign:'center',fontSize:'20px'}}>
          Send USD to your friends and family anywhere in the world —<br/>
          even if they don’t have a bank account.
        </Typography>
    </Grid>
    <Grid item xs={6} direction="column" align='center' style={{paddingRight:'18vh',paddingTop:'5vh'}}>
      <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',fontSize:'20px'}}>
        Every dollar in your Dharma account is earning 0.7% APR —<br/> 
        and you can withdraw it anytime; 24/7/365.
      </Typography>
    </Grid>
  </Grid>
  <Grid container xs={12} align='center' style={{marginTop:'80px'}}>
    <Grid item xs={12} align='center'>
      <Button 
      style={{height:'6vh',borderRadius:'20px'}}
        variant="contained" 
        color="primary" 
        className={classes.VideoButton}
      >
        <svg width="15" align='center' height="15" style={{marginRight:'1vh'}} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="sc-bZQynM iJaZLJ"><path d="M1 2.76619V11.2338C1 12.0111 1.84797 12.4912 2.5145 12.0913L9.57084 7.85749C10.2182 7.46909 10.2182 6.53091 9.57084 6.14251L2.5145 1.9087C1.84797 1.50878 1 1.9889 1 2.76619Z" stroke="url(#paint0_linear)" stroke-width="2"></path><defs><linearGradient id="paint0_linear" x1="11" y1="1" x2="7.04888" y2="14.5814" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
        Watch our video
      </Button>
    </Grid>
  </Grid>
  <Grid container xs={12} style={{marginTop:'10vh'}} alignItems='center' justify='space-evenly'>
    <Grid item lg={3} sm={12} align='center'>
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM fWtrRV"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34314 0 3V21C0 22.6569 1.34315 24 3 24H29C30.6569 24 32 22.6569 32 21V3C32 1.34315 30.6569 0 29 0H3ZM2 3C2 2.44772 2.44771 2 3 2H29C29.5523 2 30 2.44772 30 3V5H2V3ZM2 11V21C2 21.5523 2.44772 22 3 22H29C29.5523 22 30 21.5523 30 21V11H2Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="32" y1="3.41651e-07" x2="26.8145" y2="28.5189" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
      <Typography style={{fontWeight:'500',fontSize:'18px'}}>
        Easy as 1, 2, 3...
      </Typography>
      <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)'}}>
        Connect your debit card, tap a button, and your money
        is uploaded to the Internet.
      </Typography>
    </Grid>
    <Grid item lg={3} sm={12} align='center'>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM lJVJ"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2ZM0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM16.8281 18.2423C15.5419 20.1837 15.754 22.8251 17.4645 24.5355C19.1749 26.246 21.8163 26.4581 23.7577 25.1719L16.8281 18.2423ZM18.2423 16.8281L25.1719 23.7577C26.4581 21.8163 26.246 19.1749 24.5355 17.4645C22.8251 15.754 20.1837 15.5419 18.2423 16.8281ZM16.0503 25.9497C13.3166 23.2161 13.3166 18.7839 16.0503 16.0503C18.7839 13.3166 23.2161 13.3166 25.9497 16.0503C28.6834 18.7839 28.6834 23.2161 25.9497 25.9497C23.2161 28.6834 18.7839 28.6834 16.0503 25.9497ZM24.7071 4.70711C25.0976 4.31658 25.0976 3.68342 24.7071 3.29289C24.3166 2.90237 23.6834 2.90237 23.2929 3.29289L3.29289 23.2929C2.90237 23.6834 2.90237 24.3166 3.29289 24.7071C3.68342 25.0976 4.31658 25.0976 4.70711 24.7071L24.7071 4.70711Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="28" y1="3.98593e-07" x2="20.1296" y2="32.4639" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
      <Typography style={{fontWeight:'500',fontSize:'18px'}}>Zero Fees, Zero Surprises</Typography>
      <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)'}}>No deposit fees, no withdrawal fees, no transfer fees — Dharma is 100% free.</Typography>
    </Grid>
    <Grid item lg={3} sm={12} align='center'>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM dRSHTE"><path d="M6 5H26M6 5V10M6 5H4H26M26 5V10M26 5H28M6 10V31H26V10M6 10H1V1H31V10H26M10 21V24C10 25.6569 11.3431 27 13 27H19C20.6569 27 22 25.6569 22 24V21M23 14.5C23 17.5376 19.866 20 16 20C12.134 20 9 17.5376 9 14.5C9 11.4624 12.134 9 16 9C19.866 9 23 11.4624 23 14.5Z" stroke="url(#paint0_linear)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><defs><linearGradient id="paint0_linear" x1="31" y1="1" x2="22.5674" y2="35.7828" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>  
      <Typography style={{fontWeight:'500',fontSize:'18px'}}>Withdraw Anytime — 24/7/365</Typography>
      <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)'}}>Withdraw money directly to over 11,500 U.S. banks and credit unions.</Typography>
    </Grid>
  </Grid>
  <Grid container xs={12} style={{marginTop:'10vh'}}   direction="row" justify="space-evenly" alignItems="center">
            <Grid container lg={3} sm={12} align='center'>
            <Grid item xs={12} align='center'>
             <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM gOAebT"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.12292C14.3758 2.52255 12.7922 3.8928 11.5076 6.17655C11.1912 6.73903 10.8984 7.34876 10.633 8H16V2.12292ZM9.76446 5.19603C9.28388 6.05041 8.85673 6.99025 8.49049 8H4.9989C6.5703 5.90795 8.67597 4.24015 11.1134 3.19916C10.6211 3.80376 10.17 4.47504 9.76446 5.19603ZM7.86948 10H3.73009C2.77228 11.812 2.17473 13.8438 2.0328 16H7.01672C7.08788 13.8778 7.38426 11.8525 7.86948 10ZM16 10H9.94346C9.4235 11.807 9.09564 13.8365 9.01791 16H16V10ZM18 16V10H24.0565C24.5765 11.807 24.9044 13.8365 24.9821 16H18ZM26.9833 16C26.9121 13.8778 26.6157 11.8525 26.1305 10H30.2699C31.2277 11.812 31.8253 13.8438 31.9672 16H26.9833ZM25.5095 8H29.0011C27.4297 5.90795 25.324 4.24015 22.8866 3.19916C23.3789 3.80376 23.83 4.47505 24.2355 5.19603C24.7161 6.05041 25.1433 6.99025 25.5095 8ZM18 8H23.367C23.1016 7.34876 22.8088 6.73903 22.4924 6.17655C21.2078 3.8928 19.6242 2.52255 18 2.12292V8ZM17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0ZM16 18H9.01791C9.09564 20.1635 9.4235 22.193 9.94346 24H16V18ZM16 26H10.633C10.8984 26.6512 11.1912 27.261 11.5076 27.8234C12.7922 30.1072 14.3758 31.4774 16 31.8771V26ZM7.86948 24C7.38426 22.1475 7.08788 20.1222 7.01672 18H2.0328C2.17473 20.1562 2.77228 22.188 3.73009 24H7.86948ZM4.9989 26H8.49049C8.85673 27.0098 9.28388 27.9496 9.76446 28.804C10.17 29.525 10.6211 30.1962 11.1134 30.8008C8.67598 29.7599 6.5703 28.092 4.9989 26ZM18 26H23.367C23.1016 26.6512 22.8088 27.261 22.4924 27.8234C21.2078 30.1072 19.6242 31.4775 18 31.8771V26ZM24.0565 24H18V18H24.9821C24.9044 20.1635 24.5765 22.193 24.0565 24ZM25.5095 26C25.1433 27.0098 24.7161 27.9496 24.2355 28.804C23.83 29.525 23.3789 30.1962 22.8866 30.8008C25.324 29.7599 27.4297 28.092 29.0011 26H25.5095ZM30.2699 24H26.1305C26.6157 22.1475 26.9121 20.1222 26.9833 18H31.9672C31.8253 20.1562 31.2277 22.188 30.2699 24Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="34" y1="4.84006e-07" x2="24.4431" y2="39.4205" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
              </Grid>
              <Grid item xs={12}>
              <Typography style={{fontWeight:'500',fontSize:'18px'}}>Borderless, Global Accessibility</Typography>
              </Grid>
              <Grid item xs={12}>
              <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)',marginBottom:'10vh'}}>No U.S. bank account?  No problem — deposit and withdraw using cryptocurrencies from anywhere in the world.</Typography>
              </Grid>
            </Grid>
            <Grid item lg={3} sm={12} align='center' style={{marginTop:'-4vh'}}>
            <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM gVeumD"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V12H7V7ZM19 7V12H21C22.6569 12 24 13.3431 24 15V28C24 29.6569 22.6569 31 21 31H3C1.34314 31 0 29.6569 0 28V15C0 13.3431 1.34315 12 3 12H5V7C5 3.13401 8.13401 0 12 0C15.866 0 19 3.13401 19 7ZM2 15C2 14.4477 2.44772 14 3 14H6H18H21C21.5523 14 22 14.4477 22 15V28C22 28.5523 21.5523 29 21 29H3C2.44772 29 2 28.5523 2 28V15ZM11 21.7324C10.4022 21.3866 10 20.7403 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 20.7403 13.5978 21.3866 13 21.7324V25C13 25.5523 12.5523 26 12 26C11.4477 26 11 25.5523 11 25V21.7324Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="24" y1="4.413e-07" x2="13.1475" y2="34.6563" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
              <Typography style={{fontWeight:'500',fontSize:'18px'}}>Hyper-Secure, Non-Custodial</Typography>
              <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)'}}>Your money is stored in a hyper-secure, non-custodial cryptocurrency wallet. Learn more.</Typography>
            </Grid>
                <Grid item xs={3} align='center'>
              <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5vh'}} class="sc-bZQynM jfVfrS"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.1038 20 15.039 19.2781 16.5715 18.0686C16.3154 17.7636 16.0756 17.4444 15.8534 17.1125C15.8514 17.1096 15.8495 17.1067 15.8476 17.1037C14.7283 15.4284 14.0561 13.4277 14.0034 11.2743C14.0011 11.1831 14 11.0917 14 11C14 10.8448 14.0032 10.6904 14.0096 10.5367C14.0959 8.45522 14.7611 6.52246 15.8476 4.89623C15.8495 4.89332 15.8514 4.89042 15.8534 4.88752C16.0756 4.55558 16.3154 4.23643 16.5715 3.93139C15.039 2.72185 13.1038 2 11 2ZM17.51 6.00805C16.6335 7.32028 16.0932 8.87514 16.011 10.5511C16.0037 10.6997 16 10.8494 16 11C16 11.1879 16.0057 11.3744 16.0171 11.5593C16.1171 13.1931 16.6527 14.7086 17.51 15.9919C17.5118 15.9946 17.5135 15.9972 17.5153 15.9998C17.6671 16.2265 17.8288 16.4459 18 16.6574C19.2508 15.1116 20 13.1433 20 11C20 8.85669 19.2508 6.88837 18 5.34264C17.8288 5.55413 17.6671 5.77351 17.5153 6.00016C17.5135 6.0028 17.5118 6.00543 17.51 6.00805ZM11 22C13.6593 22 16.0981 21.0564 18 19.4857C18.2842 19.7203 18.5804 19.941 18.8875 20.1466C19.3465 20.4539 19.9676 20.3309 20.2748 19.872C20.5821 19.413 20.4591 18.7919 20.0002 18.4847C19.804 18.3534 19.6133 18.2146 19.4285 18.0687C21.0334 16.157 22 13.6914 22 11C22 8.30863 21.0334 5.84302 19.4285 3.93134C19.6133 3.78543 19.804 3.64662 20.0002 3.51531C20.4591 3.20807 20.5821 2.58696 20.2748 2.12803C19.9676 1.6691 19.3465 1.54613 18.8875 1.85338C18.5804 2.059 18.2842 2.27967 18 2.51434C16.0981 0.943643 13.6593 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM22.8543 0.209353C23.5491 0.0719053 24.2666 0 25 0C25.7334 0 26.4509 0.0719053 27.1457 0.209352C27.6875 0.316534 28.0398 0.842625 27.9326 1.38441C27.8254 1.92619 27.2993 2.27851 26.7576 2.17133C26.1899 2.05903 25.6023 2 25 2C24.3977 2 23.8101 2.05903 23.2424 2.17133C22.7007 2.27851 22.1746 1.92619 22.0674 1.38441C21.9602 0.842625 22.3125 0.316534 22.8543 0.209353ZM29.7252 2.12803C30.0324 1.66909 30.6535 1.54613 31.1125 1.85338C32.3116 2.65618 33.3438 3.68839 34.1466 4.88752C34.4539 5.34645 34.3309 5.96756 33.872 6.27481C33.413 6.58206 32.7919 6.45909 32.4847 6.00016C31.8273 5.01827 30.9817 4.17268 29.9998 3.51531C29.5409 3.20807 29.4179 2.58696 29.7252 2.12803ZM34.6156 8.06739C35.1574 7.96021 35.6835 8.31253 35.7906 8.85431C35.9281 9.54909 36 10.2666 36 11C36 11.7334 35.9281 12.4509 35.7906 13.1457C35.6835 13.6875 35.1574 14.0398 34.6156 13.9326C34.0738 13.8254 33.7215 13.2993 33.8287 12.7576C33.941 12.1899 34 11.6023 34 11C34 10.3977 33.941 9.81008 33.8287 9.24245C33.7215 8.70066 34.0738 8.17457 34.6156 8.06739ZM33.872 15.7252C34.3309 16.0324 34.4539 16.6535 34.1466 17.1125C33.3438 18.3116 32.3116 19.3438 31.1125 20.1466C30.6535 20.4539 30.0324 20.3309 29.7252 19.872C29.4179 19.413 29.5409 18.7919 29.9998 18.4847C30.9817 17.8273 31.8273 16.9817 32.4847 15.9998C32.7919 15.5409 33.413 15.4179 33.872 15.7252ZM22.0674 20.6156C22.1746 20.0738 22.7007 19.7215 23.2424 19.8287C23.8101 19.941 24.3977 20 25 20C25.6023 20 26.1899 19.941 26.7576 19.8287C27.2993 19.7215 27.8254 20.0738 27.9326 20.6156C28.0398 21.1574 27.6875 21.6835 27.1457 21.7906C26.4509 21.9281 25.7334 22 25 22C24.2666 22 23.5491 21.9281 22.8543 21.7906C22.3125 21.6835 21.9602 21.1574 22.0674 20.6156Z" fill="url(#paint0_linear)"></path><defs><linearGradient id="paint0_linear" x1="36" y1="3.1318e-07" x2="32.0848" y2="26.4265" gradientUnits="userSpaceOnUse"><stop offset="0.0288666" stop-color="#FEA41C"></stop><stop offset="0.223691" stop-color="#FF5F61"></stop><stop offset="0.408517" stop-color="#FF2FA9"></stop><stop offset="0.628457" stop-color="#FE1CD5"></stop><stop offset="0.733043" stop-color="#CD1CEE"></stop><stop offset="0.864847" stop-color="#8C23F9"></stop><stop offset="0.96226" stop-color="#4635FF"></stop></linearGradient></defs></svg>
              <Typography style={{fontWeight:'500',fontSize:'18px',}}>Radical Transparency</Typography>
              <Typography style={{fontSize:'16px',fontWeight:'400',marginTop:'26px',color:'rgb(110, 120, 152)'}}>Your money is managed on the Ethereum blockchain through 100% open-source, independently audited code.</Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{marginTop:'20vh'}} align='center'>
            <Grid item xs={12}><Typography style={{color:'rgb(31, 42, 75)',fontSize:'36px',fontWeight:'600'}}>We're backed by the best</Typography></Grid>
          </Grid>
          <Grid container xs={12} style={{marginTop:'10vh'}}>
            <Grid item xs={0}/>
            <Grid container xs={12} 
              style={{
                borderRadius:'25px',
            
                background:'linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 18.08%, rgb(255, 46, 93) 49.91%, rgb(255, 200, 7) 87.53%, rgb(230, 185, 116) 122.25%, rgb(230, 185, 116) 122.25%)',
                height:'95vh',
                marginLeft:'10vh',
                marginRight:'10vh'
              }}>
              <Grid item xs={12} align='center' style={{marginTop:'26vh',lineHeight:'10px'}}><Typography style={{color:'white',fontSize:'66px',fontWeight:'600'}}>Start saving today.</Typography></Grid>
              <Grid item xs={12} align='center' style={{marginTop:'-12vh'}}><Typography style={{color:'white',fontSize:'20px',lineHeight:'1.6',fontWeight:'500'}}>Join thousands of people earning<br/> interest on Dharma today</Typography></Grid>
              <Grid item xs={3}/>
              <Grid item xs={3} align='center'style={{marginTop:'-15vh'}}><ButtonApple/></Grid>
              <Grid item xs={3} align='center'style={{marginTop:'-15vh'}}><Button variant="contained" color="primary" 
                style={{
                  background:'rgb(31, 42, 75)',
                  color:'white',
                  width:'200px',
                  zIndex:'4',
                  height:'85px',
                  fontWeight:'600',
                  borderRadius:'15px'
                  }}
                  ><svg style={{width:'40px',color:'white',zIndex:'20'}} width="2.3px,4px" height="3.5px,4px" viewBox="0 0 32 35" fill="white" xmlns="http://www.w3.org/2000/svg" class="sc-bZQynM dQJoOP"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.93205 0.847113C0.542115 1.2669 0.316895 1.90833 0.316895 2.7479V32.5258C0.316895 33.3653 0.542115 34.0068 0.945496 34.4098L1.0497 34.5004L17.7497 17.8165V17.4437L1.03626 0.756439L0.93205 0.847113Z" fill="white"></path><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M23.3063 23.3946L17.7363 17.8299V17.4404L23.3063 11.8757L23.4274 11.9496L30.0159 15.6907C31.9017 16.7519 31.9017 18.5049 30.0159 19.5796L23.4274 23.3207L23.3063 23.3946Z" fill="white"></path><path opacity="0.9" fill-rule="evenodd" clip-rule="evenodd" d="M23.4268 23.3207L17.7358 17.6352L0.931641 34.4232C1.5468 35.0814 2.57878 35.1553 3.73177 34.5139L23.4268 23.3207Z" fill="white"></path><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M23.4268 11.9496L3.73177 0.773236C2.57878 0.115013 1.54343 0.205687 0.931641 0.86391L17.7358 17.6352L23.4268 11.9496Z" fill="white"></path><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M23.3061 23.1998L3.74545 34.3023C2.65296 34.9303 1.67812 34.8866 1.04952 34.3157L0.945312 34.4198L1.04952 34.5105C1.67812 35.0781 2.65296 35.1251 3.74545 34.4971L23.4405 23.3207L23.3061 23.1998Z" fill="white" fill-opacity="0.2"></path></svg>
                  
                  <Typography style={{fontSize:'15px',color:'white',paddingLeft:'3vh',textAlign:'left'}}> 
                   Get it on<br/><b>Google Play</b>
                  </Typography>
                  
              </Button></Grid>
              <Grid item xs={3}/>
            </Grid>
            <Grid item xs={0}/>
          </Grid>
          <Grid container xs={12} align='center' style={{marginTop:'8vh'}}>
            <Grid item xs={2}/>
            <Grid item xs={8} align='center'>
              
              <Grid container xs={12}>
                <Grid item xs={3}/>
                <Grid
                  container
                  xs={6}
                  style={{ marginTop: "2vh" }}
                  align="center"
                  justify="space-evenly"
                >
                  <Grid item xs={2}>
                  <IconButton>
                    <Typography
                      style={{
                        fontSize: "14px",
                        marginTop: "-2.4vh",
                        opactiy: "0.8",
                        color: "#273253",
                        fontWeight:'450'
                      }}
                      onMouseEnter={mouse10}
                      onMouseLeave={mouseout10}
                      id="colorstext10"
                    >
                      {" "}
                      Twitter
                    </Typography>
                  </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                  <IconButton>
                    <Typography
                      style={{
                        color: "rgb(110, 120, 152)",
                        fontSize: "15px",
                        marginTop: "-2.4vh",
                        opactiy: "0.8",
                        fontWeight:'450'
                      }}
                      onMouseEnter={mouse11}
                      onMouseLeave={mouseout11}
                      id="colorstext11"
                    >
                      {" "}
                      Careers
                    </Typography>
                  </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                  <IconButton>
                    <Typography
                      style={{
                        color: "rgb(110, 120, 152)",
                        fontSize: "15px",
                        marginTop: "-2.4vh",
                        opactiy: "0.8",
                        fontWeight:'450'
                      }}
                      onMouseEnter={mouse12}
                      onMouseLeave={mouseout12}
                      id="colorstext12"
                    >
                      Blog
                    </Typography>
                  </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                  <IconButton>
                    <Typography
                      style={{
                        color: "rgb(110, 120, 152)",
                        fontSize: "15px",
                        marginTop: "-2.4vh",
                        fontWeight:'450'
                      }}
                      onMouseEnter={mouse13}
                      onMouseLeave={mouseout13}
                      id="colorstext13"
                    >
                      Discord
                    </Typography>
                  </IconButton>
                  </Grid>
                  <Grid item xs={2}>
                  <IconButton>
                    <Typography
                      style={{
                        color: "rgb(110, 120, 152)",
                        fontSize: "15px",
                        marginTop: "-2.4vh",
                        opactiy: "0.8",
                        fontWeight:'450'
                      }}
                      onMouseEnter={mouse14}
                      onMouseLeave={mouseout14}
                      id="colorstext14"
                    >
                      Terms
                    </Typography>
                  </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <div style={{background:'silver',width:'100vh',marginTop:'10vh',height:'.1vh',opacity:'0.5'}}/>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{marginTop:'10vh'}}>
            <Grid item xs={3}/>
            <Grid item xs={6} align='center'>
              <Typography style={{color:'rgb(110, 120, 152)',fontSize:'14px',fontWeight:'500',lineHeight:'1.6'}}>Digital currency is not legal tender, is not backed by the government, and digital currency accounts and <br/> value balances on Dharma are not subject to Federal Deposit Insurance Corporation or Securities <br/> Investor Protection Corporation protections. Dharma is not a bank and does not offer fiduciary services. <br/> The interest rates reflected on this page are as of the current date and time, and may change at any time,<br/>before or after the account is opened on Dharma.</Typography>
            </Grid>
            <Grid item xs={3}/>
          </Grid>
    </Grid>
        
  );
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
