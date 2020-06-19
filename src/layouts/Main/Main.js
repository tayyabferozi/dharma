import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
<<<<<<< HEAD
import { Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({}));
=======
import { useMediaQuery } from '@material-ui/core';
import Background from "../../assets/bg_s_i.png";
import "../../App.css";
import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  Background: {
    opacity:'0.5'
  }  
}));
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
<<<<<<< HEAD
    <div
      style={{ backgroundColor: 'white' }}
      className={clsx({
        [classes.root]: true
      })}>
      <Topbar />

      <main className={classes.content} style={{ backgroundColor: 'white' }}>
=======
    <div className={classes.Background}
    style={{
      backgroundImage:  `linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,.85)), url(${Background})`,
      backgroundPosition: 'center',
    
      backgroundRepeat: 'Repeat',
      width:'100%',
      height:'200%'
      
  }}
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} />
      
      <main className={classes.content} style={{}}>
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
        {children}
        <Footer style={{}} />
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
