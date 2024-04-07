import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAppContext } from '../context/AppContext';

const Dashboard = () => {
  const { handleSectionSelect } = useAppContext();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          proto-ui
        </Typography>
        <Button color="inherit" onClick={() => handleSectionSelect('ledger')}>Ledger</Button>
        <Button color="inherit" onClick={() => handleSectionSelect('projects')}>Projects</Button>
        <Button color="inherit" onClick={() => handleSectionSelect('contracts')}>Contracts</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Dashboard;