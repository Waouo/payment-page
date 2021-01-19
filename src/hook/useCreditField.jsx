const useCreditField = () => {
  return {
    handleKeyUp: (e) => {
      const { maxLength, value, name } = e.target
      // eslint-disable-next-line no-unused-vars
      const [fieldName, fieldIndex] = name.split('_')

      // Check if they hit the max character length
      if (value.length >= maxLength) {
        // Check if it's not the last input field
        console.log(fieldIndex)

        if (parseInt(fieldIndex, 10) < 3) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=card_${parseInt(fieldIndex, 10) + 1}]`
          )

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus()
          }
        }
      }
    },
  }
}



export default useCreditField
