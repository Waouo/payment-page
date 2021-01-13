/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Form, FormGroup, Button, Col } from 'react-bootstrap'
import { useFormik, useField, Formik } from 'formik'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <Form.Control
        className="text-input"
        {...field}
        {...props}
        isValid={meta.touched && !meta.error}
      />
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const MyText = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

// const MyText = ({ label, ...props }) => {
//   const [field, meta] = useField(props)

//   return (
//     <>
//       <Form.Label>{label}</Form.Label>
//       <Form.Control
//         {...field}
//         {...props}
//         isValid={meta.touched && meta.error}
//         isInvalid={meta.touched && meta.error}
//       />
//       {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null}
//       <Form.Control.Feedback>good</Form.Control.Feedback>
//       <Form.Control.Feedback type="invalid">1212</Form.Control.Feedback>
//     </>
//   )
// }

const UserInfo = () => {
  const [selectedCreditCard, setSelectedCreditCard] = useState('0')

  const creditCards = [
    { value: '0', name: 'visa' },
    { value: '1', name: 'jcb' },
    { value: '2', name: 'master' },
    { value: '3', name: 'unionPay' },
  ]

  return (
    <section className="user">
      <h2 className="title text-white">信用卡付款</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          acceptedTerms: false, // added for our checkbox
          jobType: '', // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions.'),
          jobType: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form noValidate>
          <Form.Row>
            <FormGroup as={Col} md="4">
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
            </FormGroup>
            <FormGroup as={Col} md="6">
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
            </FormGroup>
          </Form.Row>

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  )
}

export default UserInfo
