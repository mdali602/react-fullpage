import React from 'react';
import { Formik, Form } from 'formik';
import { Col, Grid, Row } from 'react-flexbox-grid';
import * as Yup from 'yup';
import Button from '../../components/Button';
import FormField from '../../components/FormField';
import fields from './fields';
import classes from './signup.scss';

const SignUp = () => {
  return (
    <>
      <div className={classes.fullscreen}>
        <video autoPlay muted loop>
          <source src="/videos/oh_welcome.mp4" type="video/mp4" />
          <track default kind="captions" src="videos/oh_welcome.mp4" />
          oh welcome
        </video>
      </div>
      <div className={classes.formContent}>
        <Grid fluid className={classes.landingGrid}>
          <Row>
            <Col xs={12} mdOffset={4} md={4}>
              <h1>Join as a Teacher</h1>
              <Formik
                initialValues={{
                  first_name: '',
                  last_name: '',
                  number: '',
                  age: '',
                  gender: '',
                  experience: '',
                  qualification: '',
                  affiliation: '',
                  teaching_mode: '',
                  age_group: '',
                  course_type: '',
                  course: '',
                  address: '',
                  languages: '',
                  bio: '',
                  social: '',
                }}
                validationSchema={Yup.object().shape({
                  first_name: Yup.string().required('Required'),
                  last_name: Yup.string().required('Required'),
                  number: Yup.string()
                    .matches(/^[0-9]{10}$/, 'Must be a valid phone number')
                    .required('Required'),
                  age: Yup.string().required('Required'),
                  gender: Yup.string().required('Required'),
                  experience: Yup.string().required('Required'),
                  qualification: Yup.string().required('Required'),
                  affiliation: Yup.string().required('Required'),
                  teaching_mode: Yup.string().required('Required'),
                  age_group: Yup.string().required('Required'),
                  course_type: Yup.string().required('Required'),
                  course: Yup.string().required('Required'),
                  address: Yup.string().required('Required'),
                  languages: Yup.string().required('Required'),
                  bio: Yup.string().required('Required'),
                })}
                onSubmit={(values) => {
                  console.log('TCL: values', values);
                }}
                render={({ values, errors, touched, handleChange, setFieldValue }) => (
                  <Form>
                    {fields.map((field) => (
                      <FormField
                        key={field.name}
                        field={field}
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        setFieldValue={setFieldValue}
                      />
                    ))}
                    <div className={classes.field}>
                      <Button fullWidth btnType="submit" color="white">
                        submit
                      </Button>
                    </div>
                  </Form>
                )}
              />

              <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <iframe
                  width="100%"
                  height="300"
                  src="https://youtube.com/embed/Y3i_qzXE_PQ"
                  title="oh Tour"
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    </>
  );
};

export default SignUp;
