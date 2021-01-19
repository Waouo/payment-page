import { Form, Col } from 'react-bootstrap'
import { useFormikContext } from 'formik'
import useCreditField from '../hook/useCreditField'
import TextInput from './TextInput'

const CardFields = () => {
  const { handleKeyUp } = useCreditField()

  const cardFields = ['card_0', 'card_1', 'card_2', 'card_3']

  const { errors, touched } = useFormikContext()

  return (
    <>
      <Form.Row name="credit_card_number">
        {cardFields.map((cardField, idx) => (
          <Form.Group as={Col} md="3" key={idx}>
            <TextInput
              label={cardField}
              srOnly
              name={cardField}
              type="text"
              maxLength="4"
              placeholder="****"
              onKeyUp={handleKeyUp}
            />
          </Form.Group>
        ))}
        {touched.card_0 &&
          touched.card_1 &&
          touched.card_2 &&
          touched.card_3 &&
          errors.card_0 &&
          errors.card_1 &&
          errors.card_2 &&
          errors.card_3 && <div className="input-error">請輸入信用卡號碼</div>}
      </Form.Row>
    </>
  )
}

export default CardFields
