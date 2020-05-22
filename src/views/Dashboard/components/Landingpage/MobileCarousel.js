import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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

const MobileCarousel = () => {
    return (
        <Carousel dotPosition="left" autoplay style={{textAlign:'center',marginTop:'-30vh',marginLeft:'12vh',zIndex:'32'}}>
        <div style={{}}>
          <img src={require('../../../../assets/carousel1.png')}></img>
        </div>
        <div>
          <img src={require('../../../../assets/carousel2.png')}></img>
        </div>
        <div>
          <img src={require('../../../../assets/carousel3.png')}></img>
        </div>
        <div>
        <img src={require('../../../../assets/carousel1.png')}></img>
        </div>
      </Carousel>
    
    );
}
export default MobileCarousel;