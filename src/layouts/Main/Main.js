import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import Background from "../../assets/bg_s_i.png";
import "../../App.css";
import { Sidebar, Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  Background: {
    opacity:'0.5'
  }  
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
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
