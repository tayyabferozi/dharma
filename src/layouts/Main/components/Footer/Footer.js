import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {AiFillWarning} from 'react-icons/ai'
import { Card, CardContent, Grid, Typography, } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Grid container xs={12} style={{marginTop:'0vh'}}>
      <Grid container xs={12} align='center'>
        <Grid item xs={12}>
          <AiFillWarning style={{fontSize:'25px',color:'rgb(106,87,71)'}}/>
        </Grid>
      </Grid>
      <Grid container xs={12} align='center'>
        
        <Grid item xs={12} align='center' style={{paddingLeft:'0vh'}}>
        <Typography style={{lineHeight:'15px',fontSize:'11px',fontFamily:'Montserrat',fontStyle:'normal',fontWeight:'normal',color:'rgb(106,87,71)'}}>
          
            1. Puede haber contaminación cruzada . 
          <br/>
            2. La responsabilidad en la declaración de 
            <br/>
            alérgenos recae en el restaurante .
          </Typography>
        </Grid>
        </Grid>
      <Grid container xs={12} align='center' style={{marginTop:'4vh',marginBottom:'2vh'}}>
        <Grid item xs={12}>
          <Typography style={{fontFamily:'Montserrat',fontStyle:'normal',fontWeight:'bold',fontStyle:'11px !important',color:'rgb(133,112,94)'}}>
          EtherMenu © 2020
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
