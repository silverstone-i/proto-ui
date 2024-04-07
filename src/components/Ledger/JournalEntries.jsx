import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, TextField } from '@mui/material';

const JournalEntries = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    fetch('/journalEntries.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setJournalEntries(data))
      .catch(error => {
        console.error('Failed to load journal entries:', error);
      });
  }, []);

  const lastEntry = journalEntries[journalEntries.length - 1] || {};

  return (
    <Container>
      <Typography variant="h6">Last Journal Entry</Typography>
      <TextField label="Date" variant="outlined" margin="normal" fullWidth value={lastEntry.Date || ''} disabled />
      <TextField label="Account" variant="outlined" margin="normal" fullWidth value={lastEntry.Account || ''} disabled />
      <TextField label="Debit" variant="outlined" margin="normal" fullWidth value={lastEntry.Debit || ''} disabled />
      <TextField label="Credit" variant="outlined" margin="normal" fullWidth value={lastEntry.Credit || ''} disabled />
      <Button variant="contained" disabled>Browse</Button>
      <Button variant="contained" disabled>Edit</Button>
    </Container>
  );
};

export default JournalEntries;