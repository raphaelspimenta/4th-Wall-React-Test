import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Grid, IconButton, Paper, Typography } from '@mui/material';
import './contact.scss';

function Contact({ contact, locations, onDelete, onEdit }) {
  const name = `${contact.firstName} ${contact.lastName}`;
  const location = locations?.length
    ? locations?.find((loc) => loc.id === contact.locationId).name
    : '';

  return (
    <Grid key={contact.id} item xs={2} sm={4} md={4}>
      <Paper className="paper">
        <Grid container spacing={2} className="contact-info">
          <Grid item xs={9}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h5">{name}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            {location}
          </Grid>
          <Grid item xs={9}>
            {contact?.phone}
          </Grid>
        </Grid>
        <Grid container spacing={1} className="contact-actions">
          <Grid item xs={4}>
            <IconButton onClick={() => onEdit(contact)}>
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton onClick={() => onDelete(contact)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Contact;
