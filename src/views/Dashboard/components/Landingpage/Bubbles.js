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

const Bubbles = () => {
    return (
        <div id="bubbles" style={{zIndex:"-10"}} style={{borderRadius:'24px',marginTop:'0vh',zIndex:'-10'}}>
            
         <div class="bubblex2 x2" style={{padding:'2px',zIndex:'1',animationDelay:'0'}}>
         <div class="items">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitters'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
        </div>
              
        <div class="bubblex3 x3" style={{padding:'2px',zIndex:'1',animationDelay:'4s'}}>
        <div class="items">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitters'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
        </div>
        <div class="bubblex4 x4" style={{padding:'2px',zIndex:'1',animationDelay:'14s'}}>
        <div class="items">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitters'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
        </div>
        <div class="bubblex5 x5" style={{padding:'2px',zIndex:'0',animationDelay:'10s'}}>
           <div id="outerContainer">
            <div id="container">
              <div class="item">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitter'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
              <div class="circle c3"></div>
            </div>
          </div>
        </div>
        <div class="bubblex6 x6" style={{padding:'2px',zIndex:'0',animationDelay:'14s'}}>
        <div class="items">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitters'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
        </div>
        <div class="bubblex7 x7" style={{padding:'2px',zIndex:'0',animationDelay:'8s'}}>
        <div class="items">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitters'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
        </div>
        
        
        
        <div class="bubblex8 x8" style={{padding:'2px',zIndex:'0',animationDelay:'2s',marginTop:'50px'}}>
           <div id="outerContainer">
            <div id="container">
              <div class="item">
              <img width='40' src="https://d33wubrfki0l68.cloudfront.net/ro/people/brett-goulder/assets/profile/dc2c22ae34bfdf6fec64a3b04c8e9d8130fa47b4/circular-photo.png" />
              
              </div>
              <div class='twitter'>
                <img src="https://images.vexels.com/media/users/3/137419/isolated/preview/b1a3fab214230557053ed1c4bf17b46c-twitter-icon-logo-by-vexels.png"></img>
              </div>
              <div class="circle c3"></div>
            </div>
          </div>
        </div>
            </div>
    );
}
export default Bubbles;