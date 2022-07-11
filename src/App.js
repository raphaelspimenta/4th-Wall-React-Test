import { Menu } from '@mui/icons-material';
import { AppBar, Button, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.scss';
import { getContacts, getLocations } from './async';

function App() {
  const [contacts, setContacts] = useState([])
  const [locations, setLocations] = useState([])

  const refetch = false;

  useEffect(() => {
    getContacts().then(res => {
      setContacts(res.data);
    })

    getLocations().then(res => {
      setLocations(res.data);
    })
  }, [refetch]);

  return (
    <>
      <AppBar position='static' className='root'>
        <Toolbar>
          <IconButton edge='start' className='menuButton' color='inherit' aria-label='menu'>
            <Menu />
          </IconButton>
          <Typography variant='h6' className='title'>Contacts</Typography>
          <Button color='inherit'>New Contact</Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} className='contactsGrid'>
      {contacts.map(contact => (
          <Grid key={contact.id} item xs={12}>
            <Paper className='paper'>{`${contact.firstName} ${contact.lastName} - ${locations.length ? locations.find(loc => loc.id === contact.locationId).name : ''}`}</Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
