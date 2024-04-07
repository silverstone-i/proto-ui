import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('./vendors.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Vendors data fetched successfully');
        // Assuming the presence of a 'status' field in each invoice to determine if it's paid or unpaid
        const filteredData = data.map(vendor => ({
          ...vendor,
          invoices: vendor.invoices.filter(invoice => filter === 'all' || invoice.status === filter),
        }));
        setVendors(filteredData);
      })
      .catch(error => {
        console.error('Failed to fetch vendors data:', error);
        console.error(error.toString()); // Logging the complete error message and trace
      });
  }, [filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    console.log(`Filter changed to: ${event.target.value}`); // Logging filter change
  };

  return (
    <Container>
      <Typography variant="h6">Vendors</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="invoice-filter-label">Invoice Status</InputLabel>
        <Select
          labelId="invoice-filter-label"
          id="invoice-filter"
          value={filter}
          label="Invoice Status"
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="paid">Paid</MenuItem>
          <MenuItem value="unpaid">Unpaid</MenuItem>
        </Select>
      </FormControl>
      <List>
        {vendors.map((vendor) => (
          <ListItem key={vendor['vendor-id']}>
            <ListItemText 
              primary={vendor['address']} 
              secondary={`Total Open Invoices: ${vendor.invoices.filter(invoice => invoice.status === 'unpaid').length}`} 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Vendors;