import React, { useState } from 'react';
import { Button, FormControl, TextField, styled } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

type FormValues = {
  longUrl: string;
};

type ShortUrlResponse = {
  data: {
    shortUrl: string;
    BASE_URL: string;
  };
};

type LongUrlRequest = {
  longUrl: string;
};

const validationSchema = yup.object().shape({
  longUrl: yup
    .string()
    .url('Please Enter a Valid URL')
    .required('Please Enter a Valid URL')
    .min(6)
});

function UrlForm(): JSX.Element {
  const [shortUrl, setShortUrl] = useState('');
  const [BASE_URL, setBASE_URL] = useState('');

  // this handler makes a request to the api for a shortUrl onClick
  const onSubmitForm = async ({ longUrl }: FormValues, actions: any) => {
    try {
      const { data } = await axios.post<LongUrlRequest, ShortUrlResponse>(
        `/shorturl`,
        {
          longUrl
        }
      );

      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        setBASE_URL(data.BASE_URL);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      actions.resetForm({
        values: {
          longUrl: ''
        }
      });
    }
  };

  // this handler copies the shortUrl to the users clipboard when clicked
  const handleRedirect = async () => {
    const url = `${BASE_URL}/${shortUrl}`;
    navigator.clipboard
      .writeText(url)
      .then(() => alert(`Copied ${url} To the clipboard`))
      .catch((error) => console.log('error', error))
      .finally(() => setShortUrl(''));
  };

  return (
    <Formik
      initialValues={{ longUrl: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitForm}
    >
      {({ handleChange, handleSubmit, values, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <TextInput
              name="longUrl"
              placeholder="Paste URL"
              variant="outlined"
              onChange={handleChange}
              value={values.longUrl}
              error={touched.longUrl && Boolean(errors.longUrl)}
              as={TextField}
            />
            <ErrorMessage component="div" name="longUrl"></ErrorMessage>
          </FormControl>

          <SubmitButton
            type="submit"
            variant="contained"
            size="large"
            color="secondary"
          >
            Shrink
          </SubmitButton>
          <RedirectButton onClick={handleRedirect}>{shortUrl}</RedirectButton>
        </Form>
      )}
    </Formik>
  );
}

const RedirectButton = styled(Button)({
  textTransform: 'none',
  color: '#FFFFFF'
});

const SubmitButton = styled(Button)({
  marginLeft: '1em',
  marginTop: '.5em',
  textTransform: 'none',
  width: '5em',
  borderRadius: '.5em'
});

const TextInput = styled(Field)({
  backgroundColor: '#FFFFFF',
  color: '#3e54a3',
  borderRadius: '.5em',
  width: '40em'
});

export default UrlForm;
