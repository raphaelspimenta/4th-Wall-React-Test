import * as yup from 'yup';

export const validationSchema = yup.object({
  firstName: yup
    .string('Enter the first name')
    .min(2, 'The first name should be of minimum 2 characters length')
    .required('First name is required'),
  lastName: yup.string('Enter the last name').required('Last name is required'),
  locationId: yup.string('Enter the location').required('Location is required'),
  phone: yup.string('Enter the phone number').required('Phone is required'),
});
