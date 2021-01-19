/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Form, FormGroup, Col, Button, Row } from 'react-bootstrap'
import { Formik } from 'formik'
import TextInput from './TextInput'
import CardFields from './CardFields'
import validationSchema from '../validationSchema'
import GoodThurFields from './GoodThurFields'

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
      <h2 className="title text-white mb-5">信用卡付款</h2>
      <div className="w-100 d-flex justify-content-between mb-4">
        {creditCards.map((creditCard, idx) => (
          <label
            key={idx}
            htmlFor={creditCard.name}
            className={`${
              creditCard.value === selectedCreditCard
                ? `icon-${creditCard.name}-active`
                : `icon-${creditCard.name}`
            } 
              icon-credit d-flex align-items-center flex-wrap text-left pl-5 mb-33`}
          >
            <input
              type="radio"
              name="method"
              id={creditCard.name}
              value={creditCard.value}
              checked={creditCard.value === selectedCreditCard}
              onChange={(e) => setSelectedCreditCard(e.currentTarget.value)}
              style={{ display: 'none' }}
            />
          </label>
        ))}
      </div>

      <Formik
        initialValues={{
          cardUserName: '',
          card_0: '',
          card_1: '',
          card_2: '',
          card_3: '',
          goodThurMonth: '',
          goodThurYear: '',
          securityCode: '',
          phoneNumber: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {(formik) => (
          <Form noValidate onSubmit={formik.handleSubmit}>
            <TextInput
              label="持卡人"
              name="cardUserName"
              type="text"
              placeholder="請輸入持卡人姓名"
              invalid
            />
            <Form.Label
              className="input-label-font mb-2"
              htmlFor="credit_card_number"
            >
              信用卡號碼
            </Form.Label>
            <CardFields />

            <Form.Row>
              <FormGroup as={Col} md="6">
                <Form.Label className="input-label-font mb-2" htmlFor="goodThur">
                  有效月年
                </Form.Label>
                <GoodThurFields />
              </FormGroup>
              <FormGroup as={Col} md="6">
                <TextInput
                  label="信用卡背面末三碼"
                  name="securityCode"
                  type="text"
                  maxLength="3"
                  placeholder="***"
                  invalid
                />
              </FormGroup>
            </Form.Row>

            <TextInput
              label="手機號碼"
              name="phoneNumber"
              type="text"
              maxLength="10"
              invalid
            />
            <Form.Text id="phoneNumberHelpBlock">
              如非台灣手機號碼請加國碼，如香港為852，則輸入852123456789。
              若刷卡驗證採簡訊驗證，簡訊將發送至您於發卡銀行留存的手機號碼。
            </Form.Text>
            <Row className="justify-content-center ">
              <Button className="user-button text-center" type="submit">
                確認付款
              </Button>
            </Row>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default UserInfo
