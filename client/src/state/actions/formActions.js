import { SEND_FORM_LOCATION, EDIT_FORM_LOCATION, DELETE_FORM_LOCATION } from '../types';

export const newLocation = form => ({
  type: SEND_FORM_LOCATION,
  payload: form
});

export const editLocation = form => ({
  type: EDIT_FORM_LOCATION,
  payload: form
});

export const deleteLocation = id => ({
  type: DELETE_FORM_LOCATION,
  payload: id
});
