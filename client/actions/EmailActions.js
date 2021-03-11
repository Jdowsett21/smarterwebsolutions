import {
  EMAIL_SUCCESS,
  APPLICATION_REDIRECT_RESET,
  CONTACT_FAILURE_RESET,
  APPLICATION_FAILURE_RESET,
  CONTACT_REDIRECT_RESET,
  EMAIL_FAILURE,
  APPLICATION_SUCCESS,
  APPLICATION_FAILURE,
  APPLICATION_ON_SUCCESS,
  CONTACT_ON_SUCCESS,
} from './types';
import { publicFetch } from '../utils/publicFetch';
import FormData from 'form-data';

export const setEmailInfo = (info) => async (dispatch) => {
  const { data } = await publicFetch.post(`/emails/email`, info);
};
export const submitEmail = (info) => async (dispatch) => {
  try {
    const { data } = await publicFetch.post('/emails', info);
    dispatch({
      type: EMAIL_SUCCESS,
      payload: data,
    });
    setTimeout(() => {
      dispatch({
        type: CONTACT_ON_SUCCESS,
      });
    }, 700);
  } catch (err) {
    dispatch({
      type: EMAIL_FAILURE,
    });
  }
};

export const submitApplication = (values) => async (dispatch) => {
  const formData = new FormData();

  values.files.forEach((file, i) => formData.append(`file${i}`, file));

  formData.append('values', JSON.stringify(values));
  try {
    const { data } = await publicFetch.post('/emails/application', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log(data);
    dispatch({
      type: APPLICATION_SUCCESS,
      payload: data,
    });
    setTimeout(() => {
      dispatch({
        type: APPLICATION_ON_SUCCESS,
      });
    }, 600);
  } catch (err) {
    console.log(err);
    dispatch({
      type: APPLICATION_FAILURE,
    });
  }
};

export const resetApplicationRedirect = (values) => {
  return {
    type: APPLICATION_REDIRECT_RESET,
  };
};

export const resetContactRedirect = (values) => {
  return {
    type: CONTACT_REDIRECT_RESET,
  };
};

export const applicationFailureReset = (values) => {
  return {
    type: APPLICATION_FAILURE_RESET,
  };
};

export const resetContactFailure = (values) => {
  return {
    type: CONTACT_FAILURE_RESET,
  };
};
