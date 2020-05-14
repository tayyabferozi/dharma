import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import "../../../../../src/App.css"
import Button from '@material-ui/core/Button';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import 'antd/dist/antd.css';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Carousel, Radio } from 'antd';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(theme => ({
  
}));

const Landingpage = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
//   let start // set on the first step to the timestamp provided
// const el = document.getElementById('counter') // get the element
// const final = parseInt(el.textContent, 10) // parse out the final number
// const duration = 4000 // duration in ms
// const step = ts => {
//   if (!start) {
//     start = ts
//   }
//   // get the time passed as a fraction of total duration
//   let progress = (ts - start) / duration 

//   el.textContent = Math.floor(progress * final) // set the text
//   if (progress < 1) {
//     // if we're not 100% complete, request another animation frame
//     requestAnimationFrame(step) 
//   }
// }

// // start the animation
// requestAnimationFrame(step);

  return (
    
    <div>
    
    <Grid container xs={12} align="center" style={{ marginTop: "16vh",zIndex:'3',backgroung:'white' }}>
          <Grid item xs={12} align="center">
    <div style={{zIndex:'3'}}>
            <Typography
              style={{
                lineHeight: "83px",
                fontWeight: "600",
                color: "rgb(31, 42, 75)",
                fontSize: "70px"
              }}
            >
              Send money to

            </Typography>
            <Typography
              style={{
                background:
                  "webkit-linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
                lineHeight: "83px",
                backgroundImage:
                  "linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 90%, rgb(255, 46, 93) 120%)",
                color: "transparent",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                fontWeight: "600",
                fontSize: "70px",
                display: "inline"
              }}
            >
              anyone.
            </Typography>
            <Typography
              style={{
                color: "rgb(31, 42, 75)",
                lineHeight: "83px",
                fontWeight: "600",
                display: "inline",
                fontSize: "70px"
              }}
            >
              {" "}
              Earn interest
              <br />
            </Typography>
            <Typography
              style={{
                lineHeight: "83px",
                fontWeight: "600",
                color: "rgb(31, 42, 75)",
                fontSize: "70px",
                display: "inline"
              }}
            >
              {"from "}
            </Typography>

            <Typography
              style={{
                background:
                  "linear-gradient(63.74deg, rgb(255, 25, 247) 0%, rgb(255, 46, 93) 40%, rgb(255, 200, 7) 87.53%, rgb(230, 185, 116) 122.25%, rgb(230, 185, 116) 122.25%) text",
                lineHeight: "83px",
                backgroundImage:
                  "linear-gradient(63.74deg, rgb(255, 25, 247) 0%, rgb(255, 46, 93) 40%, rgb(255, 200, 7) 87.53%, rgb(230, 185, 116) 122.25%, rgb(230, 185, 116) 122.25%)",
                color: "transparent",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                fontWeight: "600",
                fontSize: "70px",
                display: "inline"
              }}
            >
              anywhere.
              <br />
            </Typography>
            </div>
            <Grid item xs={12} style={{ marginTop: "6vh" }}>
              <Typography
                style={{
                  display: "inline",
                  color: "rgb(110, 120, 152)",
                  fontSize: "24px",

                  fontWeight: "400"
                }}
              >
                Dharma is a limitless,borderless way to send and receive USD -
                all while
              </Typography>
              <Typography
                style={{
                  display: "inline",

                  background:
                    "webkit-linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
                  lineHeight: "32px",
                  backgroundImage:
                    "linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 90%, rgb(255, 46, 93) 120%)",
                  color: "transparent",
                  webkitBackgroundClip: "text",
                  backgroundClip: "text",
                  fontWeight: "400",
                  fontSize: "24px"
                }}
              >
                {" earning 0.7% APR"}
              </Typography>
            </Grid>
            <Typography
              style={{
                display: "inline",
                color: "rgb(110, 120, 152)",
                fontSize: "24px",

                fontWeight: "400"
              }}
            >
              You don’t need a bank account to use it, and it’s 100% free to
              use.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={10} />
          <Grid item xs={1} align="center">
            <div id="bubbles" style={{zIndex:"0"}}>
            <div class="bubble x1" style={{border:'2px solid black',padding:'2px',zIndex:'-1'}}>
	

    </div>
              
              <div class="bubble x2" style={{border:'2px solid black',padding:'2px',zIndex:'-1'}}>
	

    </div>
              
              <div class="bubble x3" style={{border:'2px solid black',padding:'2px',zIndex:'-1'}}>
	

  </div>
              <div class="bubble x4" style={{border:'2px solid black',padding:'2px',zIndex:'-1'}}>
	

  </div>
              <div class="bubble x5" style={{border:'2px solid black',padding:'2px',zIndex:'-1'}}>
	

  </div>
            </div>
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={1} style={{marginLeft:'-10vh'}}/>
          <Grid container xs={10}>
            <Grid item xs={6} align='center'>
              <div>
                    <img  src={require('../../../../assets/carouselphone.png')} ></img>
                  {/* <Grid container xs={12}>
                    <Grid item xs={2} style={{marginLeft:'2.5vh'}}/>
                    <Grid item xs={3} align='center'>
                  <Carousel dotPosition='left' style={{borderRadius:'25px',position:'absolute',width:'40vh',marginTop:'-30vh',backgroundImage:'blue'}} dots='false'>
                    <div>
                      <Grid container xs={12} style={{position:'absolute',marginTop:'-20vh'}}>
                        <Grid item xs={0} style={{marginLeft:'2vh'}}/>
                        <Grid item xs={1}>
                        <LocalAtmIcon style={{color:'black',marginTop:'8vh',position:'absolute',fontSize:'35px'}}/>
                        <SupervisedUserCircleIcon style={{position:'absolute',marginTop:'14vh',fontSize:'35px'}} /> 
                        </Grid>
                        <Grid item xs={1}/>
                        <Grid item xs={4} style={{marginTop:'4.5vh'}}>
                        <Typography
              style={{
                background:
                  "webkit-linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
                lineHeight: "1px",
                backgroundImage:
                  "linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 90%, rgb(255, 46, 93) 120%)",
                color: "transparent",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                fontWeight: "600",
                fontSize: "15px",
                display: "inline"
                
              }}
            >
              @Ali
            </Typography>
            <Typography style={{display:"inline",fontSize:'15px',color: "rgb(110, 120, 152)"}}>{' sent'}<br/></Typography>               
            <Typography
              style={{
                background:
                  "webkit-linear-gradient(90deg, rgb(87, 34, 255) 0%, rgb(198, 3, 255) 70%)",
                
                backgroundImage:
                  "linear-gradient(63.74deg, rgb(0, 84, 253) -16.64%, rgb(255, 25, 247) 90%, rgb(255, 46, 93) 120%)",
                color: "transparent",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                fontWeight: "600",
                fontSize: "15px",
                display:'inline'
            
              }}
            >
              @Abdullah
            </Typography>
            <Typography style={{display:"inline",fontSize:'15px',color: "rgb(110, 120, 152)"}}>$400</Typography>
                        
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                  </Carousel>
                  </Grid>
                  </Grid>  */}
                </div>
              
                      </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5} align='center'>
            <img style={{}} width='600px' src={require('../../../../assets/countmobile.png')} ></img>
            </Grid>
          </Grid>
          
          <Grid container xs={12} align='center' style={{marginTop:'-60vh',color:'white'}}>
            <Grid item xs={8} style={{marginLeft:"0vh"}} />
            <Grid item xs={2} align='center'>
              
            <Typography style={{border:'2px solid white',borderRadius:'25px',fontSize:'22px',padding:'4px',color:'white',paddingTop:'2vh',paddingBottom:'2vh'}}>Earning 0.7% APR</Typography>
            
            </Grid>
          </Grid>
          
          <Grid container xs={12} align='center' style={{marginTop:'-40vh',color:'white'}}>
            <Grid item xs={6}/>
            <Grid item xs={6}>
              <Typography style={{Position:'absolute',display:'inline',color:'white',fontSize:'45px'}}>{"$ "}</Typography>
            <CountUp start={500.000000} decimals={6} end={500.999999} duration={1000000} style={{fontSize:'50px'}}></CountUp>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{marginTop:'67px'}}>
            <Grid item xs={6} align='center'>
              <Typography style={{color:'rgb(37, 48, 86)',fontSize:'46px',fontWeight:'600'}}>Send & Receive</Typography>              
            </Grid>
            <Grid item xs={6} align='center'>
              <Typography style={{color:'rgb(37, 48, 86)',fontSize:'46px',fontWeight:'600'}}>Earn & Save</Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} align='center' style={{marginTop:'50px'}}>
          
            <Grid item xs={5} style={{marginLeft:'4vh'}}>
              <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',fontSize:'20px'}}>Send USD to your friends and family anywhere in the world — even if they don’t have a bank account.</Typography>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5} align='center'>
              <Typography style={{lineHeight:'32px',color:'rgb(110, 120, 152)',fontSize:'20px'}}>Every dollar in your Dharma account is earning 0.7% APR —<br/> and you can withdraw it anytime; 24/7/365.</Typography>
            </Grid>
          </Grid>
          <Grid container xs={12} align='center' style={{marginTop:'80px',width:'40px'}}>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" style={{fontSize:'10px', color:'rgb(110, 120, 152)',background:'white'}}><ArrowRightIcon style={{background: "webkit-radial-gradient(33% 100% circle, #515ECF 4%, #9B36B7 30%, #D92E7F 62%, #F15245 85%, #FED373)",
	background: "radial-gradient(circle at 33% 100%, #ff3be7 4%, #ff3be7 28%, #03ffe8 62%, #F15245 85%, #FED373)",
	webkitBackgroundClip: "text",
	webkitTextFillColor: "transparent"
	
                }}/>Watch our video</Button>
            </Grid>
          </Grid>
        </Grid>

    </div> 
  );
};
Landingpage.propTypes = {
  className: PropTypes.string
};

export default Landingpage;
