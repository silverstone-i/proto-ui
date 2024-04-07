import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('/accounts.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Accounts data fetched successfully');
        setAccounts(data);
      })
      .catch(error => {
        console.error('Failed to fetch accounts data:', error);
      });
  }, []);

  return (
    <List>
      {accounts.map((account) => (
        <ListItem key={account['account-id']}>
          <ListItemText primary={account['account-name']} secondary={account['account-type']} />
        </ListItem>
      ))}
    </List>
  );
};

export default Accounts;