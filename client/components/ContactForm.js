import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { submitEmail } from '../actions/EmailActions.js';
import { toast, ToastContainer } from 'react-toastify';
import MyTextField from '../common/MyTextField';

function ContactForm({
  email: { emailFailure, contactRedirect },
  submitEmail,
}) {
  useEffect(() => {
    async function toastFunction() {
      await require('react-toastify/dist/ReactToastify.css');
    }
    toastFunction();
  });
  const router = useRouter();
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Please enter valid email address')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <>
      {}
      <div className='contact'>
        <div className=''></div>

        <Formik
          initialValues={{ email: '', name: '', subject: '', message: '' }}
          onSubmit={(values) => {
            submitEmail(values);
          }}
          validationSchema={ContactSchema}
        >
          {() => (
            <Form>
              <div className='contact-info__form' id='contact-form'>
                <h2 className='contact-info__form-header'>Contact Us Today</h2>
                <h2 className='contact-info__form-header--secondary'>
                  We would be delighted to hear your ideas and discuss how we
                  can help you!
                </h2>

                <MyTextField
                  name='name'
                  type='text'
                  required
                  placeholder='Name'
                />
                <MyTextField
                  placeholder='Email'
                  id='email'
                  name='email'
                  type='email'
                  required
                />
                <MyTextField
                  placeholder='Subject'
                  name='subject'
                  type='text'
                  required
                />

                <MyTextField
                  placeholder='Message'
                  id='message'
                  name='message'
                  type='text-box'
                  required
                />
                <button
                  type='submit'
                  text='Submit'
                  className='contact-info__button'
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.email,
});
export default connect(mapStateToProps, { submitEmail })(ContactForm);
