import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AddIcon from '@mui/icons-material/Add';
import { Alert, Button, Grid, Snackbar, Typography } from '@mui/material';

import Contact from '../components/Contact';
import ContactForm from '../components/ContactForm';
import ConfirmDialog from '../components/Dialog/Confirm';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import useAlert from '../hooks/useAlert';
import { actions as contactsActions } from '../store/reducers/contacts/actions';
import { actions as locationsActions } from '../store/reducers/locations/actions';
import { Status } from '../store/types';
import { useResource } from '../store/utils';

import './contacts.scss';

function Contacts() {
  const dispatch = useDispatch();
  const contactsResource = useResource('contacts');
  const locationsResource = useResource('locations');
  const { alertInfo, setAlertInfo } = useAlert('contact', contactsResource);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDeleteContact = () => {
    dispatch(contactsActions.delete(selectedContact));
    setIsDeleteDialogOpen(false);
    setSelectedContact(null);
  };

  const handleSubmitForm = (values) => {
    if (values?.id) {
      dispatch(contactsActions.update(values));
    } else {
      dispatch(contactsActions.create(values));
    }
    setSelectedContact(null);
    setIsFormModalOpen(false);
  };

  useEffect(() => {
    dispatch(locationsActions.load());
    dispatch(contactsActions.load());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (
    contactsResource?.load?.status === Status.pending ||
    locationsResource?.load?.status === Status.pending ||
    contactsResource?.delete?.status === Status.pending ||
    contactsResource?.update?.status === Status.pending ||
    contactsResource?.create?.status === Status.pending
  )
    return <Loader />;

  return (
    <>
      <section className="contacts-container">
        <Grid container spacing={3}>
          <Grid item xs={11}>
            <Typography variant="h4">Contacts List</Typography>
          </Grid>
          <Grid item xs={1} className="add-contact">
            <Button variant="outlined" onClick={() => setIsFormModalOpen(true)}>
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="contacts-grid"
        >
          {contactsResource?.data?.map((contact) => (
            <Contact
              contact={contact}
              locations={locationsResource?.data}
              key={contact?.id}
              onEdit={() => {
                setIsFormModalOpen(true);
                setSelectedContact(contact);
              }}
              onDelete={(contact) => {
                setIsDeleteDialogOpen(true);
                setSelectedContact(contact);
              }}
            />
          ))}
        </Grid>
      </section>
      <Modal
        open={isFormModalOpen}
        title={selectedContact ? 'Edit contact' : 'Create contact'}
        handleClose={() => {
          setIsFormModalOpen(false);
          setSelectedContact(null);
        }}
      >
        <ContactForm
          initialValues={selectedContact || {}}
          onSubmit={handleSubmitForm}
        />
      </Modal>
      <ConfirmDialog
        open={isDeleteDialogOpen}
        title="Delete contact"
        content="Are you sure about that?"
        onClose={() => {
          setIsDeleteDialogOpen(false);
          setSelectedContact(null);
        }}
        onConfirm={handleDeleteContact}
      />
      <Snackbar
        open={alertInfo.isOpen}
        autoHideDuration={6000}
        onClose={() => {
          setAlertInfo({ isOpen: false, message: '' });
          setSelectedContact(null);
        }}
      >
        <Alert severity={alertInfo.severity} sx={{ width: '100%' }}>
          {alertInfo.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Contacts;
