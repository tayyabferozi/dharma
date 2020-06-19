import React from 'react';
import { makeStyles } from '@material-ui/styles';
import '../../App.css';
import { Landingpage } from './components';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <div style={{ backgroundColor: 'white' }}>
      <Landingpage />
=======
    <div style={{}}>
    <Landingpage/>
    
>>>>>>> 1ed8d2bbcfe5c5aa263733fe2ee8abd114c66217
    </div>
  );
};

export default Dashboard;
