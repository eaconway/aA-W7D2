export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
// import * as APIUtil from './../util/todo_api_util.js';

export const receiveErrors = (errors) => (
  {
    type: RECEIVE_ERRORS,
    errors
  }
);

export const clearErrors = (errors) => (
  {
    type: CLEAR_ERRORS,
    errors
  }
);
