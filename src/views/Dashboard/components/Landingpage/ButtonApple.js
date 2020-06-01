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

const ButtonApple = () => {
    return (
        <Button variant="contained" color="primary" 
                style={{
                  zIndex:'4',
                  background:'rgb(31, 42, 75)',
                  fontSize:'12px',
                  fontWeight:'600',
                  height:'85px',
                  width:'200px',
                  borderRadius:'10px'
                }}
              >
                  <AppleIcon style={{fontSize:'50px'}} />
                    <Typography style={{color:'white',fontSize:'11px',fontWeight:'bold',lineHeight:'25px'}}>
                      Download on the
                      <br/>
                      <span style={{fontWeight:'bold',fontSize:'20px',textTransform:'none'}}>
                        App Store
                      </span>
                    </Typography> 
                    <br/> 
                </Button>
    );
}
export default ButtonApple;