import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import Accounts from './Accounts';
import JournalEntries from './JournalEntries';
import Vendors from './Vendors';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LedgerPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(`Switching to tab: ${newValue}`); // Logging tab switch
  };

  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="ledger tabs">
          <Tab label="Accounts" {...a11yProps(0)} />
          <Tab label="Journal Entries" {...a11yProps(1)} />
          <Tab label="Vendors" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Accounts />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JournalEntries />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Vendors />
      </TabPanel>
    </>
  );
};

export default LedgerPage;