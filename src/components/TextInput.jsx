import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const TextInput = ({ label, srOnly, invalid, ...props }) => {
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(props)

  const labelClassName = 'input-label-font mb-2'

  return (
    <>
      {srOnly ? (
        <Form.Label
          className={labelClassName}
          htmlFor={props.name || props.id}
          srOnly
        >
          {label}
        </Form.Label>
      ) : (
        <Form.Label className={labelClassName} htmlFor={props.name || props.id}>
          {label}
        </Form.Label>
      )}

      <Form.Control className="text-input" {...field} {...props} />
      {invalid && meta.touched ? (
        <div className="input-error">{meta.error}</div>
      ) : null}
    </>
  )
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.object,
  id: PropTypes.string,
  name: PropTypes.string,
  srOnly: PropTypes.bool,
  invalid: PropTypes.bool,
}

export default TextInput
