import { useMemo } from 'react';

import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Formik } from 'formik';

import { useResource } from '../../store/utils';
import { validationSchema } from './validation.schema';

import './contact-form.scss';

function ContactForm({ initialValues = {}, onSubmit }) {
  const locationsResource = useResource('locations');

  const locationOptions = useMemo(
    () =>
      locationsResource.data?.map((location) => (
        <MenuItem value={location.id}>{location.name}</MenuItem>
      )),
    [locationsResource?.data]
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        touched,
        errors,
        isValid,
      }) => (
        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="First Name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && !!errors.firstName}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && !!errors.lastName}
            helperText={touched.lastName && errors.lastName}
          />
          <Select
            labelId="location-label"
            id="locationId"
            name="locationId"
            label="Location"
            value={values.locationId}
            onChange={handleChange}
          >
            {locationOptions}
          </Select>
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone Number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phone && !!errors.phone}
            helperText={touched.phone && errors.phone}
          />
          <Button
            disabled={!isValid}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default ContactForm;
