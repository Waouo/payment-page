import { useState } from 'react'

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
      <div className="w-100 d-flex justify-content-between">
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
      <form>
        <label htmlFor="creditCardUser" className="text-white">
          持卡人
        </label>
        <input type="text" id="creditCardUser" className="userForm-input" />
      </form>
    </section>
  )
}

export default UserInfo
