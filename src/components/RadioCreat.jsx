import PropTypes from 'prop-types'

const RadioCreat = ({ radios, state, setState, classNameActive }) => {
  return (
    <div>
      {radios.map((radio, idx) => (
        <label
          key={idx}
          htmlFor={radio.name}
          className={`btn-cus d-flex align-items-center flex-wrap text-left pl-5 mb-3 ${
            radio.value === state && `${classNameActive}-active`
          }`}
        >
          <input
            type="radio"
            name="method"
            id={radio.name}
            value={radio.value}
            checked={radio.value === state}
            onChange={(e) => setState(e.currentTarget.value)}
            style={{ display: 'none' }}
          />
          <div>{radio.name}</div>

          {radio.text && (
            <span className="sub-text">
              &nbsp; &nbsp; &nbsp;{`(${radio.text})`}
            </span>
          )}
        </label>
      ))}
    </div>
  )
}

RadioCreat.propTypes = {
  radios: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  classNameActive: PropTypes.string.isRequired,
}

export default RadioCreat
