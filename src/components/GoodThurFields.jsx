import { useFormikContext } from 'formik'
import PropTypes from 'prop-types'
import { Form, Col } from 'react-bootstrap'
import TextInput from './TextInput'

const CardFields = () => {
  const { errors, touched } = useFormikContext()

  return (
    <>
      <Form.Row id="goodThur">
        <Form.Group as={Col} md="5">
          <TextInput
            label="goodThurMonth"
            name="goodThurMonth"
            type="text"
            placeholder="MM"
            srOnly
          />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <TextInput
            label="goodThurYear"
            name="goodThurYear"
            type="text"
            placeholder="YY"
            srOnly
          />
        </Form.Group>
        {touched.goodThurMonth &&
          touched.goodThurYear &&
          errors.goodThurMonth &&
          errors.goodThurYear && (<div className="input-error">必填欄位</div>)}
      </Form.Row>
    </>
  )
}

CardFields.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
}

export default CardFields
