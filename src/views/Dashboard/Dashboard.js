import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import "../../App.css"
import {
  Landingpage  
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div style={{}}>
    <Landingpage/>
    
    </div>
  );
};

export default Dashboard;
