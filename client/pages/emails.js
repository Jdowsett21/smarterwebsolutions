import React from 'react';
import { Form, Formik, useField } from 'formik';
import { connect } from 'react-redux';
import FormInput from '../common/FormInput.js';
import { setEmailInfo } from '../actions/EmailActions';
const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  // touched is clicked into field
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <FormInput
      {...field}
      helpertext={errorText}
      modification='--project'
      error={errorText ? 'true' : 'false'}
      form='project__'
    />
  );
};

function Email({ setEmailInfo }) {
  return (
    <div className='contact-info__form' id='contact-form'>
      <Formik
        initialValues={{
          firmName: '',
          firstName: '',
          email: '',
          url: '',
        }}
        onSubmit={(values) => {
          setEmailInfo(values);
        }}
      >
        {() => (
          <Form>
            <div className='project__form-area'>
              <label className='project__form-label'>Firm Name</label>
              <MyTextField
                ariaLabel='firmName'
                name='firmName'
                type='text'
                required
                placeholder='firmName'
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>firstName &#42;</label>
              <MyTextField
                id='firstName'
                name='firstName'
                type='firstName'
                placeholder='firstName'
                ariaLabel='firstName'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>url</label>
              <MyTextField
                ariaLabel='url'
                name='url'
                type='text'
                placeholder='url'
                required
              />
            </div>
            <div className='project__form-area'>
              <label className='project__form-label'>email</label>
              <MyTextField
                ariaLabel='email'
                name='email'
                type='text'
                placeholder='email'
                required
              />
            </div>
            <button type='submit' text='Submit' className='project__button'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default connect(null, { setEmailInfo })(Email);
